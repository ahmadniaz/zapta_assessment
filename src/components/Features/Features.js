import React from "react";
import { Col, Row } from "reactstrap";
import versatile from "../../assets/versatile.png";
import auto from "../../assets/auto.png";
import efficient from "../../assets/efficient.png";
import independant from "../../assets/independant.png";
import conneso from "../../assets/conneso.png";
import resistance from "../../assets/resistance.png";
import "./Features.css";

const Features = () => {
  const feats = [
    {
      icon: versatile,
      title: "Versatile",
      desc: "Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare",
    },
    {
      icon: independant,
      title: "Indipendente e Green",
      desc: "dalle fonte non rinnovabili non è più un’utopia. S.i.r.e. fornisce l’accesso a fonti energetiche green anche a chi non ha un tetto di proprietà.",
    },
    {
      icon: auto,
      title: "Automatizzato",
      desc: "Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi sensori regolano l'esposizione in base alle condizioni atmosferiche.",
    },
    {
      icon: conneso,
      title: "Conneso",
      desc: "Il sistema si connette ai dispositivi Alexa, Google, elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di produzione dell’energia e ricevi notifiche e suggerimenti per l’utilizzo ottimale dell’energia autoprodotta.",
    },
    {
      icon: efficient,
      title: "Efficiente",
      desc: "Il sistema di accumulo permette di conservare l’energia generata in eccesso e renderla disponibile quando serve, per esempio di sera o in giornate nuvolose.",
    },
    {
      icon: resistance,
      title: "Resistente",
      desc: "Il sistema è realizzato con un rivestimento protettivo, impermeabile, isolante e resistente a fenomeni atmosferici aggressivi, all’abrasione, urti e graffi.",
    },
  ];
  return (
    <>
      <Row className="mt-5 features_container_main">
        <Col lg={12} className="features_heading mt-3">
          <h2>Connesso, Intelligente, Resistente</h2>
        </Col>

        <Col lg={10} className="features_container mt-2">
          {feats.map((features) => {
            return (
              <Col lg={6} md={12} sm={12} className="d-flex">
                <Col lg={3} className="img_col">
                  <img src={features.icon} alt="ICONS" width="61px" />
                </Col>
                <Col lg={9}>
                  <h4>{features.title}</h4>
                  <p>{features.desc}</p>
                </Col>
              </Col>
            );
          })}
        </Col>
      </Row>
    </>
  );
};

export default Features;
