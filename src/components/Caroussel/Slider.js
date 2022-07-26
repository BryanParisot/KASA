import React, { useState } from "react";

const Slider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.images) || props.images.length <= 0) {
    return null;
  }
  return (
    <div className="slide">
      {props.images.map((i, index) => {
        return (
          <div
            className={current === index ? "slide active" : "slide"}
            key={index}
          >
            {current === index && <img className="slider" src={i} alt={i} />}
          </div>
        );
      })}
      {length === 1 ? (
        ""
      ) : (
        <span className="left_arrow">
          <svg
            onClick={prevSlide}
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </span>
      )}
      {length === 1 ? (
        ""
      ) : (
        <span className="right_arrow">
          <svg
            onClick={nextSlide}
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

export default Slider;
