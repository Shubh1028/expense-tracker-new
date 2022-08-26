import React, {Fragment, useRef, useState, useEffect} from 'react'
import styles from"./AddExpense.module.css";
import ExpenseAdded from './ExpenseAdded';


const AddExpense = () => {
    const amountRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();

    const[item, getDetail] = useState([]);

    let username = localStorage.getItem("email") || " ";
    let t = "";
    for (let i = 0; i < username.length; i++) {
        if (username[i] === '.' || username[i] === '@') {
            continue;
        }
        else {
            t += username[i];
        }
    }
    username = t;

    useEffect(() => {
        fetch(`https://expense-tracker-authentication-default-rtdb.firebaseio.com/expenseList/${username}.json`)
        .then((res) => {
            if (!res.ok) {
                console.log("Something went wrong!");
            }
            else {
                return res.json();
            }
        })
        .then((data) => {
            let localItem = [];
            for (let [key, value] of Object.entries(data)) { 
                localItem.push({ key, ...value });
            }
            getDetail(localItem)
        })
    },[])

    

    const addExpenseHandler = async (e) => {
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

       const res = await fetch(`https://expense-tracker-authentication-default-rtdb.firebaseio.com/expenseList/${username}.json`, {
            method: "POST",
            body: JSON.stringify(details)
        });
        if (res.ok) {
        amountRef.current.value = ''
        categoryRef.current.value = ''
        descriptionRef.current.value = ''
        } else {
            console.log(res)
        }
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
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Salary">Salary</option>
            <option value="Medical">Medical</option>
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


