import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import Header from './components/UI/Header';

const DUMMY_EXPENSES = [
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Expense example',
    amount: 29.9,
    date: new Date(2021, 7, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExtenses) => {
      console.log(prevExtenses);
      return [expense, ...prevExtenses];
    });
  };

  const handleDelete = (itemId) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => expense.id !== itemId
      );
      return updatedExpenses;
    });
  };

  return (
    <div>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses deleteItem={handleDelete} items={expenses} />
    </div>
  );
}

export default App;
