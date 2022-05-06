import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig= 
    {
        apiKey: "AIzaSyBpWLi9ctdexqkYHBWZBhz66bFaQeUeyZk",
        authDomain: "clone-462d1.firebaseapp.com",
        projectId: "clone-462d1",
        storageBucket: "clone-462d1.appspot.com",
        messagingSenderId: "835533108719",
        appId: "1:835533108719:web:85e2a940bdef4a149fb21a",
        measurementId: "G-61T525QTE5"
    }

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};