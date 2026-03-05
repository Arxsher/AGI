import React from 'react';
import { Brain, Milestone, TrendingUp, Zap, Flag, Sparkles } from 'lucide-react';
import './Slide5.css';

const agendaItems = [
    {
        num: '01',
        title: 'Introduction to AGI',
        desc: 'What is AGI? Understanding the difference between narrow AI and true general intelligence.',
        icon: <Flag size={28} className="bento-icon" />
    },
    {
        num: '02',
        title: 'The AI Evolution',
        desc: 'From calculators to transformers: the key milestones that paved the road to AGI.',
        icon: <Milestone size={28} className="bento-icon" />
    },
    {
        num: '03',
        title: 'The Turning Point',
        desc: 'The attention mechanism, expanding intelligence, collapsing costs, and IQ benchmarks.',
        icon: <TrendingUp size={28} className="bento-icon" />
    },
    {
        num: '04',
        title: 'The Arrival of True AGI',
        desc: 'The final phase transition: when artificial intelligence surpasses human capability.',
        icon: <Brain size={28} className="bento-icon" />
    },
    {
        num: '05',
        title: 'The End of the Beginning',
        desc: 'If we succeed, it will be the last invention humanity will ever need to make.',
        icon: <Sparkles size={28} className="bento-icon" />
    }
];

const Slide5 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide5-card">
                <header className="slide5-header">
                    <h2 className="slide5-title">Agenda Overview</h2>
                    <p className="slide5-subtitle">Our Journey Through the AGI Revolution</p>
                </header>

                <div className="bento-grid">
                    {/* Main Large Item (Left Column) */}
                    <div className="bento-item bento-large">
                        <div className="bento-top">
                            <span className="bento-num">{agendaItems[0].num}</span>
                            {agendaItems[0].icon}
                        </div>
                        <div className="bento-bottom">
                            <h3 className="bento-title">{agendaItems[0].title}</h3>
                            <p className="bento-desc">{agendaItems[0].desc}</p>
                        </div>
                    </div>

                    {/* Grid for items 02-04 */}
                    {agendaItems.slice(1, 4).map((item, index) => (
                        <div key={index} className="bento-item">
                            <div className="bento-top">
                                <span className="bento-num">{item.num}</span>
                                {item.icon}
                            </div>
                            <div className="bento-bottom">
                                <h3 className="bento-title-small">{item.title}</h3>
                                <p className="bento-desc-small">{item.desc}</p>
                            </div>
                        </div>
                    ))}

                    {/* Closing Section - Wide Card */}
                    <div className="bento-item bento-closing">
                        <div className="bento-top">
                            <span className="bento-num">{agendaItems[4].num}</span>
                            {agendaItems[4].icon}
                        </div>
                        <div className="bento-bottom">
                            <h3 className="bento-title-small">{agendaItems[4].title}</h3>
                            <p className="bento-desc-small">{agendaItems[4].desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide5;
