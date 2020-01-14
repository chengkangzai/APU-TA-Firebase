function submitFeedback() {
    var feedback = document.getElementById("feedbackValue").value;
    var timestamp = firebase.firestore.Timestamp.fromDate(new Date());

    // Add a new document in collection "cities"
    db.collection("feedback").add({
            "feedback": feedback,
            "timestamp": timestamp
        })
        .then(function() {
            console.log("Document successfully written!");
            alert("Thanks for your feedback !");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
            alert("What a shame... there is an error"+error);
        });
    clearInput();
}

function clearInput() {
    document.getElementById("feedbackValue").value = "";
}