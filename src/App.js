import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import UpdateProfile from './components/pages/UpdateProfile';
import ResetPassword from './components/pages/ResetPassword';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact>
          <Login/>
        </Route>
      <Route path='/signup'>
          <SignUp />
      </Route>
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
       </Switch>
    </Fragment>
   
  );
}

export default App;
