// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBG0kDf2TQECLLppQeX017fuGF8hNHRQME',
	authDomain: 'travel-b0c0c.firebaseapp.com',
	projectId: 'travel-b0c0c',
	storageBucket: 'travel-b0c0c.appspot.com',
	messagingSenderId: '604573273292',
	appId: '1:604573273292:web:5de3828608bf7c8b6dc669',
};

// Initialize Firebase
export const initiFirebase = initializeApp(firebaseConfig);
