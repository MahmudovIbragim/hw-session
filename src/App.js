import './App.css';
import Forms from './components/forms/Forms';
import RestApi from './components/restApi/RestApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RestApi/>
        <Forms/>
      </header>
    </div>
  );
}

export default App;
