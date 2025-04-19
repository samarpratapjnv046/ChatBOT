
import './App.css';
import gptLOGO from './assets/chatgpt.svg';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
          <div className='upperSide'>
            <div className="upperSideTop"><img src={gptLOGO} alt="" className="logo" /> <span className='brand'>ChatGPT</span></div>
            <button className="midBtn"><img src="" alt="" className="addBtn" />New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src="" alt="" />What is Programming?</button>
              <button className="query"><img src="" alt="" />What is React Js?</button>
            </div>
          </div>
          <div className='lowerSide'>
            
          </div>
      </div>
      <div className='main'>

      </div>
    </div>
  );
}

export default App;
