const firebaseConfig = {
    apiKey: "AIzaSyBnGSt0xtlpA18QnLzJcMuc81ucGD2cO-A",
    authDomain: "hangman-login-details.firebaseapp.com",
    databaseURL: "https://hangman-login-details-default-rtdb.firebaseio.com",
    projectId: "hangman-login-details",
    storageBucket: "hangman-login-details.appspot.com",
    messagingSenderId: "509753054863",
    appId: "1:509753054863:web:30c2fbd961aade5789c2fa",
    measurementId: "G-52ZVVYBH44"
};

//initialize firebase:

firebase.initializeApp(firebaseConfig);

// reference

firebase.database().ref('')