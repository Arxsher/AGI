import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import './Slide2.css';

const Slide2 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card p-relative">
                {/* Welcome Tag */}
                <div className="welcome-tag">
                    <span>WELCOME</span>
                </div>

                {/* Main Text Content */}
                <main className="slide-content-v2">
                    <h2 className="lorem-title">
                        (AGI)<br />
                        Artificial General Intelligence <br />
                        is not just a smarter software. <br />
                        it is a system capable of inventing, <br />
                        researching, and solving problems <span className="text-faded">across all domains- <br />
                            from physics to medicine better than any human</span>
                    </h2>
                </main>

                {/* Navigation Bottom Right */}
                <div className="nav-bottom-right">
                    <button className="btn-outline-v2 uppercase">GETTING TO KNOW MORE</button>
                    <button className="btn-icon-v2">
                        <ArrowDownRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slide2;
