export interface ExpenseItemProps {
  id?: string,
  title: string;
  amount: number;
  date: Date;
}

export interface ExpenseItemDate {
  date: Date
}

export interface ExpenseFormProps {
  onSaveExpenseData?: (enteredExpenseData: ExpenseItemProps) => void;
  onAddExpenseHandler?: (enteredExpenseData: ExpenseItemProps) => void;
}