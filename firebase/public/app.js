var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            //document.getElementById('loader').style.display = 'none';
            $("#loader").hide();
        }
    },
    'credentialHelper': firebaseui.auth.CredentialHelper.NONE,
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'Lab/index.html',
    signInOptions: [{
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
    }],

};
ui.start('#authContainer', uiConfig);

//TODO
// Email link login

particleJS();
makeFloatOnParticle("authContainer");