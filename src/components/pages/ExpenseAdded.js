import styles from './ExpenseAdded.module.css'

const ExpenseAdded = (props) => {
    

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
          
            <tr>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>)

}
export default ExpenseAdded