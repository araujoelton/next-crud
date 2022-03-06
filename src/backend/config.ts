import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        /*apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID*/
        apiKey: "AIzaSyDRHw5PIi2TJ9Xl9KxCw6eVxvAYbpAoRzk",
        authDomain: "next-crud-53551.firebaseapp.com",
        projectId: "next-crud-53551",
        storageBucket: "next-crud-53551.appspot.com",
        messagingSenderId: "483427823092",
        appId: "1:483427823092:web:49b9b4a928648c0d7b5da1"
    })
}

export default firebase
