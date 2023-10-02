import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { ExpenseItemProps } from "../../modules/expenseItem";
import { useState } from "react";
const Expenses = (props: { expenses: ExpenseItemProps[] }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter( expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        {filteredExpenses.length === 0 && <p>No Expense Found</p>}
        {filteredExpenses.map((expense: ExpenseItemProps) => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses