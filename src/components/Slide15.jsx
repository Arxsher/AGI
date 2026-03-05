import React from 'react';
import './Slide15.css';

const Slide15 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide15-card bg-light-v2 border-none">

                <header className="slide15-top-meta">
                    <span className="meta-info">Swiss International Scientific</span>
                </header>

                <main className="slide15-main-content">
                    <h1 className="slide15-big-title">Trend 2: The Collapse of Cost</h1>

                    <div className="cost-chart-container">
                        <div className="chart-legend-center">Price per Million Tokens</div>

                        <div className="cost-chart-area">
                            {/* Grid Overlay */}
                            <div className="cost-grid">
                                {[...Array(20)].map((_, i) => (
                                    <div key={`v-${i}`} className="grid-v-line"></div>
                                ))}
                                {[...Array(10)].map((_, i) => (
                                    <div key={`h-${i}`} className="grid-h-line"></div>
                                ))}
                            </div>

                            {/* SVG Line Chart */}
                            <svg className="cost-svg" viewBox="0 0 1000 350" preserveAspectRatio="none">
                                <path
                                    d="M 50,50 Q 150,250 950,330"
                                    fill="none"
                                    stroke="#1a1a1a"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                />
                            </svg>

                            {/* Callouts */}
                            <div className="cost-bubble bubble-1" style={{ left: '15%', top: '10%' }}>
                                <div className="bubble-content">
                                    <strong>20 IQ Points Level:</strong> Dropped from <br />
                                    $1.00 to $0.01 (100x reduction).
                                </div>
                                <div className="bubble-pointer-left"></div>
                            </div>

                            <div className="cost-bubble bubble-2" style={{ left: '35%', top: '45%' }}>
                                <div className="bubble-content">
                                    <strong>50 IQ Points Level:</strong> Dropped from <br />
                                    $25.00 to $0.14 in one year.
                                </div>
                                <div className="bubble-pointer-left"></div>
                            </div>

                            <div className="cost-bubble bubble-3" style={{ right: '5%', bottom: '15%' }}>
                                <div className="bubble-content">
                                    <strong>Next Year:</strong> 70 IQ Points Level <br />
                                    at fractions of a penny.
                                </div>
                                <div className="bubble-pointer-down"></div>
                            </div>
                        </div>
                    </div>

                    <p className="trend-bottom-text">
                        As intelligence explodes, the cost of production is collapsing. <br />
                        We are entering the era of compute abundance for every worker.
                    </p>
                </main>
            </div>
        </div>
    );
};

export default Slide15;
