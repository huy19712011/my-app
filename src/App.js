import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

function App() {

  const expenses = [
    { title: 'Car Insurance 1', amount: 291.67, date: new Date(2021, 7, 16) },
    { title: 'Car Insurance 2', amount: 292.67, date: new Date(2021, 7, 16) },
    { title: 'Car Insurance 3', amount: 293.67, date: new Date(2021, 7, 16) },
    { title: 'Car Insurance 4', amount: 294.67, date: new Date(2021, 7, 16) },
  ];

  const addExpenseHandler = expense => {

    console.log('In App.js');
    console.log(expense);
  };
 
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
