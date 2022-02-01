import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMWx2g0p-v88XCfyM_BWJEqy_IGZQbywE",
  authDomain: "dressup-db.firebaseapp.com",
  projectId: "dressup-db",
  storageBucket: "dressup-db.appspot.com",
  messagingSenderId: "544860197962",
  appId: "1:544860197962:web:2044691911091ea11402b3",
  measurementId: "G-5LRS94DKW0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, `users`, userAuth.uid);
  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      setDoc(userRef, { displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};
