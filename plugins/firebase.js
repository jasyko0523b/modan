import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAaWUHHtSArDFwIRK-9Tx3seEpGvyiBY6M",
    authDomain: "coachtech-modan.firebaseapp.com",
    projectId: "coachtech-modan",
    storageBucket: "coachtech-modan.firebasestorage.app",
    messagingSenderId: "45319322932",
    appId: "1:45319322932:web:ea523a4cd62da1ba09f961",
  });
}

export default firebase;
