import React from "react";
import { Col, Row } from "reactstrap";
import CustomButton from "../../common/Button/CustomButton";
import logo from "../../../assets/logo.png";
import call from "../../../assets/icons/call.svg";
import mail from "../../../assets/icons/mail.svg";
import "./Nav.css";

const ContactBar = () => {
  return (
    <>
      <Row
        className="d-flex mt-2 p-3"
        style={{ borderBottom: "1px solid #F3EDED" }}
      >
        <Col lg={4} md={6} sm={12} className="text-center">
          {" "}
          <img src={logo} alt="Company Logo" />
        </Col>
        <Col lg={8} md={6} sm={12} className="contact_container">
          <Col
            lg={4}
            md={12}
            sm={12}
            className="d-flex justify-content-end align-items-baseline gap-3"
          >
            <img src={call} alt="Call" width="15px" />
            <p className="icons-color">0203 519 4420</p>
          </Col>
          <Col
            lg={4}
            md={12}
            sm={12}
            className="d-flex justify-content-end align-items-baseline gap-3"
          >
            <img src={mail} alt="Call" width="23px" />
            <p className="icons-color">info@solarinnovatio.com</p>
          </Col>
          <Col lg={4} md={12} sm={12} className=" d-flex justify-content-end">
            <CustomButton
              text="Contact Us"
              style={{
                backgroundColor: "#86BE3F",
                color: "white",
                border: "none",
                padding: "0px 20px",
              }}
            />
          </Col>
          <i className="ri-phone-fill icons-color fs-4"></i>
        </Col>
      </Row>
    </>
  );
};

export default ContactBar;
