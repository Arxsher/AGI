import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import './Slide16.css';

const Slide16 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card p-relative border-none bg-dark-v4">
                {/* Large Index Number - Top Right */}
                <div className="large-index-v4">04</div>

                {/* Section Badge - Top Left */}
                <div className="section-badge-v4">
                    <span>SECTION 4</span>
                </div>

                {/* Main Section Title - Bottom Left */}
                <div className="section-title-container-v4">
                    <h2 className="section-name-v4">
                        The Arrival of <br /> True AGI
                    </h2>
                    <button className="btn-icon-v6">
                        <ArrowDownRight size={24} />
                    </button>
                </div>

                {/* Bottom Right Info */}
                <div className="bottom-right-info-v4">
                    <p className="branding-text">AGI PRESENTATION — SECTION 04</p>
                    <p className="small-description">
                        The final phase transition: <br />
                        when artificial intelligence <br />
                        surpasses human capability.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide16;
