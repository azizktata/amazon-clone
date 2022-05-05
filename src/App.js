
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Checkout from './Components/Checkout/Checkout';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <Router> 
      
    <div className="App">
    
    <NavBar />
        <Routes>
          {/* <Route exact path='/'>
            
            <Home />
          </Route>
          <Route  exact path='/checkout' > 
            <Checkout />
          </Route> */}
        <Route  path='/' element={<Home />}/>
          
        </Routes>
        <Routes>
        <Route  exact path='/checkout' element={<Checkout />}/> 
            
          
        </Routes>

      
    </div>
    </Router>
  );
}

export default App;
