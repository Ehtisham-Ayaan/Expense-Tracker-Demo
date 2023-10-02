import { ExpenseItemProps } from "../../modules/expenseItem"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

const ExpenseItem = (props: ExpenseItemProps) => {
  
  return (
    <Card style={{display: 'flex', background: 'slategrey'}}>
      <ExpenseDate date={props.date}/>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', width: '100%' }}>
        <h2>{props.title}</h2>
        <div style={{marginTop: '20px'}}>${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem