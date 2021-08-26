import React, { useState } from 'react';

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance 1', amount: 291.67, date: new Date(2021, 7, 16) },
  { id: 'e2', title: 'Car Insurance 2', amount: 292.67, date: new Date(2021, 7, 16) },
  { id: 'e3', title: 'Car Insurance 3', amount: 293.67, date: new Date(2021, 7, 16) },
  { id: 'e4', title: 'Car Insurance 4', amount: 294.67, date: new Date(2021, 7, 16) },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {

    // console.log('In App.js');
    // console.log(expense);

    //setExpenses([expense, ...expenses]); // bad

    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };
 
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
