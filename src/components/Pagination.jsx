import React from 'react';
import './Pagination.css';

const Pagination = ({ activeSlide, totalSlides }) => {
    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <div className="pagination-numeric">
            <span className="current">{formatNumber(activeSlide)}</span>
            <span className="separator">/</span>
            <span className="total">{formatNumber(totalSlides)}</span>
        </div>
    );
};

export default Pagination;
