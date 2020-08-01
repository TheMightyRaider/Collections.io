import React, { useState } from "react";
//ICONS
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Carousel({ children, title }) {
  const [currentIdx, setIdx] = useState(0);
  const length = children.length;
  const maxPerRow = 5;

  const next = (e) => {
    e.preventDefault();
    setIdx(currentIdx + maxPerRow);
  };

  const prev = (e) => {
    e.preventDefault();
    setIdx(currentIdx - maxPerRow);
  };

  const styles = {
    transform: `translateX(${-210 * maxPerRow * (currentIdx / maxPerRow)}px)`,
  };

  return (
    <div>
      <h3>
        {title.toUpperCase()}

        <button
          className="carousel-navbuttom"
          disabled={currentIdx + maxPerRow >= length}
          onClick={next}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <button
          className="carousel-navbuttom"
          disabled={currentIdx - maxPerRow < 0}
          onClick={prev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </h3>
      <div className="line" />
      <div className="carousel-container">
        <div className="carousel-items" style={styles}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Carousel;