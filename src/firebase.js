import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDbyfMQjeLIZn_3K9PeQ-es8RBqKXrOSb4",
    authDomain: "fir-7cda1.firebaseapp.com",
    databaseURL: "https://fir-7cda1.firebaseio.com",
    projectId: "fir-7cda1",
    storageBucket: "fir-7cda1.appspot.com",
    messagingSenderId: "810959154784",
    appId: "1:810959154784:web:45ab71a6a45af64c905d05",
    measurementId: "G-ZW015Z66LX"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()


export { db, auth }
