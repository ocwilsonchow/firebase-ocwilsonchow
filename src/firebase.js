import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCihMJxx3jsNkC5qdHgNxrdDmVbo7-toZQ",
  authDomain: "ocwilsonchow-web.firebaseapp.com",
  projectId: "ocwilsonchow-web",
  storageBucket: "ocwilsonchow-web.appspot.com",
  messagingSenderId: "26122753966",
  appId: "1:26122753966:web:e19263b6fd54d48320da3f"
});
export default firebaseApp;

export const db = getFirestore();
