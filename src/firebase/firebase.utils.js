import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMWx2g0p-v88XCfyM_BWJEqy_IGZQbywE",
  authDomain: "dressup-db.firebaseapp.com",
  projectId: "dressup-db",
  storageBucket: "dressup-db.appspot.com",
  messagingSenderId: "544860197962",
  appId: "1:544860197962:web:2044691911091ea11402b3",
  measurementId: "G-5LRS94DKW0",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
