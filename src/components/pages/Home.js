import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

import './Home.css'
const Home = () => {
    const verifyEmailHandler = () => {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAdJZauQNFCHPG1PLjvZcjucdQn4HiktL0', {
            method: 'POST',
            body: JSON.stringify({
                requestType: "VERIFY_EMAIL",
                idToken: localStorage.getItem('token')
            }),
            headers:{ 
                'Content-Type': 'application/json'
             }
        })
        .then((res) => {
            if(res.ok) {
            res.json().then(data => console.log(data))
            } else {
                res.json().then(data => {
                    alert(data.error.message);
                  });
            }
        })

    }
    return (
        <Fragment>
        <div className='home-container'>
            <div>welcome To Expense Tracker</div>
            <div>You Profile Is incomplete. <NavLink to='./updateProfile'>Complete Now</NavLink></div>
            <div>Verify Your Email Now.<button onClick={verifyEmailHandler}> Click Here</button></div>
        </div>
        </Fragment>
    )
}
export default Home;