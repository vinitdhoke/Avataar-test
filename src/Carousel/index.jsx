import React, { useState } from "react";
import "./styles.scss";

const images = [
  "https://images.pexels.com/photos/5579177/pexels-photo-5579177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5429914/pexels-photo-5429914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3218718/pexels-photo-3218718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg"
];

const Carousel3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => {
          const position = index - currentIndex;
          const isMiddle = Math.abs(position) === 0;
          const leftOffset = position * 50; // Adjust based on your needs

          const isLeft = position < 0 && position >= -2;
          const isRight = position > 0 && position <= 2;
          return (
            <div
              key={index}
              className={`slide ${isMiddle ? "middle" : ""}  ${
                isRight ? "right" : ""
              } ${isLeft ? "left" : ""}`}
              style={{
                transform: `translateX(${leftOffset}%) scale(${
                  isMiddle ? 1 : 0.8
                })`,
                zIndex: isMiddle ? 1 : 0
              }}
            >
              <img src={image} alt={`Slide ${index}`} />
              <div className="slide-text">Some text</div>
            </div>
          );
        })}
      </div>
      <div className="indicators">
        <button className="arrow left" onClick={prevSlide}>
          &#8249;
        </button>
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <button className="arrow right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel3D;
