import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyALmTIIpsX9eXDh-SkrtPQSjmk5FkPJmD8",
    authDomain: "crud-udemy-react-e64fe.firebaseapp.com",
    projectId: "crud-udemy-react-e64fe",
    storageBucket: "crud-udemy-react-e64fe.appspot.com",
    messagingSenderId: "1031044252362",
    appId: "1:1031044252362:web:eab0a2b3ff414f2c03aa33"
};
  
  // Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db, auth}