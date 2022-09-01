import { Fragment } from "react";
import { NavLink, useHistory, } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";


import "./MainNavigation.css";




const MainNavigation = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated)
    const dispatch =useDispatch();

    let isLoggedin = localStorage.getItem('token')
    console.log(isAuth)

    const history = useHistory();
    dispatch(authActions.logout());

    const logoutHandler = () => {
        localStorage.removeItem('token')
        history.replace('/login')
        window.location.reload()
        dispatch(authActions.logout());
    }
   
    return (
        <Fragment>
            <div className="container">
                <ul className="nav">
                    {console.log(isAuth)}
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