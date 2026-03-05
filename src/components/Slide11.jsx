import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import './Slide11.css';

const Slide11 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card p-relative border-none bg-dark-v3">
                {/* Large Index Number - Top Left this time */}
                <div className="large-index-v3">03</div>

                {/* Section Badge - Bottom Right */}
                <div className="section-badge-v3">
                    <span>SECTION 3</span>
                </div>

                {/* Main Section Title - Bottom Left */}
                <div className="section-title-container-v3">
                    <h2 className="section-name-v3">
                        The Turning <br /> Point & <br /> Acceleration
                    </h2>
                    <button className="btn-icon-v5">
                        <ArrowDownRight size={24} />
                    </button>
                </div>

                {/* Top Right Info */}
                <div className="top-right-info-v3">
                    <p className="branding-text">AGI PRESENTATION — SECTION 03</p>
                    <p className="small-description">
                        Decoding the momentum and <br />
                        inflection points of the <br />
                        AI revolution.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide11;
