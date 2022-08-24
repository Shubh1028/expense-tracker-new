import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import UpdateProfile from './components/pages/UpdateProfile';

function App() {
  return (
    <Fragment>
      <Switch>
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
       </Switch>
      

    </Fragment>
   
  );
}

export default App;
