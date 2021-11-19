import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredList = props.items.filter((item) => {
    return item.date.getFullYear() === +filteredYear;
  });

  let expensesContent =
    filteredList.length > 0 ? (
      filteredList.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))
    ) : (
      <div className="no-expenses-msg">
        <p>No expenses found.</p>
      </div>
    );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {expensesContent}
    </Card>
  );
};

export default Expenses;
