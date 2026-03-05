import React from 'react';
import './Slide18.css';
const agiImg = '/agi_architecture.png';

const Slide18 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide18-card p-relative">

                {/* Top Title */}
                <header className="slide18-header">
                    <h1 className="slide18-title">Defining AGI</h1>
                </header>

                {/* Main Two-Column Layout */}
                <div className="slide18-body">

                    {/* Left: Image */}
                    <div className="slide18-image-col">
                        <div className="slide18-image-wrapper">
                            <img src={agiImg} alt="Brutalist architecture representing AGI" className="slide18-image" />
                            <div className="slide18-image-overlay"></div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="slide18-text-col">
                        <h2 className="slide18-headline">
                            The moment AI surpasses humans in every <span className="text-accent">economically valuable</span> task.
                        </h2>

                        <ul className="slide18-list">
                            <li><span className="list-dash">—</span> Not just games.</li>
                            <li><span className="list-dash">—</span> Not just creative arts.</li>
                            <li>
                                <span className="list-dash">—</span> Goal: <span className="text-accent">Research</span>, <span className="text-accent">Development</span>, <span className="text-accent">Medicine</span>, and <span className="text-accent">Physics</span>.
                            </li>
                        </ul>

                        <div className="slide18-note">
                            <p>
                                <span className="text-accent">Current limitations</span> (like counting 'R's in strawberry) are temporary. Self-correction mechanisms are closing the gap.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <footer className="slide18-footer">
                    <span className="copyright-text">DEFINING AGI — BEYOND HUMAN CAPABILITY</span>
                </footer>

            </div>
        </div>
    );
};

export default Slide18;
