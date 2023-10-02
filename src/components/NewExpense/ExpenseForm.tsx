import React, { PropsWithChildren, useState } from 'react'
import { ExpenseFormProps, ExpenseItemProps } from '../../modules/expenseItem'
const ExpenseForm: React.FC<ExpenseFormProps> = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  
    if (props && props.onSaveExpenseData) {
      const expenseData: ExpenseItemProps = {
        title: enteredTitle,
        amount: enteredAmount as any as number,
        date: new Date(enteredDate),
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div>
          <label>Amount</label>
          <input type='number' min="0.01" step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
