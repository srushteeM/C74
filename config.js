import * as firebase from "firebase"

require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-B3cJDO1NGeHv3mQWNtykQpyr7uUJ64I",
    authDomain: "onlinelib-bdb45.firebaseapp.com",
    databaseURL: "https://onlinelib-bdb45.firebaseio.com",
    projectId: "onlinelib-bdb45",
    storageBucket: "onlinelib-bdb45.appspot.com",
    messagingSenderId: "1024732322912",
    appId: "1:1024732322912:web:33ae61beb4584b53a9b705",
    measurementId: "G-FSD9QKS7D2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();