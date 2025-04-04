import logo from './logo.svg';
import scaredcrow from './Scaredcrow.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: 'black', width: '100%', height: '100%'}}>  
      <img src={scaredcrow} className="App-logo" alt="logo"/>
      <label className='entersandman'>SCAREDCROW</label>
      <label className='come-in'>ENTER</label>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
