import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCfrhUlRlF0GJgMUVUtwA2QD0To3hPkocQ",
    authDomain: "technical-cv-contact-react.firebaseapp.com",
    databaseURL: "https://technical-cv-contact-react.firebaseio.com",
    projectId: "technical-cv-contact-react",
    storageBucket: "technical-cv-contact-react.appspot.com",
    messagingSenderId: "149004581324",
    appId: "1:149004581324:web:19260ccf724600eb434569"
});

var db = firebase.firestore();
export {db};