import * as firebase from 'firebase';

const config ={
    apiKey: "AIzaSyBZyOzD7Sb6Sgj1is9_Vd368IhSKJCpcGc",
    authDomain: "goalcoach-5d545.firebaseapp.com",
    databaseURL: "https://goalcoach-5d545.firebaseio.com",
    projectId: "goalcoach-5d545",
    storageBucket: "",
    messagingSenderId: "120007354300"
};

export const firebaseApp = firebase.initializeApp(config);
