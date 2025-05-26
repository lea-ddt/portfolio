import React from "react";
import CarouselComponent from "../components/Carousel";
import "../CSS/Home.css";
import Competences from "../assets/Competences.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import avion from "../assets/avion2.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const handleScrollToPortfolio = () => {
    const section = document.getElementById("Portfolio");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <div>
        <div className="présentation" id="Accueil">
          <div className="background"></div>
          <div className="text-presentation">
            <p>
              Léa Dudit,
              <br />
              <span className="highlight">Développeuse web</span>
            </p>
            <button onClick={handleScrollToPortfolio}>Voir Portfolio</button>
          </div>
        </div>

        <div className="text-apropos" id="aPropos">
          <p className="title-white">À PROPOS DE MOI</p>
          <div className="flex-propos">
            <div className="competences">
              <p className="title">COMPETENCES</p>
              <img src={Competences} alt="logo de différentes compétences" />
            </div>
            <div className="propos-de-moi">
              <p className="title">À PROPOS DE MOI</p>
              <div className="paragraphe-propos">
                <p>
                  Je m'appelle Léa Dudit, j'ai 22 ans.
                  <br /> En 2024 j'ai découvert le développement web et je m'y
                  suis découvert une passion pour le code. J’ai donc entrepris
                  une reconversion professionnelle afin d’apprendre le métier.
                  <br />
                  <br />
                  Au cours de ma formation, j’ai développé de solides
                  compétences en HTML, CSS, JavaScript et React. J’ai également
                  mené à bien plusieurs projets, notamment la création de sites
                  web à partir de maquettes, l’optimisation des performances et
                  du référencement (SEO), ainsi que le débogage d’applications.
                  <br />
                  <br />
                </p>

                <a
                  href="https://lea-ddt.github.io/portfolio/CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir le CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="Portfolio">
          <div className="portfolio">
            <p className="title">PORTFOLIO</p>
            <CarouselComponent />
          </div>
        </div>

        <div id="Contact">
          <p className="title">CONTACT</p>
          <div className="ensemble-contact">
            <div className="lien-icon-ensemble">
              <p className="paragraphe-contact">
                Pour me contacter vous avez à disposition mon adresse e-mail
                ainsi que mon Linkedin
              </p>
              <div className="lien-icon">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:lea.dudit1@gmail.com"
                  className="contact-btn"
                >
                  E-mail
                </a>
              </div>
              <div className="lien-icon">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/l%C3%A9a-dudit-b4a743298/"
                  className="contact-btn"
                >
                  Linkedin
                </a>
              </div>
            </div>
            <div>
              <img src={avion} alt="dessin d'un d'avion en papier" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
