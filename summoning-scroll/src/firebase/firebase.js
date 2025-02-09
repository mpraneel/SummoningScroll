
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9DPk0wtK0OEuC5SSXausDSMlsbkl5c7Y",
  authDomain: "summoningscroll-a615d.firebaseapp.com",
  projectId: "summoningscroll-a615d",
  storageBucket: "summoningscroll-a615d.firebasestorage.app",
  messagingSenderId: "86023908629",
  appId: "1:86023908629:web:70392a44c3b8f99f8e4d1c"
};

// Initialize Firebase app (only once)
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Export firebase services
export const db = getFirestore(app);
export default app;