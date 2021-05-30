import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBWIglNR1XL5D7lTETz6Z03HOdStp3ezuM",
    authDomain: "baatein-74d51.firebaseapp.com",
    projectId: "baatein-74d51",
    storageBucket: "baatein-74d51.appspot.com",
    messagingSenderId: "1098336337654",
    appId: "1:1098336337654:web:f7f27d5e9d7258c5f136d7"
  };

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();   

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};