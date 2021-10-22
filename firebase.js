// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAG4x_nHgZAB12Vtvs7ueeyfmWAIEMbccs',
  authDomain: 'fir-auth-90944.firebaseapp.com',
  projectId: 'fir-auth-90944',
  storageBucket: 'fir-auth-90944.appspot.com',
  messagingSenderId: '296641791742',
  appId: '1:296641791742:web:32272fa8ca3e488f2747af',
}
let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}
// Initialize Firebase
const auth = firebase.auth()
export { auth }
