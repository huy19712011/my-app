import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date123.toLocaleString('en-US', { month: 'long' });
  const day = props.date123.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date123.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>  {/*month */}
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;