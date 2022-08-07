import React from 'react';
import './App.css';
import Navbar from './component/Navbar.js'
import AcctHolder from './component/AcctHolder.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home.js'

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <AcctHolder/>
            <Routes>
                <Route path='/' exact element={<Home/>} />
            </Routes>
        </Router>
    </>
  );
}

export default App;