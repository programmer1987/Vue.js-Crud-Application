 // Your web app's Firebase configuration


 import firebase from 'firebase'
 import firestore from 'firebase/firestore'

 var firebaseConfig = {
    apiKey: "AIzaSyCdr42DXNOlWgXjla_-AIJt68zAuaRohKs",
    authDomain: "udemy-ninjia-smoothies-85e0d.firebaseapp.com",
    databaseURL: "https://udemy-ninjia-smoothies-85e0d.firebaseio.com",
    projectId: "udemy-ninjia-smoothies-85e0d",
    storageBucket: "udemy-ninjia-smoothies-85e0d.appspot.com",
    messagingSenderId: "983281152712",
    appId: "1:983281152712:web:bb0f99636fb26ae87babfd",
    measurementId: "G-NDD4R9FK8Y"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //timestamp fields in the database to avoid the error in the browser
  //firebaseApp.firestore().settings({ timestampsInSnapshots: true });
  firebase.analytics();

  export default firebaseApp.firestore()