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
};
