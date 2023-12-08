import React from "react";
import { Col, Row } from "reactstrap";
import logo from "../../../assets/logo-white.png";
import frey from "../../../assets/frey.png";
import location from "../../../assets/icons/location-white.svg";
import email from "../../../assets/icons/mail-white.svg";
import call from "../../../assets/icons/call-white.svg";
import twitter from "../../../assets/twitter.png";
import fb from "../../../assets/fb.png";
import insta from "../../../assets/insta.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Row className="footer_container_main">
        <Col lg={10} md={12} sm={12} className="footer_links_container">
          <Col lg={3} md={6} sm={12} className="footer_first_sec">
            <img src={logo} alt="LOGO" width="97px" />
            <p>
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id
              vitae orci maecenas tortor odio Leo dui fermentum tristique urna
              tellus eget amet aliquam.
            </p>
            <div>
              <img src={frey} alt="FREY" />
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="links_sec">
            <p>Quick Links</p>
            <li>Home</li>
            <li>Chi Siamo</li>
            <li>S.I.R.E</li>
            <li>SIRE Features</li>
            <li>Why SIRE?</li>
            <li>SIRE Product</li>
            <li>How it Works?</li>
          </Col>
          <Col lg={3} md={6} sm={12} className="links_sec">
            <p>Quick Links</p>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>FAQ</li>
            <li></li>
            <li></li>
            <p>Documents</p>
            <li>Lindked Here</li>
          </Col>
          <Col lg={3} md={6} sm={12} className="footer_info_container">
            <p className="heading">Contact Us</p>
            <div className="footer_info">
              <img src={location} alt="Location" />
              <p>
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci
              </p>
            </div>
            <div className="footer_info">
              <img src={email} alt="Location" />
              <div>
                <p>email@email.com</p>
                <p>support@support.com</p>
              </div>
            </div>
            <div className="footer_info">
              <img src={call} alt="Location" />
              <p>+29 98595 8998</p>
            </div>
          </Col>
        </Col>
        <hr style={{ border: "1px solid #C9C9C9", width: "90%" }}></hr>
        <Row className="bottom_sec">
          <Col lg={10} className="second_footer_container">
            <Col lg={6} sm={12}>
              <p>All rights reserved</p>
            </Col>
            <Col lg={6} sm={12} className="icons_container">
              <div>
                <img src={insta} alt="INSTA" width="26px" />
                <img src={fb} alt="Facebook" width="26px" />
                <img src={twitter} alt="Twitter" width="26px" />
              </div>
            </Col>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default Footer;
