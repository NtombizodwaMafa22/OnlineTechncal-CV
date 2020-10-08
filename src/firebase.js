import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRhZCO9OnwSSxL4tXcHNML6zu77rA8Rt4",
    authDomain: "ntombizodwamafatechnicalcv.firebaseapp.com",
    databaseURL: "https://ntombizodwamafatechnicalcv.firebaseio.com",
    projectId: "ntombizodwamafatechnicalcv",
    storageBucket: "ntombizodwamafatechnicalcv.appspot.com",
    messagingSenderId: "532437058836",
    appId: "1:532437058836:web:095dddbdc61f1097602e01"
});

var db = firebase.firestore();
export {db};