import React,{useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './backvideo.css';
import DataFetcher from './DataFetcher.js'

function Backvideo(game) {


  const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };


  return (
  <section id="backvideo">
    <div className='hero-container'>
      <video src={"/videos/video-csgo.mp4"} autoPlay loop />
      <DataFetcher/>
      <div className='hero-btns'>

      </div>
    </div>
  </section>
  );
}

export default Backvideo;


