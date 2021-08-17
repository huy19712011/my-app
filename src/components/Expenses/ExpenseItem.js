import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  
  const clickButtonHandler = () => {
    
    setTitle('Updated');
    console.log(title);

  };
    
  return (
    <Card className="expense-item">
      <ExpenseDate date123={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{ title }</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={() => {console.log('Clicked')}}>Change Title</button> */}
      <button onClick={clickButtonHandler}>Change Title</button>
    </Card>
  );

}

export default ExpenseItem;