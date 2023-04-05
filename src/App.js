import './App.css';
import Day5 from './components/Error';
import Errorboundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Day5 a={["chocalate","icecream","fruits","Cookies"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;