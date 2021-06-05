import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeT1nF3qeE0N9J4w2TSsFrozDoRz_CJX4",
    authDomain: "juneday-49362.firebaseapp.com",
    projectId: "juneday-49362",
    storageBucket: "juneday-49362.appspot.com",
    messagingSenderId: "494120609333",
    appId: "1:494120609333:web:be691d3aad085607f5f37c",
    measurementId: "G-88LW68BHPN"
  };

//   export default firebaseConfig;
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db  = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;