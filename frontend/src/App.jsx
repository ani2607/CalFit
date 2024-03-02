
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  

  return (

    <div className="" >
    <Router>
      
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
      </Routes>

    </Router>
    </div>
  )
}

export default App
