// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiIFX3uVYSum6-Cjqdbk2dC3EYW2OV2N0",
    authDomain: "kabum-price-analysis.firebaseapp.com",
    projectId: "kabum-price-analysis",
    storageBucket: "kabum-price-analysis.appspot.com",
    messagingSenderId: "47727656417",
    appId: "1:47727656417:web:42727221d0fd7bf9b1a6a0"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export {firebase}
