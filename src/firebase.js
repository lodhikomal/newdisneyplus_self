import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCanXPlxnE9Qur8Gk06QZXRU24Xbhmqo3w",
  authDomain: "newdisneyself.firebaseapp.com",
  projectId: "newdisneyself",
  storageBucket: "newdisneyself.appspot.com",
  messagingSenderId: "515855049457",
  appId: "1:515855049457:web:8e0d0533d8e5c2356dff50",
  measurementId: "G-5X1BGCV5Y9",
};
const app = initializeApp(firebaseConfig);

// Create instances of Firebase services you want to use
const auth = getAuth();
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export { auth, db, provider };
