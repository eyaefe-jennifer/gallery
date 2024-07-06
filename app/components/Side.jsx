import React from "react";

const Side = () => {
  return (
    <div>
      <div className="fixed-bottom-container">
        <div className="scroll-down-wrap">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
        <div className="hero-slider-wrap_pagination-wrap">
          <div className="hero-slider-wrap_pagination hero-slider-pag swiper-pagination-clickable swiper-pagination-bullets"></div>
        </div>
        <div className="slide-progress-wrap">
          <div className="slide-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Side;
