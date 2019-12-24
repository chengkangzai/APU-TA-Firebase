function register() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(response) {
            alert("Your account has been created" + response);
        })
        .catch(function(error) {
            alert("There is some error" + error);
        });
}

function checkIfIsEnter(event) {
    var x = event.keyCode;
    submit = document.getElementById("submit");
    if (x == 13) { // 13 is the Enter(Return) key
        submit.click();
    }
}