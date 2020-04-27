function registerUserAccount() {
    var email = $("#email").val();
    var password = $("#password").val();
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(response) {
            alert("Your account has been created");
            window.location.href = "../Lab/index.html";
        })
        .catch(function(error) {
            alert(error);
        });
}


function checkIfIsEnter(event) {
    if (event.keyCode == 13) registerUserAccount();
}