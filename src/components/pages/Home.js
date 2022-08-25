import React, {Fragment} from 'react';
import {NavLink, useHistory} from 'react-router-dom';

import './Home.css'
const Home = () => {
    const history = useHistory();
   
   
    return (
        <Fragment>
        <div className='home-container'>
            <div>welcome To Expense Tracker</div>
            <div>You Profile Is incomplete. <NavLink to='./updateProfile'>Complete Now</NavLink></div>
        </div>
        </Fragment>
    )
}
export default Home;