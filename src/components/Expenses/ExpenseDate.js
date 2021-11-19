import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const formatedDate = {
    day: date.toLocaleString('en-US', { day: 'numeric' }),
    month: date.toLocaleString('en-US', { month: 'long' }),
    year: date.toLocaleString('en-US', { year: 'numeric' }),
  };

  return (
    <div className="expense-date">
      <div className="expense-date__month">{formatedDate.month}</div>
      <div className="expense-year">{formatedDate.year}</div>
      <div className="expense-date__day">{formatedDate.day}</div>
    </div>
  );
};

export default ExpenseDate;
