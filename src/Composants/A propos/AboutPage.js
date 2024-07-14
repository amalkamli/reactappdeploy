import React from "react";
import "../A propos/AboutPage.css";
import BackgroundAbout from "../images/BackgroundAbout.png";
import LogoNavigation from "../LogoNavigation/LogoNavigation";
import Collapse from "../Collapses/Collapse";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const AboutPage = () => {
  return (
    <div>
      <LogoNavigation />

      <div className="background-container">
        <Banner backgroundImg={BackgroundAbout} />
      </div>

      <div className="collapseContainer-about">
        <div className="collapseWrapper">
          <Collapse className="collapseWrapper"
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
        </div>
        <div className="collapseWrapper">
          <Collapse className="collapseWrapper"
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className="collapseWrapper">
          <Collapse className="collapseWrapper"
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
        </div>
        <div className="collapseWrapper">
          <Collapse className="collapseWrapper"
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>

      <div className="footer-about">
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
