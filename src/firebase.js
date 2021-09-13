import { initializeApp }from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1cdi363waF1hqVnzfE4hkb035uW2O1qc",
  authDomain: "student-query-portal.firebaseapp.com",
  projectId: "student-query-portal",
  storageBucket: "student-query-portal.appspot.com",
  messagingSenderId: "532731157597",
  appId: "1:532731157597:web:723744d33513ba8819c1b4"
};

export const app = initializeApp(firebaseConfig);
