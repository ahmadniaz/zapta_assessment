import React from "react";
import { Col, Row } from "reactstrap";
import squarePattern from "../../assets/square-pattern.png";
import "./About.css";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import dish from "../../assets/dish.png";
import solar from "../../assets/solar.png";

const AboutUs = () => {
  const data = [
    {
      pic: pic3,
      name: "Cristian Testoni",
      desc: "Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica.",
    },
    {
      pic: pic1,
      name: "Francesco Gavioli",
      desc: "Nel corso degli anni ho maturato una profonda conoscenza nella progettazione e realizzazione di impianti elettrici e di energia rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda all’avanguardia nell’installazione di impianti fotovoltaici",
    },
    {
      pic: pic2,
      name: "Massimo Fabi",
      desc: "Laurato in Economia e Commercio mi sono occupato per anni di Business Development sia in multinazionali che PMI italiane in differenti settori",
    },
  ];
  return (
    <>
      <div className="stakeholder-container mt-5">
        <Row className="d-flex mb-3">
          <Col lg={2} md={12} sm={12} className="text-center">
            {" "}
            <img src={squarePattern} alt="Pattern" width="85px" />
          </Col>
          <Col lg={8} md={12} sm={12} className="text-center mb-3">
            {" "}
            <div className="text-container">
              <h2>ABOUT US</h2>
              <p className="mt-3 p-2">
                Solar Innovatio è una PMI innovativa italiana specializzata
                nella progettazione e realizzazione di sistemi fotovoltaici
                intelligenti. Solar Innovatio unisce alla decennale esperienza
                maturata nel panorama italiano nell'ambito delle soluzioni
                fotovoltaiche un approccio ingegneristico, innovativo, digitale
                alla principale fonte di energia rinnovabile.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex card_container mt-5">
          {data.map((user, index) => {
            return (
              <Col xxl={3} lg={3} key={index} className="user_card">
                <img src={user.pic} alt="USER" />
                <div className="card_text">
                  <h5>{user.name}</h5>
                  <p>{user.desc}</p>
                </div>
              </Col>
            );
          })}
        </Row>

        <Row className="d-flex mt-5 qoute_container">
          <Col lg={6} className="qoute">
            <blockquote>
              <h5>
                Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
                componente di una soluzione ingegneristica più completa che
                comprende sensoristiche avanzate e l'integrazione con i sistemi
                domotici di casa.
              </h5>
            </blockquote>
            <p>-Cristian Testoni-</p>
          </Col>
        </Row>
      </div>
      <div className="stakeholder-container mt-5">
        <Row className="mt-5 p-3 third_container">
          <Col lg={6} className="images_col">
            <Col className="first_img">
              <img
                src={squarePattern}
                alt="Pattern"
                className="pattern"
                width="85px"
              />
              <img src={dish} alt="Dish" width="320px" />
            </Col>
            <Col className="second_img_container">
              <img
                src={solar}
                alt="Solar"
                className="solar_img"
                width="320px"
              />
              <img
                src={squarePattern}
                alt="Pattern"
                className="pattern"
                width="85px"
              />
            </Col>
          </Col>
          <Col lg={6} className="info_col">
            <Col lg={8} className="pattern_container">
              <img src={squarePattern} alt="Pattern" width="85px" />
            </Col>
            <Col lg={10} className="text_container">
              <h3>S.I.R.E</h3>
              <h2>Smart Integrated Renewable Energy</h2>
              <p>
                S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo
                per la produzione, conversione e gestione dell'energia solare,
                studiato specificatamente per installazioni all'interno di
                condomini.
              </p>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutUs;
