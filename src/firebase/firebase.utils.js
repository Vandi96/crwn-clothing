import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyAsx-TiWG-Ivy7Ysy5i5cYWg7q_Bnc2cJU",
    authDomain: "crwn-db-edcc7.firebaseapp.com",
    databaseURL: "https://crwn-db-edcc7.firebaseio.com",
    projectId: "crwn-db-edcc7",
    storageBucket: "",
    messagingSenderId: "894546182842",
    appId: "1:894546182842:web:67183ecc2fa9a54f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;