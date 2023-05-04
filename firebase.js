// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCivIF34gXufEogZNJS3mhVet3RiyC3OvE",
  authDomain: "fir-auth-d5bdd.firebaseapp.com",
  projectId: "fir-auth-d5bdd",
  storageBucket: "fir-auth-d5bdd.appspot.com",
  messagingSenderId: "485648662142",
  appId: "1:485648662142:web:d848c75ea6a40dd9aae22f"
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app()
// }

// const auth = firebase.auth()

// export { auth };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth();

export { auth };