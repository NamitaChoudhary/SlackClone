import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyDrLHu_yTMserRYCiafEQMtXJEIUNvIamE",
    authDomain: "react-slack-clone-18325.firebaseapp.com",
    databaseURL: "https://react-slack-clone-18325.firebaseio.com",
    projectId: "react-slack-clone-18325",
    storageBucket: "react-slack-clone-18325.appspot.com",
    messagingSenderId: "1020264515408",
    appId: "1:1020264515408:web:d7483adaf0ecf627444e55",
    measurementId: "G-BLRL4Y4H2D"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;