import React from "react";
import { Col, Row } from "reactstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <Row>
        <Col lg={8} md={12} sm={12} className="text-center text-container">
          <h1>Il tuo accesso al sole</h1>
          <h4>
            Sistemi fotovoltaici intelligenti ad uso residenziale, anche in
            assenza di tetto. La tua fonte d'energia, gratuita e sostenibile
          </h4>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
