import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import './Slide19.css';

const Slide19 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide19-card p-relative">

                {/* Top Right Branding */}
                <div className="slide19-branding">
                    <span>THE 2027 HORIZON — AGI TIMELINE</span>
                </div>

                {/* Main Two-Column Layout */}
                <div className="slide19-layout">

                    {/* Left: Big Typography brutalist layout */}
                    <div className="slide19-left">
                        <h1 className="slide19-big-text">
                            Leading AI researchers <span className="text-light-grey">and</span><br />
                            <span className="text-light-grey">industry experts globally</span><br />
                            predict the <span className="text-dark">arrival</span> of<br />
                            Artificial General Intelligence<br />
                            <span className="text-light-grey">by or before</span> 2027.
                        </h1>
                    </div>

                    {/* Right: Info Block */}
                    <div className="slide19-right">
                        <div className="slide19-meta-row">
                            <div className="slide19-icon-pill">
                                <MapPin size={16} strokeWidth={2.5} />
                            </div>
                            <span className="slide19-meta-label">Timeline Projection</span>
                        </div>

                        <h2 className="slide19-date">The 2027 Horizon</h2>

                        <p className="slide19-body-text">
                            When AI improves AI, the pace of innovation decouples
                            from human limitations. We are transitioning from AI as
                            a tool, to a collaborator, and finally to an autonomous
                            architect of its own evolution.
                        </p>
                    </div>

                </div>

                {/* Bottom Left: Number + Button */}
                <div className="slide19-bottom-left">
                    <button className="slide19-circle-btn">
                        <ArrowUpRight size={20} strokeWidth={2} />
                    </button>
                    <button className="slide19-pill-btn">TOOL → ARCHITECT</button>
                </div>

            </div>
        </div>
    );
};

export default Slide19;
