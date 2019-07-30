import firebase from "firebase/app";
import 'firebase/auth';

let config = {
    apiKey: "AIzaSyB_3zIpSArggwwgfWkOxc9yh9f4BQ3lWUY",
    authDomain: "edupan-38ad5.firebaseapp.com",
    databaseURL: "https://edupan-38ad5.firebaseio.com",
    projectId: "edupan-38ad5",
    storageBucket: "edupan-38ad5.appspot.com",
    messagingSenderId: "1034925747541"
};

firebase.initializeApp(config);

export default firebase;
