const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDlDuIoQu2gOdSJ9g8FkiefxNQdrzRzszs",
authDomain: "kiei-451-954b2.firebaseapp.com",
projectId: "kiei-451-954b2",
storageBucket: "kiei-451-954b2.appspot.com",
messagingSenderId: "331089885613",
appId: "1:331089885613:web:52bbe00e052048c04cc924"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase