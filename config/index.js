import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDj2pLJStinJya6vVR5UavrC6njkCZIjoY',
	authDomain: 'fir-native-54fc5.firebaseapp.com',
	databaseURL: 'https://fir-native-54fc5.firebaseio.com',
	projectId: 'fir-native-54fc5',
	storageBucket: 'fir-native-54fc5.appspot.com',
	messagingSenderId: '84366657281',
	appId: '1:84366657281:web:229d639bda3b980b78bd00',
	measurementId: 'G-JKFY3RS7ZJ',
};

firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = firebase.database();
