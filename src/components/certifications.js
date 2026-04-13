import { Col, Container, Row } from "react-bootstrap";
import salesforceJS1 from "../assets/img/salesforceJS1.jpg";
import Assiociate from "../assets/img/aiassiociate.jpg";
import Databricks from "../assets/img/DatabricksCertificate.jpg";
import Coursera from "../assets/img/coursera.jpg";
import APPLAUSE from "../assets/img/applause.jpg";

const certs = [
  { img: Assiociate,    title: "Salesforce Certified AI Associate",   year: "2025" },
  { img: Databricks,   title: "Databricks Generative AI Fundamentals", year: "2025" },
  { img: salesforceJS1, title: "Salesforce JavaScript Developer I", year: "2021" },
  { img: APPLAUSE,     title: "Applause Award — ABSYZ",               year: "2021" },
  { img: Coursera,     title: "Deep Learning Specialization",         year: "2020" }
];

export const Certifications = () => {
  return (
    <section className="certs-section" id="certifications">
      <Container fluid className="px-4 px-md-5">
        <h2 className="section-heading">Certifications</h2>
        <Row className="g-3 justify-content-center flex-nowrap flex-wrap">
          {certs.map((cert) => (
            <Col xs={6} sm={4} md={3} lg="auto" key={cert.title} style={{ minWidth: 150, maxWidth: 180 }}>
              <div className="cert-card">
                <div className="cert-image-area">
                  <img src={cert.img} alt={cert.title} className="cert-img" />
                </div>
                <div className="cert-body">
                  <h6 className="cert-title">{cert.title}</h6>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );

import Coursera from "../assets/img/coursera.jpg";
import Assiociate from "../assets/img/aiassiociate.jpg";
import APPLAUSE from "../assets/img/applause.jpg";
import Databricks from "../assets/img/DatabricksCertificate.jpg";


export const Certifications = () => {
    return (
        <section className="certificate top-gap" id="certifications">
            <br />
            <Container>
                <div><h2>CERTIFICATIONS / AWARDS</h2></div>
                <br />
                <Row className="g-4">
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="tile">
                            <img src={salesforceJS1} alt="Salesforce JS1" className="tile-image" />
                            <h3 className="tile-title">Salesforce JavaScript Developer 1</h3>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="tile">
                            <img src={Assiociate} alt="AI Assiociate" className="tile-image" />
                            <h3 className="tile-title">Salesforce Certified AI Assiociate</h3>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="tile">
                            <img src={Databricks} alt="Databricks" className="tile-image" />
                            <h3 className="tile-title">Databricks Generative AI fundamentals</h3>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="tile">
                            <img src={Coursera} alt="Coursera" className="tile-image" />
                            <h3 className="tile-title">DeepLearning by Coursera</h3>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <div className="tile">
                            <img src={APPLAUSE} alt="Applause Award" className="tile-image" />
                            <h3 className="tile-title">Applause Award by ABSYZ</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
