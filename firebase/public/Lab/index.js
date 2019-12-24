firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        alert("Please log in to continue");
        window.location.href = "../index.html";
    }
});