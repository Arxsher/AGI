import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Slide14.css';

const Slide14 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide14-card bg-light border-none">

                {/* Header Row */}
                <header className="slide14-header">
                    <div className="header-left">
                        <div className="icon-circle">
                            <ArrowUpRight size={18} strokeWidth={2.5} />
                        </div>
                        <div className="pill-badge-outline">
                            INTELLIGENCE TREND
                        </div>
                    </div>
                    <div className="header-right">
                        <span className="branding-text-small">INTELLIGENCE TREND — IQ BENCHMARKS</span>
                    </div>
                </header>

                {/* Chart Area */}
                <div className="slide14-chart-area">
                    {/* SVG Line Chart */}
                    <svg className="forecast-svg" viewBox="0 0 1000 300">
                        {/* Horizontal Grid Lines */}
                        <line x1="0" y1="50" x2="1000" y2="50" stroke="#eee" strokeWidth="1" />
                        <line x1="0" y1="100" x2="1000" y2="100" stroke="#eee" strokeWidth="1" />
                        <line x1="0" y1="150" x2="1000" y2="150" stroke="#eee" strokeWidth="1" />
                        <line x1="0" y1="200" x2="1000" y2="200" stroke="#eee" strokeWidth="1" />
                        <line x1="0" y1="250" x2="1000" y2="250" stroke="#eee" strokeWidth="1" />

                        {/* Chart Line - Curved Path */}
                        <path
                            d="M 100,250 Q 300,220 500,180 T 700,100 T 900,40"
                            fill="none"
                            stroke="#888"
                            strokeWidth="3"
                        />

                        {/* Data Points */}
                        <circle cx="100" cy="250" r="5" fill="#888" />
                        <circle cx="300" cy="220" r="5" fill="#888" />
                        <circle cx="500" cy="180" r="5" fill="#888" />
                        <circle cx="700" cy="100" r="5" fill="#888" />
                        <circle cx="900" cy="40" r="5" fill="#888" />

                        {/* Labels on chart */}
                        <text x="100" y="235" textAnchor="middle" fontSize="12" fill="#888" fontWeight="600">10 (2022)</text>
                        <text x="300" y="205" textAnchor="middle" fontSize="12" fill="#888" fontWeight="600">25 (2023)</text>
                        <text x="500" y="165" textAnchor="middle" fontSize="12" fill="#888" fontWeight="600">50 (2024)</text>
                        <text x="700" y="85" textAnchor="middle" fontSize="12" fill="#888" fontWeight="600">70 (2025)</text>
                        <text x="900" y="25" textAnchor="middle" fontSize="12" fill="#888" fontWeight="600">136 (2026)</text>
                    </svg>
                </div>

                {/* Stats Columns Row */}
                <footer className="slide14-stats-row">
                    {/* Benchmark 1 */}
                    <div className="stat-column">
                        <span className="stat-year">Benchmark 1</span>
                        <h3 className="stat-value">10 IQ</h3>
                        <p className="stat-desc">
                            Cognitive <br />
                            Impairment
                        </p>
                    </div>

                    {/* Benchmark 2 */}
                    <div className="stat-column">
                        <span className="stat-year">Benchmark 2</span>
                        <h3 className="stat-value">25 IQ</h3>
                        <p className="stat-desc">
                            Basic Machine <br />
                            learning
                        </p>
                    </div>

                    {/* Benchmark 3 */}
                    <div className="stat-column">
                        <span className="stat-year">Benchmark 3</span>
                        <h3 className="stat-value">50 IQ</h3>
                        <p className="stat-desc">
                            GPT-4o <br />
                            (early 2023)
                        </p>
                    </div>

                    {/* Benchmark 4 */}
                    <div className="stat-column highlight-column">
                        <span className="stat-year">Benchmark 4</span>
                        <h3 className="stat-value">70 IQ</h3>
                        <p className="stat-desc">
                            Normal Human
                        </p>
                    </div>

                    {/* Benchmark 5 */}
                    <div className="stat-column">
                        <span className="stat-year">Benchmark 5</span>
                        <h3 className="stat-value">136 IQ</h3>
                        <p className="stat-desc">
                            Albert Einstein <br />
                            (One of the smartest humans to ever live)
                        </p>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Slide14;
