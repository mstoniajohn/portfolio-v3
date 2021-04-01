import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyC7DrrP16MBjD3hvU9on1qRshqYUj8FdO8',
	authDomain: 'vue-udemy-cc1b7.firebaseapp.com',
	projectId: 'vue-udemy-cc1b7',
	storageBucket: 'vue-udemy-cc1b7.appspot.com',
	messagingSenderId: '14672674618',
	databaseURL: 'https://vue-udemy-cc1b7-default-rtdb.firebaseio.com',
	appId: '1:14672674618:web:fabe11269762634d55da03',
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
