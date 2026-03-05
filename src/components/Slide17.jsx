import React from 'react';
import './Slide17.css';

const Slide17 = () => {
    return (
        <div className="slide-container dark-theme">
            <div className="slide-card slide17-card bg-dark border-none p-relative">

                {/* Top Title */}
                <header className="slide17-header">
                    <h1 className="slide17-title">The Recursive Loop</h1>
                </header>

                {/* Main Content */}
                <div className="slide17-content">

                    {/* Left: SVG Diagram */}
                    <div className="slide17-diagram">
                        <svg viewBox="0 0 400 400" className="recursive-svg">
                            {/* Outer Blueprint Grid Lines */}
                            <rect x="20" y="20" width="360" height="360" fill="none" stroke="#333" strokeWidth="1" />
                            <rect x="40" y="40" width="320" height="320" fill="none" stroke="#2a2a2a" strokeWidth="0.5" />
                            <line x1="200" y1="20" x2="200" y2="380" stroke="#2a2a2a" strokeWidth="0.5" />
                            <line x1="20" y1="200" x2="380" y2="200" stroke="#2a2a2a" strokeWidth="0.5" />

                            {/* Outer Circle Ring */}
                            <circle cx="200" cy="200" r="150" fill="none" stroke="#666" strokeWidth="2" />
                            <circle cx="200" cy="200" r="140" fill="none" stroke="#444" strokeWidth="1" />

                            {/* Circular Arrow Path (Top) */}
                            <path d="M 200,55 A 145,145 0 0 1 340,210" fill="none" stroke="#ccc" strokeWidth="3" markerEnd="url(#arrowhead)" />
                            {/* Circular Arrow Path (Bottom) */}
                            <path d="M 200,345 A 145,145 0 0 1 60,190" fill="none" stroke="#ccc" strokeWidth="3" markerEnd="url(#arrowhead)" />

                            {/* Arrow Markers */}
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#ccc" />
                                </marker>
                            </defs>

                            {/* Inner Circle */}
                            <circle cx="200" cy="200" r="90" fill="none" stroke="#555" strokeWidth="2" />

                            {/* Code Symbol {/} - Left */}
                            <text x="145" y="215" fill="#ffffff" fontSize="42" fontWeight="700" fontFamily="monospace">{'{/'}</text>
                            <text x="195" y="215" fill="#ffffff" fontSize="42" fontWeight="700" fontFamily="monospace">{'}'}</text>

                            {/* Chip/Processor Icon - Right */}
                            <rect x="240" y="175" width="50" height="50" rx="6" fill="none" stroke="#fff" strokeWidth="2" />
                            <rect x="250" y="185" width="30" height="30" rx="3" fill="none" stroke="#aaa" strokeWidth="1.5" />
                            {/* Chip pins */}
                            <line x1="255" y1="175" x2="255" y2="168" stroke="#888" strokeWidth="1.5" />
                            <line x1="265" y1="175" x2="265" y2="168" stroke="#888" strokeWidth="1.5" />
                            <line x1="275" y1="175" x2="275" y2="168" stroke="#888" strokeWidth="1.5" />
                            <line x1="255" y1="225" x2="255" y2="232" stroke="#888" strokeWidth="1.5" />
                            <line x1="265" y1="225" x2="265" y2="232" stroke="#888" strokeWidth="1.5" />
                            <line x1="275" y1="225" x2="275" y2="232" stroke="#888" strokeWidth="1.5" />
                            <line x1="240" y1="190" x2="233" y2="190" stroke="#888" strokeWidth="1.5" />
                            <line x1="240" y1="200" x2="233" y2="200" stroke="#888" strokeWidth="1.5" />
                            <line x1="240" y1="210" x2="233" y2="210" stroke="#888" strokeWidth="1.5" />
                            <line x1="290" y1="190" x2="297" y2="190" stroke="#888" strokeWidth="1.5" />
                            <line x1="290" y1="200" x2="297" y2="200" stroke="#888" strokeWidth="1.5" />
                            <line x1="290" y1="210" x2="297" y2="210" stroke="#888" strokeWidth="1.5" />

                            {/* Corner markers */}
                            <line x1="20" y1="20" x2="50" y2="20" stroke="#555" strokeWidth="1.5" />
                            <line x1="20" y1="20" x2="20" y2="50" stroke="#555" strokeWidth="1.5" />
                            <line x1="380" y1="20" x2="350" y2="20" stroke="#555" strokeWidth="1.5" />
                            <line x1="380" y1="20" x2="380" y2="50" stroke="#555" strokeWidth="1.5" />
                            <line x1="20" y1="380" x2="50" y2="380" stroke="#555" strokeWidth="1.5" />
                            <line x1="20" y1="380" x2="20" y2="350" stroke="#555" strokeWidth="1.5" />
                            <line x1="380" y1="380" x2="350" y2="380" stroke="#555" strokeWidth="1.5" />
                            <line x1="380" y1="380" x2="380" y2="350" stroke="#555" strokeWidth="1.5" />
                        </svg>
                    </div>

                    {/* Right: Text Content */}
                    <div className="slide17-text">
                        <h2 className="slide17-subtitle">Google's AlphaEvolve (May 2025)</h2>
                        <p className="slide17-system-fn">
                            System Function: Research and invent better AI algorithms and chip architectures.
                        </p>

                        <p className="slide17-body">
                            Human engineers are no longer the bottleneck. When AI improves AI, the pace of innovation <span className="text-highlight">decouples from human limitations</span>.
                        </p>
                    </div>

                </div>

                {/* Footer */}
                <footer className="slide17-footer">
                    <span className="copyright-text">THE RECURSIVE LOOP — ALPHAEVOLVE</span>
                </footer>

            </div>
        </div>
    );
};

export default Slide17;
