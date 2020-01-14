firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "Lab/index.html";
    } else {

    }
});

//Incase ppl want to login by enter

function checkIfIsEnter(event) {
    var x = event.keyCode;
    submit = document.getElementById("submit");
    if (x == 13) { // 13 is the Enter(Return) key
        submit.click();
    }
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(response) {
            alert("You are authorized to enter the dark age");
            window.location.href = "Lab/index.html";
        })
        .catch(function(error) {
            alert("There is some error !" + error);
            window.location.href = "register.html";
        });
}