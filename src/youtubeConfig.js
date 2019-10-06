import gapi from "gapi";

let config = {
    API_KEY: "AIzaSyB_3zIpSArggwwgfWkOxc9yh9f4BQ3lWUY",
    CLIENT_ID: "1034925747541-po2gk9n45oi19mv23kidjts57u6446a0.apps.googleusercontent.com",
    SCOPES: "https://www.googleapis.com/auth/youtube " +
        "https://www.googleapis.com/auth/youtube.force-ssl " +
        "https://www.googleapis.com/auth/youtube.readonly " +
        "https://www.googleapis.com/auth/youtube.upload",
    DISCOVERY_URL: [
        "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
    ]
};


function initClient(config) {
    gapi.client
        .init({
            apiKey: config.API_KEY,
            discoveryDocs: config.DISCOVERY_URL,
            clientId: config.CLIENT_ID,
            scope: config.SCOPES
        })
        .then(function () {
            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            // Handle the initial sign-in state.
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            authorizeButton.onclick = handleAuthClick;
            signoutButton.onclick = handleSignoutClick;
        });
}

initClient(config);
