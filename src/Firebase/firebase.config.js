// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgVI1KhcgJjkTEPpbqeH_lgpshEjZVZns",
    authDomain: "instramgram-homepage.firebaseapp.com",
    projectId: "instramgram-homepage",
    storageBucket: "instramgram-homepage.appspot.com",
    messagingSenderId: "255186738174",
    appId: "1:255186738174:web:b3189427f38e15312e7eaf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)