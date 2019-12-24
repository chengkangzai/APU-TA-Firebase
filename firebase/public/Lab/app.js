const pclist = $('#pc-list');

//https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
var url_string = window.location.href; // window.location.href
var url = new URL(url_string);
var lab = url.searchParams.get("lab");


function concatObj(obj, arrayKey) {
    var temp = [];

    Object.entries(obj).forEach(([key, val]) => temp.push(val[arrayKey]));

    return temp.join(', ');
}

function renderPC(doc) {
    const data = doc.data();
    console.log(data);

    var dom = `
        <tr data-id=${doc.id }>
            <td>${doc.id}</td>
            <td>${data.CPU}</td>
            <td>${data.Model}</td>
            <td>${concatObj(data.GPUs, 'Name')}</td>
            <td>${concatObj(data.RAMs, 'Capacity')}</td>
            <td>${concatObj(data.Storage, 'Size')}</td>

        </tr>
    `;

    pclist.append(dom);
}



db.collection('labs').doc(lab).collection('computers').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderPC(doc);
    });
});
if (lab == "APLC-L2") {
    db.collection('labs').doc('APLC-L3').collection('computers').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            renderPC(doc);
        });
    });
}

function goback() {
    window.history.go(-1);
}