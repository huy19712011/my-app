import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';

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
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
