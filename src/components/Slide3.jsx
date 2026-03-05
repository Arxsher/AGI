import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import './Slide3.css';

const Slide3 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card p-relative border-none bg-dark">
                {/* Section Badge */}
                <div className="section-badge">
                    <span>SECTION 1</span>
                </div>

                {/* Large Index Number */}
                <div className="large-index">01</div>

                {/* Main Section Title */}
                <div className="section-title-container">
                    <h2 className="section-name">
                        Introduction  <br /> to AGI
                    </h2>
                    <button className="btn-icon-v3">
                        <ArrowDownRight size={24} />
                    </button>
                </div>

                {/* Bottom Right Info */}
                <div className="bottom-right-info">
                    <p className="branding-text">AGI PRESENTATION — SECTION 01</p>
                    <p className="small-description">
                        Diving more into<br />
                        the definition and   <br />
                        the capabilities of AGI.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide3;
