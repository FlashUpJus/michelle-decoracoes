import React from "react";
import { useEffect, useRef } from "react";
import "../styles/carousel.css";

const images = [
  "/img/cortina-rolo-white.jpg",
  "/img/cortina-rolo-white.jpg",
  "/img/cortina-rolo-white.jpg",
  "/img/cortina-rolo-white.jpg",
  "/img/cortina-rolo-white.jpg",
];

function Carousel() {
  const trackRef = useRef(null);

  const speedRef = useRef(60); // velocidade atual (px/s)
  const targetSpeedRef = useRef(60); // velocidade desejada

  const positionRef = useRef(0);

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      // suavização da velocidade (lerp)
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05;

      positionRef.current -= speedRef.current * delta;

      const track = trackRef.current;

      if (track) {
        const width = track.scrollWidth / 2;

        if (Math.abs(positionRef.current) >= width) {
          positionRef.current = 0;
        }

        track.style.transform = `translateX(${positionRef.current}px)`;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section
      id="Carousel"
      className="carousel-wrapper"
      aria-label="Galeria em destaque"
    >
      <div
        ref={trackRef}
        className="carousel-track"
        onMouseEnter={() => {
          targetSpeedRef.current = 30;
        }}
        onMouseLeave={() => {
          targetSpeedRef.current = 60;
        }}
      >
        {images.concat(images).map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt="Ambiente decorado com cortina clara" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
