import React from "react";
import { Col, Input, Row } from "reactstrap";
import location from "../../assets/icons/location.svg";
import email from "../../assets/icons/mail.svg";
import call from "../../assets/icons/call.svg";
import "./Contact.css";
import CustomButton from "../common/Button/CustomButton";

const Contact = () => {
  return (
    <>
      <Row className="mt-3 contact_container_main">
        <Col className="contact_heading">
          <h2>CONTATTACI</h2>
        </Col>

        <Col lg={10} className=" mt-5 contact_section_container">
          <Col lg={4} md={12} sm={12} className="contat_info_container">
            <div className="info">
              <img src={location} alt="Location" />
              <p>
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci
              </p>
            </div>
            <div className="info">
              <img src={email} alt="Location" />
              <div>
                <p>email@email.com</p>
                <p>support@support.com</p>
              </div>
            </div>
            <div className="info">
              <img src={call} alt="Location" />
              <p>+29 98595 8998</p>
            </div>
            <hr></hr>
            <div className="info">
              <p>We Will get back to you within 24 hours. Or Call us Now</p>
            </div>
          </Col>
          <Col lg={8} md={12} sm={12} className="contact_form_container">
            <form>
              <Row className="name_field">
                <Col lg={6}>
                  <Input type="text" placeholder="First Name" />
                </Col>
                <Col lg={6}>
                  <Input type="text" placeholder="Last Name" />
                </Col>
              </Row>

              <Row className=" mt-3 email_field">
                <Col lg={12}>
                  <Input type="email" placeholder="Email" />
                </Col>
              </Row>

              <Row className=" mt-3 message_field">
                <Col lg={12}>
                  <textarea
                    type="email"
                    placeholder="Message"
                    rows="4"
                    cols="50"
                  />
                </Col>
              </Row>

              <Row className=" mt-3 message_field">
                <Col lg={12} className="text-end">
                  <CustomButton
                    text="Send"
                    style={{
                      backgroundColor: "#86BE3F",
                      color: "white",
                      padding: "10px 50px",
                      verticalAlign: "bottom",
                      border: "none",
                    }}
                  />
                </Col>
              </Row>
            </form>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
