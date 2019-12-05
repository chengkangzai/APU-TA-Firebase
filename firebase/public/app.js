const pclist = $('#pc-list');

function concatObj(obj, arrayKey) {
    var temp = [];

    Object.entries(obj).forEach(([key, val]) => temp.push(val[arrayKey]));

    return temp.join(', ');
}

function renderPC(doc) {
    const data = doc.data();
    console.log(data);

    var dom = `
        <tr data=id=${doc.id}>
            <td>${doc.id}</td>
            <td>${data.CPU}</td>
            <td>${data.Model}</td>
            <td>${concatObj(data.GPUs, 'Description')}</td>
            <td>${concatObj(data.RAMs, 'Capacity')}</td>
        </tr>
    `;

    pclist.append(dom);
}

db.collection('labs')
    .doc('TL04-01')
    .collection('computers')
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => {
            renderPC(doc);
        });
    });
