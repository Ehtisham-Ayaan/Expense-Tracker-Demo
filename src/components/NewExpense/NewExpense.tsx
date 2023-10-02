import ExpenseForm from "./ExpenseForm"
import { ExpenseFormProps, ExpenseItemProps } from "../../modules/expenseItem"
const NewExpense: React.FC<ExpenseFormProps> = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseItemProps) => {
    if (props && props.onAddExpenseHandler) {
      const expenseData: ExpenseItemProps= {
        ...enteredExpenseData,
        id: Math.random().toString()
      }
      props.onAddExpenseHandler(expenseData)
    }
  }

  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense