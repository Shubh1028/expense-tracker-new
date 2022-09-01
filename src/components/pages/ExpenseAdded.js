import styles from './ExpenseAdded.module.css'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ExpenseAdded = (props) => {

    const dispatch = useDispatch();

    const handleClick = (id , isEdit) => {
        props.getId(id , isEdit)
    }

  
 
    

    return(<div className={styles.tableContainer}>
       
      <table>
        <thead>
            <tr>
                <td>Amount</td>
                <td>Category</td>
                <td>Description</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
        {props.items.map((expense) => (
        
            <tr key={Math.random() * 10}>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td className={styles.edit} onClick={() => handleClick(expense.key ,true)}><AiFillEdit/></td>
                <td className={styles.delete} onClick={() => handleClick(expense.key ,false)}><AiFillDelete/></td>
            </tr>
))}
        </tbody>
      </table>
    </div>)

}
export default ExpenseAdded