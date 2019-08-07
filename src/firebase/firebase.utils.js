import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArqe7OedNfgayFQ_cmBp3lmg6WYUXOlfw",
    authDomain: "crwn-db-c46d5.firebaseapp.com",
    databaseURL: "https://crwn-db-c46d5.firebaseio.com",
    projectId: "crwn-db-c46d5",
    storageBucket: "crwn-db-c46d5.appspot.com",
    messagingSenderId: "994782788681",
    appId: "1:994782788681:web:8731680ffc6ecd2f"
  };

    export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();


        if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try{
              await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
              })
          }catch(error){
            console.log('error creating user', error.message);
          }
        }

        return userRef;
    }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;