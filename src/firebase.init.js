// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSSLTBevQGHMaWPM1rUTd-5U63LwN6U-E",
    authDomain: "lrn79-photography.firebaseapp.com",
    projectId: "lrn79-photography",
    storageBucket: "lrn79-photography.appspot.com",
    messagingSenderId: "757008034249",
    appId: "1:757008034249:web:c9ba12a9134a32fea52018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;