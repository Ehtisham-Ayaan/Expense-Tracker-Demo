import { ExpenseItemDate } from "../../modules/expenseItem"

const ExpenseDate = (props: ExpenseItemDate) => {
  const month = props.date.toLocaleString('en-US', {month: 'long'})
  const day = props.date.toLocaleString('en-US', {day: '2-digit'})
  const year = props.date.getFullYear()
  return (
    <div style={{border: '1px solid black', padding: '2px'}}>
      <div>{month}</div>
      <div>{year}</div>
      <div style={{fontSize: '20px', fontWeight: 'bold'}}>{day}</div>
    </div>
  )
}

export default ExpenseDate