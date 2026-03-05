import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import './Slide8.css';

const Slide8 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card p-relative border-none bg-dark-v2">
                {/* Section Badge - Moved to bottom left */}
                <div className="section-badge-v2">
                    <span>SECTION 2</span>
                </div>

                {/* Large Index Number - Moved to bottom right (down not up) */}
                <div className="large-index-v2">02</div>

                {/* Main Section Title - Moved to top left */}
                <div className="section-title-container-v2">
                    <h2 className="section-name">
                        The AI <br /> Evolution
                    </h2>
                    <button className="btn-icon-v4">
                        <ArrowDownRight size={24} />
                    </button>
                </div>

                {/* Top Right Info - Mixed placement */}
                <div className="top-right-info-v2">
                    <p className="branding-text">AGI PRESENTATION — SECTION 02</p>
                    <p className="small-description">
                        Visionary steps towards the <br />
                        next generation of artificial <br />
                        intelligence excellence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide8;
