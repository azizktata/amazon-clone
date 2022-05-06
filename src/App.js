
import { useEffect } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Checkout from './Components/Checkout/Checkout';
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import NavBar from './Components/NavBar/NavBar';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function App() {
  const [{}, dispatch ] = useStateValue();
  
    useEffect(()=>{
      auth.onAuthStateChanged(authUser =>{
       if(authUser){
        dispatch({
          type:"SetUser",
          user:authUser
        })
       }
       else{
         dispatch({
           type:"SetUser",
           user:null
         })
       }
        
      })

        
    },[])
  return (
    <Router> 
      
    <div className="App">
    
   
        <Routes>
          <Route  path='/' element={<> <NavBar/> <Home /> </>} /> 
        </Routes>
        <Routes>
        
          <Route  exact path='/checkout' element={ <><NavBar/><Checkout /></>}/>  
        </Routes>
        <Routes>
          <Route  exact path='/login' element={<Login />}/>  
        </Routes>
    </div>
    </Router>
  );
}

export default App;
