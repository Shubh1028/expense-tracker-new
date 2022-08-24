import React, {Fragment, useRef} from 'react'
import { NavLink, useHistory } from "react-router-dom";
import "./SignUp.css";
// import AuthContext from '../Store/auth-context';

const UpdateProfile = () => {
    let fetchNameRef = useRef();
    let fetchPhotoRef = useRef();
 
    const history = useHistory();

    const updateFormHandler = (e) => {
        e.preventDefault();
        let enteredName = fetchNameRef.current.value;
        let enteredPhoto = fetchPhotoRef.current.value;
         
if(enteredName && enteredPhoto) {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAdJZauQNFCHPG1PLjvZcjucdQn4HiktL0', {
            method: 'POST',
            body: JSON.stringify({
              idToken: localStorage.getItem('token'),
              displayName: enteredName,
              photoUrl: enteredPhoto,
              returnSecureToken: true
          }),
          headers:{ 
            'Content-Type': 'application/json'
         }
          })
          .then( res => {
            if(res.ok) {
                console.log(res.json());
                // history.replace('/home')
              console.log('Updated!!')
            } else {
              return res.json().then(data => {
                alert(data.error.message);
              });
            }
          }
          )
        }
      else {
          alert ('Please Fill All The Details')
        }
    }
  
  return (
   <form className="contact-form" onSubmit={updateFormHandler}>
    <h1>Update Your Profile 👇</h1>
    <div>
        <label htmlFor="name">Full Name</label><br/>
        <input type='text' id='name' placeholder="Enter Your Full Name" ref={fetchNameRef}/>
    </div>
    <div>
        <label htmlFor="photo">Profile Photo URL</label><br/>
        <input type='text' id='photo' placeholder="Enter Your URL" ref={fetchPhotoRef}/>
    </div>
    <button type='submit'>Update</button>
   </form>
   
  );
};
export default UpdateProfile;