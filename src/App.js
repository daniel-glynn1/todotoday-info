import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import Icon from './assets/app_icon.png';

import './App.css';

const App = () =>  {

  return (
    <Router>
      <div className='app'>
        <header className='header'>
          <div className='nameLogo'>
            <img className="icon" src={Icon} alt="Todo Today Icon" />
            <h1>Todo Today - Habit Tracker</h1>
          </div>
          
          <Navigation />
          
        </header>

        <main className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />}/>
            <Route path="/support" element={<Support />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
      <Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>FEATURES</Link>
      <Link to="/support" className={location.pathname === '/support' ? 'active' : ''}>SUPPORT</Link>
      <Link to="/privacypolicy" className={location.pathname === '/privacypolicy' ? 'active' : ''}>PRIVACY POLICY</Link>
    </nav>
  );

};

export default App;

