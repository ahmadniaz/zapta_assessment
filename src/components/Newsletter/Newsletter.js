import React from "react";
import { Col, Input, Row } from "reactstrap";
import send from "../../assets/icons/send.svg";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <Row className="mt-5 newsletter_container_main">
        <Col lg={12} className="newsletter_container">
          <Col lg={4} md={12} sm={12} className="newsletter_text">
            <h4>Subscribe for Newsletter</h4>
            <p>
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id
              vitae orci maecenas tortor odio
            </p>
          </Col>
          <Col lg={4} md={12} sm={12} className="newsletter_input">
            <input type="email" placeholder="Inserisci la tua email" />
            <button>
              <img src={send} alt="SEND" width="12px" />
            </button>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Newsletter;
