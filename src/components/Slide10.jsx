import React from 'react';
import './Slide10.css';
const alphaImg = '/alphago.png';
const transImg = '/transformer_2017.png';

const Slide10 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card slide10-card bg-dark border-none">
                {/* Top Section - Image Left, Text Right (Opposite of Slide 9) */}
                <div className="slide10-section top-slide10">
                    <div className="content-left-img">
                        <div className="split-image-container-v2">
                            <img src={alphaImg} alt="AlphaGo" />
                        </div>
                    </div>
                    <div className="content-right-text">
                        <div className="welcome-tag-v4">
                            <span>ERA 03</span>
                        </div>
                        <h2 className="section-title-white">
                            The AlphaGo <br />
                            Breakthrough
                        </h2>
                        <p className="section-desc-grey">
                            <strong>2016: The Arrival of Machine Intuition.</strong><br />
                            Go was long considered "uncomputable" due to its near-infinite complexity.
                            DeepMind’s AlphaGo didn't just calculate; it "felt" the board using neural networks.
                            By teaching itself through millions of games, it displayed emergent intuition
                            and creative moves that redefined our understanding of intelligence.
                        </p>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="section-separator-v2"></div>

                {/* Bottom Section - Text Left, Image Right (Opposite of Slide 9) */}
                <div className="slide10-section bottom-slide10">
                    <div className="content-left-text">
                        <h2 className="section-title-white">
                            The Neural <br />
                            Transformer
                        </h2>
                        <p className="section-desc-grey">
                            <strong>2017: Attention Is All You Need.</strong><br />
                            The publication of "Attention Is All You Need" changed everything.
                            By introducing the Transformer architecture and the "attention mechanism,"
                            researchers enabled AI to process information in context, rather than sequentially.
                            This is the foundation of all modern Large Language Models and AGI pursuit.
                        </p>
                        <div className="welcome-tag-v4">
                            <span>ERA 04</span>
                        </div>
                    </div>
                    <div className="content-right-img">
                        <div className="split-image-container-v2">
                            <img src={transImg} alt="Transformer model" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide10;
