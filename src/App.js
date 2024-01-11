import logo from './logo.svg';
import './App.css';
import SideNav from './Components/SideNav';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
       <div className="App" style={{display:"flex",margin:"0px",padding:"0px",width:"100%"}}>
 <div style={{width:"249px"}}>
 <SideNav />
 </div>
  <div style={{width:"calc(100% - 249px)"}}>
  <Home />
  </div>
 </div>
    </div>
  );
}

export default App;
