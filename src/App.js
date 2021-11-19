import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import Header from './components/UI/Header';

const DUMMY_EXPENSES = [
  {
    id: Math.floor(Math.random() * 1000),
    title: 'Expense example',
    amount: 29.90,
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

  return (
    <div>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
