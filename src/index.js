import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import LoginForm from './login/login';
import SignupForm from './signup/signup';
import DashForm from './dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyBFbeWz3m_62vSG_GPGvT12RAX-n5ZOXBA",
    authDomain: "chat-945.firebaseapp.com",
    databaseURL: "https://chat-945.firebaseio.com",
    projectId: "chat-945",
    storageBucket: "chat-945.appspot.com",
    messagingSenderId: "631809300422",
    appId: "1:631809300422:web:a8bc63df961ab4a6"
 
})

const routing =(
    <Router>
        <div id='routing-container'>
           <Route exact path='/' component ={LoginForm}></Route>
           <Route path='/signup' component ={SignupForm}></Route>
           <Route path='/dashboard' component ={DashForm}></Route>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
