import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

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
       </Switch>
      

    </Fragment>
   
  );
}

export default App;
