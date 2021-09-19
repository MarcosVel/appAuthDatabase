// expo install firebase@^8.8.1

import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuXd461i05y8uYcBD-4tTFhLNYRDt4urA",
  authDomain: "appauthdatabase.firebaseapp.com",
  databaseURL: "https://appauthdatabase-default-rtdb.firebaseio.com",
  projectId: "appauthdatabase",
  storageBucket: "appauthdatabase.appspot.com",
  messagingSenderId: "49941049809",
  appId: "1:49941049809:web:ad9735ce63cd14b96530f0",
  measurementId: "G-25TNHXVPM5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;