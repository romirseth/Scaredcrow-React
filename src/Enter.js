import './Enter.css';
import scaredcrow from './Scaredcrow.png';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: 'black', width: '100%', height: '100%'}}>  
      <img src={scaredcrow} className="App-logo" alt="logo"/>
      <label className='entersandman'>SCAREDCROW</label>
      <label className='come-in'>ENTER</label>
      </header>
    </div>
  );
}

export default App;
