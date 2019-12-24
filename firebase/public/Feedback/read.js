function concatObj(obj, arrayKey) {
    var temp = [];

    Object.entries(obj).forEach(([key, val]) => temp.push(val[arrayKey]));

    return temp.join(', ');
}

function renderFeedback(doc) {
    const feedbacklist = $('#feedback-list');
    const data = doc.data();
    console.log(data);

    var dom = `
        <span data-id=${doc.id } class="list-group-item">
            <li>${data.feedback}</li>
        </span>
    `;

    feedbacklist.append(dom);
}





db.collection('feedback').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderFeedback(doc);
    });
});