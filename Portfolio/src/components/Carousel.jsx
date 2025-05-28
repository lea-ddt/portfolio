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
import { useEffect } from "react";

const CarouselComponent = () => {
  const pictures = [
    {
      image: Kasa,
      title: "Projet Kasa",
      description: "Plateforme de location immobilière.",
      projets:
        "Projet OpenClassrooms qui m’a permis d’apprendre deux nouveaux langages : React et SASS. Les principales difficultés rencontrées concernaient le responsive design sur la page Appartement, que j’ai pu résoudre grâce à de nombreux tests",
      technologies: "HTML CSS JavaScript React ReactRouter API SASS",
      URL: "https://github.com/lea-ddt/Kasa",
    },
    {
      image: Booki,
      title: "Projet Booki",
      description: "Site de réservation d’hôtels.",
      projets:
        "Le projet OpenClassrooms s’est appuyé sur une maquette Figma et m’a initié au développement Front-End. Il m’a permis d’apprendre à créer une interface responsive tout en découvrant le fonctionnement du HTML et du CSS.",
      technologies: "HTML CSS",
      URL: "https://github.com/lea-ddt/Bookie",
    },
    {
      image: Nina,
      title: "Nina Carducci",
      description: "Photographe professionnelle.",
      projets:
        "Projet OpenClassroom qui m'a permis de développer des compétences en optimisation de sites web, en me concentrant sur les performances, l’accessibilité et le référencement naturel (SEO).",
      technologies: "Lighthouse Wave",
      URL: "https://github.com/lea-ddt/Nina-carducci-photographie",
    },
    {
      image: Sophie,
      title: "Sophie Bluel",
      description: "Architecte d’intérieur.",
      projets:
        "Dans le cadre d’un projet OpenClassrooms, j’ai utilisé JavaScript pour développer des pages web dynamiques. J’ai également intégré une API en ligne afin de gérer les connexions et déconnexions, ainsi que l'ajout et suppression de traveaux.",
      technologies: "HTML CSS JavaScript API",
      URL: "https://github.com/lea-ddt/Sophie-Bluel",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                {" "}
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.projets}</p>
                <p className="technologies">
                  {item.technologies.split(" ").map((word, i) => (
                    <span key={i}>{word}</span>
                  ))}
                </p>
                <a target="_blank" rel="noreferrer" href={item.URL}>
                  Code Source
                </a>
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
