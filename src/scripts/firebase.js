import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBJ6oNOhZlXlgHUkg3gXWjPrh6dtCI8qVA",
    authDomain: "fit-react-app.firebaseapp.com",
    projectId: "fit-react-app",
    storageBucket: "fit-react-app.appspot.com",
    messagingSenderId: "424716130007",
    appId: "1:424716130007:web:9a4f21589ee89447834292",
    isLogged: false
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

  export default firebase;