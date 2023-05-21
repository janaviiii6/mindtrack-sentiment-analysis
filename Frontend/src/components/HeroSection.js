import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import vid from "../videos/video-2.mov";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={vid} autoPlay loop muted />
      <h1>SENTIMENT ANALYSIS</h1>
      <p>Perform Sentiment Analysis on various categories which not only presents things
        in an organized manner but also gives you a basic idea as to what all things can Sentiment
        Analysis be performed on.
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;