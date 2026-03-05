import React from 'react';
import './Slide12.css';

const Slide12 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide12-card p-relative">

                {/* Main Header */}
                <header className="slide12-header">
                    <h2 className="slide12-title">
                        The Spark: "Attention Is All You Need"
                    </h2>
                </header>

                <div className="diagram-layout">

                    {/* Left Annotation */}
                    <div className="annotation-left">
                        <p className="annotation-text">
                            <strong>2017:</strong> Google publishes <br />
                            the paper that changed <br />
                            everything.
                        </p>
                        <div className="arrow-line-left"></div>
                    </div>

                    {/* Central Diagram (Image) */}
                    <div className="center-diagram">
                        <img src="/transformer.png" alt="Transformer Architecture diagram" className="generated-transformer-diagram" />
                    </div>

                    {/* Right Annotation */}
                    <div className="annotation-right">
                        <div className="arrow-line-right"></div>
                        <p className="annotation-text">
                            <strong>The Legacy:</strong> The <br />
                            foundation for GPT-2, <br />
                            GPT-3, and the current <br />
                            explosion.
                        </p>
                    </div>

                    {/* Bottom Annotation */}
                    <div className="annotation-bottom">
                        <div className="arrow-curve-down">
                            <svg width="30" height="90" viewBox="0 0 30 90" fill="none" stroke="#1a1a1a" strokeWidth="2">
                                <path d="M15,0 L15,80" />
                                <polygon points="10,75 15,85 20,75" fill="#1a1a1a" />
                            </svg>
                        </div>
                        <p className="annotation-text max-w ">
                            <strong>The Mechanism:</strong> Allowed LLMs to <br />
                            learn context and meaning through <br />
                            self-correction and weight <br />
                            adjustment.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Slide12;
