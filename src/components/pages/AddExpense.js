import React, {Fragment, useRef, useState} from 'react'
import styles from"./AddExpense.module.css";
import ExpenseAdded from './ExpenseAdded';


const AddExpense = () => {
    const amountRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();

    const[item, getDetail] = useState([]);

    const addExpenseHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountRef.current.value;
        const selectedCategory = categoryRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const details = {
            amount: enteredAmount,
            category: selectedCategory,
            description: enteredDescription
        }
        getDetail([...item, details])

        amountRef.current.value = ''
        categoryRef.current.value = ''
        descriptionRef.current.value = ''
        

    }

  return (
    <Fragment>
   <form className={styles.formContainer} onSubmit={addExpenseHandler}>
    <h1>Fill Expense Details 👇</h1>
    <div className={styles.addExpense}>
    <div>
        <label htmlFor="amount">Amount</label><br/>
        <input type='number' id='amount'  placeholder="Enter Your Amount" ref={amountRef} required/>
    </div>
    
    <div>
        <label htmlFor="category">Category</label><br/>
        <select id="category" ref={categoryRef} required>
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
        <textarea type='text' id='description' placeholder="Enter Description" rows={3} ref={descriptionRef} required/>
    </div>
    <br/>
    <button type='submit'>Add Expense</button>
   </form>
   <ExpenseAdded items={item}/>
   </Fragment>
  );
};
export default AddExpense;


