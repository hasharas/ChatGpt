import './App.css';
import gptLogo from './assets/gpt-Logo.png';
import addBtn from './assets/add-Logo2.png';
import msgIcon from './assets/massage.png';
import homeIcon from './assets/home.png';
import saveIcon from './assets/save.png';
import upIcon from './assets/upgrate.png';


function App() {
  return (

    <div className="App">

          <div className="sideBar">

              <div className="upperSide">

                  <div className="upperSideTop">

                      <img src={gptLogo} alt="Logo" className="logo" />
                      <span className="brand">ChatGPT</span>
                  
                  </div>

                  <div className="upperSideBottom">

                        <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>

                        <button className="query"><img src={msgIcon} alt="Query" />What is Programming ?.</button>
                        <button className="query"><img src={msgIcon} alt="Query" />How to use and API ?.</button>
                 </div>

              </div>
              <div className="lowerSide">

                    <div className="listItems"><img src={homeIcon} alt="" className="listItemsImg" />Home</div>
                    <div className="listItems"><img src={saveIcon} alt="" className="listItemsImg" />Saved</div>
                    <div className="listItems"><img src={upIcon} alt="" className="listItemsImg" />Upgraed to pro</div>
              </div>

          </div>

          <div className="main">

          </div>



    </div>
  );
}

export default App;
