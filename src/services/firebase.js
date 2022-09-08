import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/auth'

const firebaseConfig = {
	apiKey: "AIzaSyD_dIMYmE-MoLG_7IaI3H09OAOdmK-RdsE",
	authDomain: "reactapp-8c38f.firebaseapp.com",
	projectId: "reactapp-8c38f",
	storageBucket: "reactapp-8c38f.appspot.com",
	messagingSenderId: "905474821511",
	appId: "1:905474821511:web:d269f37a257b4ae5dd9722"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();