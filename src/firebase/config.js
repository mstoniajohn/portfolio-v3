import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
	apiKey: `${process.env.VUE_APP_FIREBASE_API_KEY}`,
	authDomain: `${process.env.VUE_APP_FIREBASE_AUTH}`,
	projectId: `${process.env.VUE_APP_FIREBASE_ID}`,
	storageBucket: `${process.env.VUE_APP_FIREBASE_STORAGE}`,
	messagingSenderId: `${process.env.VUE_APP_FIREBASE_SENDER_ID}`,
	databaseURL: `${process.env.VUE_APP_FIREBASE_DATABASE_URL}`,
	appId: `${process.env.VUE_APP_FIREBASE_APP_ID}`,
};

//init app
firebase.initializeApp(firebaseConfig);
//init firestore
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// const storage = firebase.storage();
// const db = firebase.database();
// const projectAuth = firebase.auth();

export { projectFirestore, timestamp };
