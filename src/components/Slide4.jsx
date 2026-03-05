import React from 'react';
import { Asterisk, ArrowDownLeft } from 'lucide-react';
import './Slide4.css';
const calcImg = '/calculator_era.png';
const kaspImg = '/kasparov.png';
const alphaImg = '/alphago.png';
const transImg = '/transformer_2017.png';


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
