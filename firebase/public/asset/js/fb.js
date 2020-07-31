var firebaseConfig = {
    apiKey: "AIzaSyDckUugsdOP1qZQH8c5Ep7aK4F0hFiN6Kk",
    authDomain: "apu-ta.firebaseapp.com",
    databaseURL: "https://apu-ta.firebaseio.com",
    projectId: "apu-ta",
    storageBucket: "apu-ta.appspot.com",
    messagingSenderId: "368332746085",
    appId: "1:368332746085:web:5d1842e98433e54d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Select the database
const db = firebase.firestore();

function logout() {
    firebase.auth().signOut()
        .then(function() {})
        .catch(function(error) {
            alert(error);
        });
}