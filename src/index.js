import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from './firebase';

import {Router, Route, browserHistory} from 'react-router';

import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

firebaseApp.auth().onAuthStateChanged( user => {
    if(user) {
        console.log('user has signed in or up')
        browserHistory.push('/app');
    } else {
        console.log('user has signed out or not signed in yet')
    }
})

ReactDOM.render(
    <Router path="/" history={browserHistory}>
        <Route path = "/app" component={App}></Route>
        <Route path = "/signup" component={SignUp}></Route>
        <Route path = "/signin" component={SignIn}></Route>
    </Router>, document.getElementById('root')
)
