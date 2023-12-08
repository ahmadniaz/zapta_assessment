import React, { useState } from "react";
import { Accordion, AccordionItem, Col, Collapse, Row } from "reactstrap";
import classnames from "classnames";
import squarePattern from "../../assets/square-pattern.png";
import cirecleSquare from "../../assets/circle-square.png";
import plusIcon from "../../assets/icons/plus.svg";
import minusIcon from "../../assets/icons/minus.svg";
import "./Faq.css";
import CustomButton from "../common/Button/CustomButton";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Dove si monta S.I.R.E.?",
      answer:
        "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
    },
    {
      id: 2,
      question: "Chi monta l’impianto S.I.R.E.?",
      answer:
        "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
    },
    {
      id: 3,
      question: "Quanto tempo impiega l’installazione?",
      answer:
        "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
    },
    {
      id: 4,
      question: "E’ necessario richiedere autorizzazioni al condominio?",
      answer:
        "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
    },
    {
      id: 5,
      question: "E’ necessario predisporre pratiche per il GSE? ",
      answer:
        "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
    },
    {
      id: 6,
      question: "L’impianto è garantito?",
      answer:
        "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
    },
    {
      id: 7,
      question: "E’ possibile usufruire di bonus fiscali?",
      answer:
        "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
    },
  ];

  const [openAccordions, setOpenAccordions] = useState(
    faqs.map((faq, index) => index === 0)
  );

  const toggleAccordion = (index) => {
    const updatedAccordions = openAccordions.map((accordion, i) =>
      i === index ? !accordion : accordion
    );
    setOpenAccordions(updatedAccordions);
  };

  return (
    <Row className="mt-5 faq_container_main">
      <Col lg={12} className="faq_heading_container">
        <Col lg={8}>
          <h2>Frequently Asked Questions</h2>
        </Col>
        <Col lg={4} className="faq_heading_pattern">
          <img src={squarePattern} alt="Pattern" width="85px" />
        </Col>
      </Col>

      <Col lg={12} className=" mt-5 questions_container_main">
        <Col lg={10} className="questions_container">
          {faqs.map((faq, index) => (
            <Accordion
              className="lefticon-accordion custom-accordionwithicon accordion-border-box"
              id={`accordionlefticon${faq.id}`}
              key={faq.id}
            >
              <AccordionItem className="m-3 accordian-item">
                <h2
                  className="accordion-header"
                  id={`accordionlefticonExample${faq.id}`}
                >
                  <button
                    className={classnames("accordion-button", {
                      collapsed: !openAccordions[index],
                    })}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="icon">
                      <img
                        src={openAccordions[index] ? minusIcon : plusIcon}
                        alt="Accordion Icon"
                        width="15px"
                      />
                    </span>
                    {faq.question}
                  </button>
                </h2>
                <Collapse
                  isOpen={openAccordions[index]}
                  className="accordion-collapse"
                  id={`accor_lefticonExamplecollapse${faq.id}`}
                >
                  <div className="accordion-body">{faq.answer}</div>
                </Collapse>
              </AccordionItem>
            </Accordion>
          ))}
        </Col>
      </Col>

      <Col lg={12} className="mt-5 faq_heading_container">
        <Col lg={5} className="faq_heading_pattern">
          <img src={cirecleSquare} alt="Pattern" width="165px" />
        </Col>
        <Col lg={7} className="faq_button_container">
          <CustomButton
            text="Collegati al sole"
            style={{
              backgroundColor: "#86BE3F",
              color: "white",
              padding: "10px 20px",
              verticalAlign: "bottom",
              border: "none",
            }}
          />
        </Col>
      </Col>
    </Row>
  );
};

export default Faq;
