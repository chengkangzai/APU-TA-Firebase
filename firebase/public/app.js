firebase.auth().onAuthStateChanged(function(user) {
    if (user) window.location.href = "Lab/index.html";
});


//Incase ppl want to login by enter

function checkIfIsEnter(event) {
    if (event.keyCode == 13) login();
}

function login() {
    var email = $("#email").val();
    var password = $("#password").val();
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(response) {})
        .catch(function(error) {
            alert(error);
        });
}