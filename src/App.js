import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './component/Navbar.js'
import AcctHolder from './component/AcctHolder.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home.js'

function App() {

  const [Id, setId] = useState('');
  const[showData, setShowData] = useState(false);
  console.log(Id);
  console.log(showData);
  return (
    <>
        <Router>
            <Navbar/>
            <AcctHolder setId={setId} setShowData={setShowData}/>
            <Routes>
                <Route path='/' exact element={<Home Id={Id} showData={showData}/>} />
            </Routes>
        </Router>
    </>
  );
}

export default App;