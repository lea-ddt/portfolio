import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "../CSS/Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Kasa from "../assets/Kasa.png";
import Booki from "../assets/Booki.png";
import Nina from "../assets/Nina-carducci.png";
import Sophie from "../assets/Sophie-bluel.png";

const CarouselComponent = () => {
  const pictures = [
    {
      image: Kasa,
      title: "Projet Kasa",
      description: "Plateforme de location immobilière.",
    },
    {
      image: Booki,
      title: "Projet Booki",
      description: "Site de réservation d’hôtels.",
    },
    {
      image: Nina,
      title: "Nina Carducci",
      description: "Photographe professionnelle.",
    },
    {
      image: Sophie,
      title: "Sophie Bluel",
      description: "Architecte d’intérieur.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="custom-arrow left" onClick={goToPrev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="carousel-container">
        <Carousel
          selectedItem={currentIndex}
          onChange={setCurrentIndex}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          swipeable
          renderArrowPrev={() => null}
          renderArrowNext={() => null}
        >
          {pictures.map((item, index) => (
            <div className="custom-slide" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="overlay">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="number">
          {currentIndex + 1} / {pictures.length}
        </div>
      </div>

      <button className="custom-arrow right" onClick={goToNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default CarouselComponent;
