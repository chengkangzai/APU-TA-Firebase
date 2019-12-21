const lablist = $('#pc-list');

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
        </tr>
    `;

    lablist.append(dom);
}
//https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters


db.collection('labs').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderPC(doc);
    });
});