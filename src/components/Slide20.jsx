import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import './Slide20.css';

const Slide20 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card s20-card p-relative">
                {/* Welcome Tag */}
                <div className="s20-tag">
                    <span>THE END OF THE BEGINNING</span>
                </div>

                {/* Main Text Content */}
                <main className="s20-content">
                    <h2 className="s20-title">
                        if we succeed, <br />
                        it will be the last invention <br />
                        humanity will ever need to make. <br />
                        solving Cancer, <span className="s20-faded">Solving energy, <br />Solving economics... <br />
                            <span className="s20-glow-red">the future is not linear. it's exponential.</span></span>
                    </h2>
                </main>

                {/* Navigation Bottom Right */}
                <div className="s20-nav">
                    <button className="s20-btn-outline">THANKS FOR YOUR ATTENTION</button>
                    <button className="s20-btn-icon">
                        <ArrowDownRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slide20;
