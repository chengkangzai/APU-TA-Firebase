function submitFeedback() {
    var feedback = document.getElementById("feedbackValue").value;
    // Add a new document in collection "cities"
    db.collection("feedback").add({
            "feedback": feedback
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    clearInput();
}

function clearInput() {
    document.getElementById("feedbackValue").value = "";
}