import { Fragment } from "react";
import { NavLink, useHistory, Redirect } from 'react-router-dom';


import "./MainNavigation.css";


const MainNavigation = () => {

    let isLoggedin = localStorage.getItem('token')

    const history = useHistory();

    const logoutHandler = () => {
        localStorage.removeItem('token')
        history.replace('/login')
        window.location.reload();
    }
   
    return (
        <Fragment>
            <div className="container">
                <ul className="nav">
                    <li>
                   {isLoggedin &&  <NavLink className="a-link"  to='/home'>Home</NavLink> }
                   {!isLoggedin &&   <NavLink className="a-link"  to='/login'>Home</NavLink>}
                    </li>
                    {isLoggedin &&  <li>
                        <NavLink className="a-link"  to="/updateProfile">Profile</NavLink>
                    </li> }
                    {!isLoggedin && <li>
                       <NavLink className="a-link"  to="/signUp">Sign Up</NavLink>
                    </li>  }
                    {!isLoggedin && <li>
                        <NavLink className="a-link"  to="/login">Login</NavLink>
                    </li> }
                {isLoggedin &&  <li>
                        <span className="a-link" onClick={logoutHandler}>Logout</span>
                    </li> }
                </ul>
            </div>
        </Fragment >
    )
}

export default MainNavigation;