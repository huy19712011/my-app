import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

function ExpenseItem(props) {

  const clickButtonHandler = () => {
    console.log('Button clicked');
  };
    
  return (
    <Card className="expense-item">
      <ExpenseDate date123={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{ props.title }</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={() => {console.log('Clicked')}}>Change Title</button> */}
      <button onClick={clickButtonHandler}>Change Title</button>
    </Card>
  );

}

export default ExpenseItem;