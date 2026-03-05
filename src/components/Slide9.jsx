import React from 'react';
import './Slide9.css';
import calcImg from '../../../../.gemini/antigravity/brain/9b95a548-6ebe-442d-8256-8c510d72cf1e/calculator_era_1950s_1772117761596.png';
import kaspImg from '../../../../.gemini/antigravity/brain/9b95a548-6ebe-442d-8256-8c510d72cf1e/media__1772118054223.png';

const Slide9 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide9-card">
                {/* Top Section */}
                <div className="slide9-section top-section">
                    <div className="content-left">
                        <div className="welcome-tag-v3">
                            <span>ERA 01</span>
                        </div>
                        <h2 className="section-title">
                            The Calculator <br />
                            Era
                        </h2>
                        <p className="section-desc">
                            <strong>1945–1951: Raw Mechanical Logic.</strong><br />
                            Early computers like ENIAC were essentially giant, room-filling calculators.
                            They lacked the ability to store programs or learn. These machines
                            followed fixed mathematical instructions with absolute precision but zero autonomy.
                            It was the age of raw computation, where "intelligence" was purely mechanical.
                        </p>
                    </div>
                    <div className="content-right">
                        <div className="split-image-container">
                            <img src={calcImg} alt="Calculator Era" />
                        </div>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="section-separator"></div>

                {/* Bottom Section */}
                <div className="slide9-section bottom-section">
                    <div className="content-left">
                        <div className="split-image-container">
                            <img src={kaspImg} alt="Kasparov Moment" />
                        </div>
                    </div>
                    <div className="content-right content-right-text">
                        <h2 className="section-title">
                            The Kasparov <br />
                            Moment
                        </h2>
                        <p className="section-desc">
                            <strong>1997: Silicon Defeats Grandmaster.</strong><br />
                            When IBM’s Deep Blue defeated Garry Kasparov, it marked a historic shift.
                            For the first time, a machine outmaneuvered the human brain in a game
                            defined by deep strategy. While still relying on brute-force search,
                            it proved that specific domains of human expertise could be conquered by silicon.
                        </p>
                        <div className="welcome-tag-v3">
                            <span>ERA 02</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide9;
