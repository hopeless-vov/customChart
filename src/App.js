import logo from './logo.svg';
import './App.css';
import Chart from './Components/Charts'
function App() {
  return (
    <div className="App">
      <div className="chart">
        <div className="header">
          <h2>Stat Header</h2>
          <div className="headeritems">
            <span>Something</span>
            <span>Something</span>
            <span>Something</span>
            <span>Something</span>
          </div>
        </div>
      <Chart />
      </div> 
    </div>
  );
}

export default App;
