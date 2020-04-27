function logout() {
    firebase.auth().signOut()
        .then(function() {})
        .catch(function(error) {
            alert(error);
        });
}