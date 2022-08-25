import React, {Fragment, useRef} from 'react'
import "./SignUp.css";
// import AuthContext from '../Store/auth-context';

const AddExpense = () => {
   
  
  return (
    <Fragment>
   <form className="contact-form">
    <h1>Fill Expense Details 👇</h1>
    <div>
        <label htmlFor="amount">Amount</label><br/>
        <input type='text' id='amount' placeholder="Enter Your Amount"/>
    </div>
    <div>
        <label htmlFor="description">Password</label><br/>
        <textarea type='text' id='description' placeholder="Enter Your Password" rows={2}/>
    </div>
    <div>
        <label htmlFor="cpassword">Category</label><br/>
        <select>
            <option>----</option>
            <option>Food</option>
            <option>Petrol</option>
            <option>Salary</option>
        </select>
    </div>
    <button type='submit'>Submit</button>
   </form>
   
   </Fragment>
  );
};
export default AddExpense;


