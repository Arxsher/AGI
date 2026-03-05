import React from 'react';
import { Asterisk, ArrowDownLeft } from 'lucide-react';
import './Slide4.css';
import calcImg from '../../../../.gemini/antigravity/brain/9b95a548-6ebe-442d-8256-8c510d72cf1e/calculator_era_1950s_1772117761596.png';
import kaspImg from '../../../../.gemini/antigravity/brain/9b95a548-6ebe-442d-8256-8c510d72cf1e/media__1772118054223.png';
import alphaImg from '../../../../.gemini/antigravity/brain/9b95a548-6ebe-442d-8256-8c510d72cf1e/alphago_2016_1772117850089.png';
import transImg from '../../../../.gemini/antigravity/brain/9b95a548-6ebe-442d-8256-8c510d72cf1e/attention_transformer_2017_1772117875757.png';


const timelineData = [
    {
        date: '1945–1951',
        title: 'The Calculator Era',
        text: 'Machines execute orders without thinking.',
        img: calcImg
    },
    {
        date: '1997',
        title: 'The Kasparov Moment',
        text: "IBM's Deep Blue defeats the World Chess Champion.",
        img: kaspImg
    },
    {
        date: '2016',
        title: 'AlphaGo',
        text: 'AlphaGo defeats the world champion. Strategy and intuition replace calculation.',
        img: alphaImg
    },
    {
        date: '2017',
        title: 'Attention Is All You Need',
        text: "Google publishes 'Attention Is All You Need.' The birth of the Transformer model.",
        img: transImg
    }
];

const Slide4 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card p-relative slide4-card">
                {/* Header */}
                <header className="slide4-header">
                    <h2 className="slide4-title">The Path to AGI</h2>
                    <ArrowDownLeft className="slide4-icon" size={32} />
                </header>

                {/* Timeline */}
                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    <div className="timeline-items">
                        {timelineData.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-top">
                                    <div className="pill-black">{item.date}</div>
                                    <div className="pill-outline">MILESTONE</div>
                                    <div className="timeline-dot-container">
                                        <div className="timeline-dot"></div>
                                    </div>
                                </div>

                                <div className="timeline-text">
                                    <h4 className="timeline-item-title" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{item.title}</h4>
                                    <p className="timeline-item-desc" style={{ fontSize: '0.9rem' }}>{item.text}</p>
                                </div>

                                <div className="timeline-image-container">
                                    <img src={item.img} alt={`Timeline ${item.title}`} className="timeline-image" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <footer className="slide4-footer">
                    <Asterisk className="logo-icon-small" size={24} />
                    <span className="page-number">AI EVOLUTION</span>
                </footer>
            </div>
        </div>
    );
};

export default Slide4;
