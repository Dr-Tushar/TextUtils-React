import React from 'react';
import { useState } from 'react';
// import About from './About';
import "./App.css";
import Navbar from './Navbar';
import TextConverter from './TextConverter';
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');

  function toggleMode(){
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#011431';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
  }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar mode={mode} toggle={toggleMode}/>
    {/* <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/" element= */}
      {<TextConverter txtmode={mode}/>}
      {/* ></Route>
    </Routes>
    </Router> */}
    </>
  );
}

export default App;
