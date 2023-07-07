import React from "react";
import './app.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
    <Router>  
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
    </Router>
   </>
  );
}

export default App;
