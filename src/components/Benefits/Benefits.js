import React from "react";
import { Col, Row } from "reactstrap";
import Energy from "../../assets/Energy.png";
import Car from "../../assets/Car.png";
import Cloud from "../../assets/Cloud.png";
import lamp from "../../assets/Lamp.png";
import battery from "../../assets/battery.png";
import notepad from "../../assets/notepad.png";
import leaf from "../../assets/leaf.png";
import "./Benefits.css";

const Benefits = () => {
  const benefits = [
    {
      icon: Energy,
      title: "Risparmio Energetico",
      desc: "Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.",
    },
    {
      icon: Car,
      title: "Mobilità Elettrica",
      desc: "L'unica soluzione che rende l’utilizzo di un’auto elettrica veramente economico. L’efficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero.",
    },
    {
      icon: Cloud,
      title: "Comunità Energetica",
      desc: "Dal concetto di condominio al concetto di comunità energetica: Si.Re. è il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete.",
    },
  ];
  return (
    <>
      <Row className="mt-3 benefits_container_main">
        <Col className="benefits_heading">
          <h2>Perchè S.I.R.E.</h2>
        </Col>
        <Col lg={10} className="benefits_card_container mt-5 p-3">
          {benefits.map((benefit) => {
            return (
              <Col lg={4} md={6} sm={12} className="benefits_card">
                <img src={benefit.icon} alt="ICON" width="65px" />
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </Col>
            );
          })}
        </Col>
      </Row>

      <Row className="mt-5 icons_container_main">
        <Col lg={10} className="benefits_card_container mt-5 p-3">
          <Col lg={3} md={6} sm={12} className="benefits_card">
            <img src={lamp} alt="ICON" width="50px" />
            <h4>110%</h4>
            <p>superbonus</p>
          </Col>

          <Col lg={3} md={6} sm={12} className="benefits_card">
            <img src={battery} alt="ICON" width="20px" />
            <h4>65%</h4>
            <p>Detrazione DOMOTICA</p>
          </Col>

          <Col lg={3} md={6} sm={12} className="benefits_card">
            <img src={notepad} alt="ICON" width="30px" />
            <h4>110%</h4>
            <p>Progettazione personalizzata</p>
          </Col>

          <Col lg={3} md={6} sm={12} className="benefits_card">
            <img src={leaf} alt="ICON" width="40px" />
            <h4>110%</h4>
            <p>consulenza fiscale sui bonus</p>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Benefits;
