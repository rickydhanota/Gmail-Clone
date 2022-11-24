import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDj6_qZiQDdpgEba-2VFsgypHefDRo34a0",
    authDomain: "clone-9890d.firebaseapp.com",
    projectId: "clone-9890d",
    storageBucket: "clone-9890d.appspot.com",
    messagingSenderId: "846088496683",
    appId: "1:846088496683:web:845daa1923a7086974ac6e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}