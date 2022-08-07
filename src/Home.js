import React from 'react';
import './App.css';
import Backvideo from './component/backvideo.js';
import Footer from './component/Footer.js';
import DataFetcher from './component/DataFetcher.js'

function Home() {
  return (
    <>
      <Backvideo/>
      <Footer/>
    </>
  );
}

export default Home;