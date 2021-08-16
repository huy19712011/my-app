import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { title: 'Car Insurance 1', amount: 291.67, date: new Date(2021, 7, 16) },
    { title: 'Car Insurance 2', amount: 292.67, date: new Date(2021, 7, 16) },
    { title: 'Car Insurance 3', amount: 293.67, date: new Date(2021, 7, 16) },
    { title: 'Car Insurance 4', amount: 294.67, date: new Date(2021, 7, 16) },
  ];

  return (
    <div className="App">
      <h2>Let's get stated!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
