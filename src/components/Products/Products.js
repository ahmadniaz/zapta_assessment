import React from "react";
import { Col, Row } from "reactstrap";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import "./Products.css";

const Products = () => {
  return (
    <>
      <Row className="mt-3 pb-5 products_container_main">
        <Col lg={12} className="products_heading mt-3">
          <h2>Scegli il tuo SIRE</h2>
        </Col>
        <Col lg={10} className="products_container mt-5">
          <Col lg={5} md={12} sm={12} className="left_container">
            <div className="product1_img">
              <img src={product1} alt="PRODUCT" width="540px" height="330px" />
            </div>
            <div className="product_content">
              <div className="product1_desc1">
                <h4>S.I.R.E Direct</h4>
                <ul>
                  <li>Sistema Plugin</li>
                  <li>
                    Struttura meccanizzata in poliuera e sensoristica
                    intelligente
                  </li>
                  <li>Pannelli alta efficienza da 1KW</li>
                  <li>Inverter e conne ssione aII'impianto domestico</li>
                  <li>App di controllo e gesti one</li>
                </ul>
              </div>
              <p className="text-dark">CONSIGLIATO PER:</p>
              <div className="product1_icons gap-5">
                <div>
                  <img src={icon1} alt="ICON" />
                  <p>Devices</p>
                </div>
                <div>
                  <img src={icon2} alt="ICON" />
                  <p>Families</p>
                </div>
              </div>
              <div className="product1_desc2">
                <p className="text-dark">Scopri le caratteristiche tecniche</p>
                <ul>
                  <li>Te mpo di ricarica medio in estate</li>
                  <li>TBD Tempo di scarica a 16A.</li>
                  <li>TBD Autonomia dalla rete elettrica.</li>
                  <li>TBD Autonomia in casa di blackout.</li>
                  <li>2gg Immissione di CO2 da 1.022 kg a SOO kg annui</li>
                  <li>Te mpo di ricarica medio in estate.</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={5} md={12} sm={12} className="right_container">
            <div className="product2_img">
              <img src={product2} alt="PRODUCT" width="540px" height="330px" />
            </div>
            <div className="product_content">
              <div className="product1_desc1">
                <h4>S.I.R.E Full</h4>
                <ul>
                  <li>Sistema Plugin</li>
                  <li>
                    Struttura meccanizzata in poliuera e sensoristica
                    intelligente
                  </li>
                  <li>Pannelli alta efficienza da 1KW</li>
                  <li>Inverter e conne ssione aII'impianto domestico</li>
                  <li>App di controllo e gesti one</li>
                </ul>
              </div>
              <p className="text-dark">CONSIGLIATO PER:</p>
              <div className="product1_icons gap-5">
                <div>
                  <img src={icon1} alt="ICON" />
                  <p>Devices</p>
                </div>
                <div>
                  <img src={icon2} alt="ICON" />
                  <p>Families</p>
                </div>
              </div>
              <div className="product1_desc2">
                <p className="text-dark">Scopri le caratteristiche tecniche</p>
                <ul>
                  <li>Te mpo di ricarica medio in estate</li>
                  <li>TBD Tempo di scarica a 16A.</li>
                  <li>TBD Autonomia dalla rete elettrica.</li>
                  <li>TBD Autonomia in casa di blackout.</li>
                  <li>2gg Immissione di CO2 da 1.022 kg a SOO kg annui</li>
                  <li>Te mpo di ricarica medio in estate.</li>
                </ul>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Products;
