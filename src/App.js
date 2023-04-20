import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Moreinfo from './components/Moreinfo';
import Mainsem from './sem1/Mainsem';
import Subsem1 from './sem1/Subsem1';
import Subsem2 from './sem2/Subsem2';
import Map from './components/Map';
// import Interview from './components/Interview';
// import AccorM from './questions/AccorM';
// import CssQ from './questions/CssQ'
import Footer from './components/Footer';
// import Mock from './components/Mock';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
    {/* <Router basename='/Rtest'>
      <Navbar/>
      
      <Routes> 
      <Route exact path="/" element={<Landing/>} />
      <Route exact path="/Moreinfo" element={<Moreinfo/>} />
      <Route exact path="/Sem1" element={<Subsem1/>} />
      <Route exact path="/Sem2" element={<Subsem2/>} />
      <Route exact path="/Units" element={<Mainsem/>} />
      </Routes>
      {/* <AccorM/> */}
      {/* <Footer/> */}
      {/*  */}
    {/* </Router> */} 
    <Map/>
    </div>
  );
}

export default App;
