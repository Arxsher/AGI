import React from 'react';
import { Bot, BrainCircuit, CheckCircle2, Star, AlertTriangle, Lightbulb } from 'lucide-react';
import './Slide6.css';

const Slide6 = () => {
    return (
        <div className="slide-container">
            <div className="slide-card slide6-card p-relative">

                {/* Header */}
                <header className="slide6-header">
                    <h2 className="slide6-title">
                        <span className="text-dark">What is AGI?</span> <span className="text-grey">Breaking Down the Basics</span>
                    </h2>
                    <p className="slide6-subtitle">Understanding the difference between the AI we use today and the AI of tomorrow</p>
                </header>

                {/* Comparison Layout */}
                <div className="comparison-grid">

                    {/* Card 1: ANI */}
                    <div className="comparison-card ani-card">
                        <div className="card-header">
                            <div className="icon-circle">
                                <Bot size={28} className="icon-dark" />
                            </div>
                            <h3 className="card-title">ANI: Narrow AI</h3>
                        </div>

                        <p className="card-desc"><strong>Artificial Narrow Intelligence</strong> - The AI we use every day</p>

                        <ul className="feature-list">
                            <li>
                                <CheckCircle2 size={20} className="list-icon" />
                                <div className="list-text">
                                    <span className="list-title">Siri, Alexa, ChatGPT</span>
                                    <span className="list-sub">Voice assistants and chatbots</span>
                                </div>
                            </li>
                            <li>
                                <CheckCircle2 size={20} className="list-icon" />
                                <div className="list-text">
                                    <span className="list-title">Netflix & Spotify recommendations</span>
                                    <span className="list-sub">Personalized content suggestions</span>
                                </div>
                            </li>
                            <li>
                                <CheckCircle2 size={20} className="list-icon" />
                                <div className="list-text">
                                    <span className="list-title">Chess & Go champions</span>
                                    <span className="list-sub">Game-playing AI systems</span>
                                </div>
                            </li>
                        </ul>

                    </div>

                    {/* Card 2: AGI */}
                    <div className="comparison-card agi-card">
                        <div className="card-header">
                            <div className="icon-circle icon-dark-bg">
                                <BrainCircuit size={28} className="icon-light" />
                            </div>
                            <h3 className="card-title">AGI: General AI</h3>
                        </div>

                        <p className="card-desc"><strong>Artificial General Intelligence</strong> - Human-level cognitive abilities</p>

                        <ul className="feature-list">
                            <li>
                                <Star size={20} className="list-icon-dark" />
                                <div className="list-text">
                                    <span className="list-title">Cross-domain intelligence</span>
                                    <span className="list-sub">Apply chess strategy to business negotiations</span>
                                </div>
                            </li>
                            <li>
                                <Star size={20} className="list-icon-dark" />
                                <div className="list-text">
                                    <span className="list-title">Autonomous learning</span>
                                    <span className="list-sub">Learn new skills without explicit programming</span>
                                </div>
                            </li>
                            <li>
                                <Star size={20} className="list-icon-dark" />
                                <div className="list-text">
                                    <span className="list-title">Conceptual understanding</span>
                                    <span className="list-sub">Grasp WHY things matter, not just patterns</span>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Slide6;
