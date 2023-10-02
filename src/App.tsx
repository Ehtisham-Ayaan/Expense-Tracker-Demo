import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { ExpenseItemProps } from "./modules/expenseItem";
import { useState } from "react";

const DUMMY_EXPENSES: Array<{
  id?: string,
  title: string;
  amount: number;
  date: Date;
}> = [
  { id: 'e1', title: 'News paper', amount: 94.67, date: new Date(2020, 2, 28) },
  { id: 'e2', title: 'New TV', amount: 794.67, date: new Date(2021, 2, 18) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'Desk', amount: 394.67, date: new Date(2021, 5, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense: ExpenseItemProps) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <Card>
      <NewExpense onAddExpenseHandler={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </Card>
  );
}

export default App;
