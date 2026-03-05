import React from 'react';
import './Slide13.css';

const Slide13 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide13-card bg-light-v2 border-none">

                <header className="slide13-top-meta">
                    <span className="meta-info">Swiss International Scientific</span>
                </header>

                <main className="slide13-main-content">
                    <h1 className="slide13-big-title">Trend 1: The Expansion of Attention</h1>

                    <div className="trend-chart-container">
                        <div className="chart-legend-top">Time to Complete Task</div>

                        <div className="trend-chart-area">
                            {/* Grid Lines Overlay */}
                            <div className="trend-grid-lines">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="trend-grid-line"></div>
                                ))}
                            </div>

                            <div className="trend-bars-wrapper">
                                {/* GPT-3 */}
                                <div className="trend-row">
                                    <div className="row-label">GPT-3</div>
                                    <div className="trend-bar-track">
                                        <div className="trend-bar bar-gpt3" style={{ width: '4%' }}>
                                            <div className="trend-callout">15 Seconds of human effort</div>
                                        </div>
                                    </div>
                                </div>

                                {/* GPT-4 */}
                                <div className="trend-row">
                                    <div className="row-label">GPT-4</div>
                                    <div className="trend-bar-track">
                                        <div className="trend-bar bar-gpt4" style={{ width: '35%' }}>
                                            <div className="trend-callout">4 Minutes of human effort</div>
                                        </div>
                                    </div>
                                </div>

                                {/* GPT-5 */}
                                <div className="trend-row">
                                    <div className="row-label">GPT-5<br /><small>(Projected)</small></div>
                                    <div className="trend-bar-track">
                                        <div className="trend-bar bar-gpt5" style={{ width: '100%' }}>
                                            <div className="trend-callout highlight-callout">7 Hours of continuous autonomous work</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Slide13;
