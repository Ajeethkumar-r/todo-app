import firebase from './firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyA_YfozS8m2ZWNXfigPUJDMmTPVnF7GYFk",
        authDomain: "todo-app-cp-76d27.firebaseapp.com",
        projectId: "todo-app-cp-76d27",
        storageBucket: "todo-app-cp-76d27.appspot.com",
        messagingSenderId: "507034422450",
        appId: "1:507034422450:web:1898ec6b5dcc02be848dab",
        measurementId: "G-W9PFHLCCHD"
})
const db = firebaseApp.firestore()
export default db
