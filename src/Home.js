import React from 'react';
import './App.css';
import Backvideo from './component/backvideo.js';
import Footer from './component/Footer.js';
import DataFetcher from './component/DataFetcher.js'

function Home({Id, showData}) {
  return (
    <>
      <Backvideo Id={Id} showData={showData}/>
      <Footer/>
    </>
  );
}

export default Home;