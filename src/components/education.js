import { Row, Col, Container, Card } from 'react-bootstrap';
import UTA from "../assets/img/uta.png";

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <div className="text-center my-4"><h2>EDUCATION</h2></div>

        <Row className="justify-content-center">
          <Col xs={12} md={11} lg={12}>
            <Card className="edu-card bg-light border-0 shadow-sm rounded-4">
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={12} md={9}>
                    <h5 className="mb-2">Master of Science</h5>
                    <ul className="mb-0">
                      <li>Computer Science</li>
                      <li>GPA 3.8/4.0</li>
                      <li>
                        Relevant Coursework: Artificial Intelligence, Big Data, Machine Learning,
                        Data Mining, Web Data Management
                      </li>
                    </ul>
                  </Col>
                  <Col xs={12} md={3} className="text-md-end mt-3 mt-md-0">
                    <img src={UTA} alt="UTA logo" className="img-fluid" style={{ maxWidth: 90 }} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
