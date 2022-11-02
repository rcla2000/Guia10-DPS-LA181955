// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6OgJAt_GPMR-mHugOgJYD9KWYbkw8G6o",
  authDomain: "birthday-e42ca.firebaseapp.com",
  projectId: "birthday-e42ca",
  storageBucket: "birthday-e42ca.appspot.com",
  messagingSenderId: "674983321260",
  appId: "1:674983321260:web:4f0366ce0cd51b0c44c909"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;