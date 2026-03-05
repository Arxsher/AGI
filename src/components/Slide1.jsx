import React from 'react';
import { Asterisk, ArrowDownRight } from 'lucide-react';
import './Slide1.css';

const Slide1 = () => {
  return (
    <div className="slide-container">
      <div className="slide-card">
        {/* Top Navigation */}
        <header className="slide-header">
          <div className="header-left">
            <Asterisk className="logo-icon" size={24} />
            <h1 className="logo-name">AGI-Revolution</h1>
            <span className="presentation-badge">PRESENTATION</span>
          </div>
          <div className="header-right">
            <button className="btn-outline">OUR PROJECT</button>
            <button className="btn-icon">
              <ArrowDownRight size={20} />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="slide-content">
          <h1 className="">Humanity's</h1>
          <h2 className="main-title">Last Invention</h2>
          <p className="presenter">Presented by <strong>Nouri Zakaria</strong></p>
        </main>

        {/* Footer */}
        <footer className="slide-footer">
          <div className="footer-col">
            <span className="footer-label">SUPERVISED BY</span>
            <span className="footer-value">Pr. Soraire</span>
          </div>
          <div className="footer-col">
            <span className="footer-label">DATE</span>
            <span className="footer-value">March 2026</span>
          </div>
          <div className="footer-col" style={{ gridColumn: "3" }}>
            <span className="footer-label">WEBSITE</span>
            <span className="footer-value">www.yourwebsite.com</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Slide1;
