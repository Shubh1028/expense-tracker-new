import React, {Fragment, useRef} from 'react'
import styles from"./AddExpense.module.css";
// import AuthContext from '../Store/auth-context';

const AddExpense = () => {
    const amountRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();

    const addExpenseHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountRef.current.value;
        const selectedCategory = categoryRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const details = {
            amount: enteredAmount,
            categoy: selectedCategory,
            description: enteredDescription
        }
        console.log(details)
    }
   
  
  return (
    <Fragment>
   <form className={styles.formContainer} onSubmit={addExpenseHandler}>
    <h1>Fill Expense Details 👇</h1>
    <div className={styles.addExpense}>
    <div>
        <label htmlFor="amount">Amount</label><br/>
        <input type='number' id='amount' placeholder="Enter Your Amount" ref={amountRef}/>
    </div>
    
    <div>
        <label htmlFor="category">Category</label><br/>
        <select id="category" ref={categoryRef}>
            <option value="">Select</option>
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="salary">Salary</option>
            <option value="medical">Medical</option>
        </select>
    </div>
    </div>
    <br/>
    <div>
        <label htmlFor="description">Description</label><br/>
        <textarea type='text' id='description' placeholder="Enter Description" rows={3} ref={descriptionRef}/>
    </div>
    <br/>
    <button type='submit'>Add Expense</button>
   </form>
   
   </Fragment>
  );
};
export default AddExpense;


