import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { FaTrashAlt } from 'react-icons/fa';

const ExpenseItem = (props) => {
  const deleteButtonHandler = (expenseId) => {
    props.onDeleteButton(expenseId);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <FaTrashAlt
        style={{
          color: 'rgb(31,31,31)',
          fontSize: '1.3rem',
          margin: '0 .5rem',
          cursor: 'pointer',
        }}
        onClick={() => deleteButtonHandler(props.id)}
      >
        DELETE
      </FaTrashAlt>
    </Card>
  );
};

export default ExpenseItem;
