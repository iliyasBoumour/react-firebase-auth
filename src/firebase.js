import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD8VOJEYsbJXIUIkTJprp-BoP2nC4jJ6bE",
  authDomain: "react-auth-2d34e.firebaseapp.com",
  projectId: "react-auth-2d34e",
  storageBucket: "react-auth-2d34e.appspot.com",
  messagingSenderId: "237088707633",
  appId: "1:237088707633:web:04abf5d2f9953b204cf110",
});

export const auth = firebaseConfig.auth();
export default firebaseConfig;
