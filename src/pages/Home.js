import React from 'react';
import HomeScreen from '../assets/home_screen.png';
import MonthlyView from '../assets/monthly_view.png';

import '../styles/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='homeMain'>
        <div className='homeDescription'>
          <h2><em>A journey of a thousand miles begins with a single step</em></h2>
          <h2>Building a long-lasting habit begins <em>today</em></h2>
          <h2>Start tracking your habits with <em>Todo Today</em></h2>
        </div>
        
        <div className='screenshotBox'>
          <img className='screenshot' src={HomeScreen} alt='Todo Today Home Screen' />
          <img className='screenshot' src={MonthlyView} alt='Todo Today Monthly View' />
        </div>
      </div>
      <div className='homeFooter'>
        <div className='linkBox'>
          <a className='appLink' href='https://apps.apple.com/us/app/todo-today-habit-tracker/id6461381991' target='_blank' rel='noreferrer'>Download (iOS Only)</a>
          {/* <p>*iOS only</p> */}
        </div>
        <p className='name'>Daniel Glynn</p>
      </div>
 
      
    </div>
  );
};

export default Home;