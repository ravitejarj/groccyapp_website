import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import DownloadSection from './components/DownloadSection';
import FooterLinks from './components/FooterLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-container">
      <div className="split-layout">
        <header className="header-logo">
          <img src="/bowl.png" alt="Groccy Bowl" className="header-icon" />
          <h1 className="header-text">Groccy</h1>
        </header>

        <div className="hero-left">
          <HeroSection />
          <DownloadSection />
        </div>

        <div className="hero-right">
          <img src="/veg-floating.png" alt="Vegetables" className="veg-cover" />
        </div>
      </div>

      <FooterLinks />
      <Footer />
    </div>
  );
}

export default App;
