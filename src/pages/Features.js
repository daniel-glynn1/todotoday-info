import React from 'react';
import MonthlyView from '../assets/monthly_view.png';
import WeeklyView from '../assets/weekly_view.png';
import BadgesView from '../assets/badges_view.png';
import JournalView from '../assets/journal_view.png';
import HomeList from '../assets/home_list_view.png';
import HomeCompact from '../assets/home_compact_view.png';
import RestDay from '../assets/rest_day.png';
import HomeCompleted from '../assets/home_completed.png';


import '../styles/features.css';

const Features = () => {
  return (
    <div className='features'>
      <div className='featureBox'>
        <div className='featureDescription'>
          <h3>View your history by week or month to see how you're doing</h3>
        </div>
        <div className='screenshotBox'>
          <img className='screenshot' src={MonthlyView} alt='Todo Today Monthly View' />
          <img className='screenshot' src={WeeklyView} alt='Todo Today Weekly View' />
        </div>
      </div>
      <div className='featureDivider' />
      <div className='featureBox'>
        <div className='featureDescription'>
          <h3>Build long streaks and earn badges</h3>
        </div>
        <div className='screenshotBox'>
          <img className='screenshot' src={BadgesView} alt='Todo Today Badges View' />
        </div>
      </div>
      <div className='featureDivider' />
      <div className='featureBox'>
        <div className='featureDescription'>
          <h3>Make a note to yourself in the Journal</h3>
        </div>
        <div className='screenshotBox'>
          <img className='screenshot' src={JournalView} alt='Todo Today Journal View' />
        </div>
      </div>
      <div className='featureDivider' />
      <div className='featureBox'>
        <div className='featureDescription'>
          <h3>Customize your home screen</h3>
        </div>
        <div className='screenshotBox'>
          <img className='screenshot' src={HomeList} alt='Todo Today Home List View' />
          <img className='screenshot' src={HomeCompact} alt='Todo Today Home Compact View' />
        </div>
      </div>
      <div className='featureDivider' />
      <div className='featureBox'>
        <div className='featureDescription'>
          <h3>Take a rest day if you need it</h3>
        </div>
        <div className='screenshotBox'>
          <img className='screenshot' src={RestDay} alt='Todo Today Home Rest View' />
        </div>
      </div>
      <div className='featureDivider' />
      <div className='featureBox'>
        <div className='featureDescription'>
          <h3>And much more!</h3>
        </div>
        <div className='screenshotBox'>
          <img className='screenshot' src={HomeCompleted} alt='Todo Today Home Completed View' />
        </div>
      </div>
    </div>
  );
};

export default Features;