function concatObj(obj, arrayKey) {
    var temp = [];

    Object.entries(obj).forEach(([key, val]) => temp.push(val[arrayKey]));

    return temp.join(', ');
}

function renderFeedback(doc) {
    const feedbacklist = $('#feedback-list');
    const data = doc.data();
    console.log(data);

    var timestamp="";
    if (!data.timestamp) {
        timestamp="n/a";
    }else{
        var time=data.timestamp.toDate();
        timestamp= new Date(time);
        timestamp=timestamp.toLocaleDateString('en-GB');
    }

    var dom = `
    <tr id="${doc.id}">
        <td>${data.feedback}</td>
        <td>${timestamp}</td>
        <td><a class="btn btn-danger text-white" onclick="deleteEntry('${doc.id}');">delete </a></td>
    </tr>
    `;

    feedbacklist.append(dom);
}

function deleteEntry(docId){
    db.collection("feedback").doc(docId).delete().then(function() {
        console.log("Document successfully deleted!");
        $("#"+docId).hide();
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}



db.collection('feedback').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderFeedback(doc);
    });
}).catch(function(error) {
    console.error("Error writing document: ", error);
    console.log (error.code);
    if (error.code == "permission-denied") {
        alert("You have no permission to view the page");
        window.history.go(-1);
        
    }
});