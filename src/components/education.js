import { Row, Col, Container } from 'react-bootstrap';
import UTA from "../assets/img/uta.png";
import Gitam from "../assets/img/gitam.jpg";

export const Education = () => {
  return (
    <section className="education-section" id="education">
      <Container>
        <h2 className="section-heading">Education</h2>
        <Row className="g-4 justify-content-center">
          <Col xs={12} md={6}>
            <div className="edu-card-new">
              <div className="edu-card-header">
                <img src={UTA} alt="UTA" className="edu-logo" />
                <div>
                  <h5 className="edu-degree">Master's Degree</h5>
                  <span className="edu-meta">University of Texas at Arlington · 2022–2024</span>
                </div>
              </div>
              <p className="edu-field">Computer Science</p>
              <ul className="edu-list">
                <li>GPA: 3.8 / 4.0</li>
                <li>Artificial Intelligence, Big Data, Machine Learning</li>
                <li>Data Mining, Web Data Management</li>
              </ul>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="edu-card-new">
              <div className="edu-card-header">
                <img src={Gitam} alt="GITAM" className="edu-logo" />
                <div>
                  <h5 className="edu-degree">Bachelor's Degree</h5>
                  <span className="edu-meta">GITAM University · 2016–2020</span>
                </div>
              </div>
              <p className="edu-field">Computer Science & Engineering</p>
              <ul className="edu-list">
                <li>Data Structures, Algorithms, DBMS</li>
                <li>Operating Systems, Computer Networks</li>
                <li>Software Engineering, Web Technologies</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
