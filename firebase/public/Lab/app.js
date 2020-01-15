const pclist = $('#pc-list');
const tbody = $('#tbody')

//https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
var url_string = window.location.href; // window.location.href
var url = new URL(url_string);
var lab = url.searchParams.get('lab');

function formatBytes(bytes, decimals = 2) {
    if (!isNumeric(bytes)) return 'n/a';

    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function isNumeric(num) {
    return !isNaN(num);
}

function mergeObjectValue(primeObj, childKey, formatterFn) {
    if (!primeObj) return ['n/a'];

    var temp = [];

    Object.entries(primeObj).forEach(([key, childObject]) => {
        let value = childObject[childKey];

        // Convert string to number
        if (isNumeric(value)) {
            value = +value;
        }

        // Apply the formatter function (eg: Format bytes to gigabytes)
        if (formatterFn) {
            value = formatterFn(value);
        }

        temp.push(value);
    });

    return temp;
}

function renderPC(doc) {
    const data = doc.data();
    console.log(doc.id, data);

    const gpus = mergeObjectValue(data.GPUs, 'Name')
        .sort()
        .join('<br/>');

    const ramTotal = formatBytes(
        mergeObjectValue(data.RAMs, 'Capacity').reduce((acc, v) => acc + v)
    );

    const rams = mergeObjectValue(data.RAMs, 'Capacity', formatBytes).join(
        ', '
    );

    const storages = mergeObjectValue(data.Storage, 'Size', formatBytes).join(
        '<br/>'
    );

    const lastUpdate = data.Updated_Time
        ? data.Updated_Time.toDate()
        : new Date(doc['_document'].proto.updateTime);

    var dom = `
        <tr data-id=${doc.id}>
            <td>${doc.id}</td>
            <td>${data.CPU}</td>
            <td>${data.Model}</td>
            <td>${gpus}</td>
            <td>${ramTotal} <small>(${rams})</small></td>
            <td>${storages}</td>
            <td>${lastUpdate.toLocaleDateString('en-GB')}</td>
        </tr>
    `;
    tbody.append(dom);
}

if (lab === null) {
    goback();
} else {
    db.collection('labs')
        .doc(lab)
        .collection('computers')
        .get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                renderPC(doc);
            });
        })
        .then(function () {
            $('#pc-list').DataTable();
        });
    if (lab == 'APLC-L2') {
        db.collection('labs')
            .doc('APLC-L3')
            .collection('computers')
            .get()
            .then(snapshot => {
                snapshot.docs.forEach(doc => {
                    renderPC(doc);
                });
            });
    }
}

function goback() {
    window.history.go(-1);
}
