import React from "react";
import { Col, Row } from "reactstrap";
import dollar from "../../assets/dollar.png";
import egg from "../../assets/egg.png";
import setting from "../../assets/setting.png";
import sun from "../../assets/sun.png";
import "./Process.css";
import CustomButton from "../common/Button/CustomButton";

const Process = () => {
  return (
    <>
      <Row className="mt-5 process_container_main">
        <Col className="benefits_heading">
          <h2>Connettiti al sole anche tu</h2>
        </Col>

        <Row className="mt-5 process_container">
          <Col lg={10} className="benefits_card_container mt-5 p-3">
            <Col lg={3} md={6} sm={12} className="process_card pic-1">
              <img src={dollar} alt="ICON" width="50px" />

              <p>Richiedi un Preventivo</p>
              <p>
                Senza impegno un nostro Solar expert ti contatterâ per
                verificare Ie tue esirenze ditilizzn
              </p>
            </Col>

            <Col lg={3} md={6} sm={12} className="process_card pic-2">
              <img src={egg} alt="ICON" width="50px" />

              <p>Verifica la compatibilitâ</p>
              <p>
                Senza impegno un nostro Solar expert ti contatterâ per
                verificare Ie tue esirenze ditilizzn
              </p>
            </Col>

            <Col lg={3} md={6} sm={12} className="process_card pic-3">
              <img src={setting} alt="ICON" width="50px" />

              <p>Installazione</p>
              <p>
                Senza impegno un nostro Solar expert ti contatterâ per
                verificare Ie tue esirenze ditilizzn
              </p>
            </Col>

            <Col lg={3} md={6} sm={12} className="process_card pic-4">
              <img src={sun} alt="ICON" width="50px" />

              <p>Enjoy your Sun Power</p>
              <p>
                Senza impegno un nostro Solar expert ti contatterâ per
                verificare Ie tue esirenze ditilizzn
              </p>
            </Col>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <CustomButton
              text="Collegati al sole"
              style={{
                padding: "5px 15px",
                backgroundColor: "#86BE3F",
                color: "white",
                border: "none",
              }}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Process;
