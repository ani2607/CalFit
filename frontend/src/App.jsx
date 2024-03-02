
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Bmr from "./pages/Bmr";
import Diet from "./pages/Diet";


function App() {
  

  return (

    
    <Router>
      
      <Routes>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route  path="/" element = {<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/bmr" element = {<Bmr/>}/>
        <Route path="/diet" element = {<Diet/>}/>
      </Routes>

    </Router>
    
  )
}

export default App
