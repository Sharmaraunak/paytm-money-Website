import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import  Routes  from './routes';




ReactDOM.render(
  
   
    // <Router history={history}>
    //   <Route path = "home" component = {App}>
    //      <Route path = "signIn" component = {SignIn} />
    //   </Route>
    // </Router>
    <Router>
      <Routes/>
    </Router>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
