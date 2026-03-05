import React from 'react';
import './Slide7.css';

const Slide7 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card slide7-card bg-dark border-none p-relative">

                {/* Top Branding Header */}
                <header className="slide7-top-branding">
                    <span className="brand-left">AGI Revolution</span>
                    <span className="brand-center">The Phase Transition in History</span>
                </header>

                {/* Main Content Area */}
                <div className="slide7-content-area">

                    {/* Left Text Column */}
                    <div className="slide7-text-col">
                        <h2 className="slide7-main-title">
                            Why<br />
                            The AGI<br />
                            actually wins
                        </h2>
                        <p className="slide7-description">
                            Understanding why AGI <br />
                            is fundamentally different from all <br />
                            previous technological revolutions.
                        </p>
                    </div>

                    {/* Right Chart Column */}
                    <div className="slide7-chart-col">

                        {/* Bar 1: Information (Min: 50) */}
                        <div className="chart-bar bar-1">
                            <div className="bar-content">
                                <h3 className="bar-value">+50y</h3>
                                <p className="bar-label">Information Revolution</p>
                                <p className="bar-sub-desc">Accelerated data processing and communication</p>
                            </div>
                        </div>

                        {/* Bar 2: Industrial (Medium: 250) */}
                        <div className="chart-bar bar-2">
                            <div className="bar-content">
                                <h3 className="bar-value">+250y</h3>
                                <p className="bar-label">Industrial Revolution</p>
                                <p className="bar-sub-desc">Amplified human physical labor through machines</p>
                            </div>
                        </div>

                        {/* Bar 3: Agricultural (Highest: 10k) */}
                        <div className="chart-bar bar-3">
                            <div className="bar-content">
                                <h3 className="bar-value">+10k</h3>
                                <p className="bar-label">Agricultural Revolution</p>
                                <p className="bar-sub-desc">Transformed how humans obtained food</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Copyright Footer */}
                <footer className="slide7-footer">
                    <span className="copyright-text">AGI REVOLUTION — THE PHASE TRANSITION</span>
                </footer>

            </div>
        </div>
    );
};

export default Slide7;
