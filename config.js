import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAyIA3_r4Z0cLqTl6zmUGXTayA5gZFWWow",
  authDomain: "wily-bb83d.firebaseapp.com",
  databaseURL: "https://wily-bb83d.firebaseio.com",
  projectId: "wily-bb83d",
  storageBucket: "wily-bb83d.appspot.com",
  messagingSenderId: "513671176502",
  appId: "1:513671176502:web:93b66b6dac439cd3c91397"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
