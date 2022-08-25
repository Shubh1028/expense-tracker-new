import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';
import MainNavigation from './components/layout/MainNavigation';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import UpdateProfile from './components/pages/UpdateProfile';
import ResetPassword from './components/pages/ResetPassword';
import AddExpense from './components/pages/AddExpense';

function App() {
  let isLoggedin = localStorage.getItem('token')
  return (
    <Fragment>
      <MainNavigation/>
      <Switch>
        <Route path='/' exact>
          <Login/>
        </Route>
    {isLoggedin === null &&  <Route path='/signup'>
          <SignUp />
      </Route> }
       <Route path='/home'>
       <Home />
       </Route>
       <Route path='/login'>
       <Login />
       </Route>
       <Route path='/updateProfile'>
       <UpdateProfile />
       </Route>
       <Route path='/resetPass'>
       <ResetPassword />
       </Route>
       <Route path='/addExpense'>
       <AddExpense />
       </Route>
       </Switch>
    </Fragment>
   
  );
}

export default App;
