import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCkbgCmi8mHT18Vb8xWUNLFnZnUco6XEMQ",
  authDomain: "tucson-3d.firebaseapp.com",
  projectId: "tucson-3d",
  storageBucket: "tucson-3d.appspot.com",
  messagingSenderId: "194735258753",
  appId: "1:194735258753:web:f1366c2604cbe4fedde180",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

export const auth = fb.auth();
