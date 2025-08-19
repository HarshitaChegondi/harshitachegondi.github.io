import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <br />
      <div><h2>PROJECTS</h2></div>

      <div className="tabs">
        <Row>
          <Col xs={12}>
            <Tabs defaultActiveKey="project1" justify className="custom-tab">
              <Tab eventKey="project1" title="Project 1">
                <Card className="tile-card bg-light border-0 shadow-sm rounded-4 my-3">
                  <Card.Body>
                    <Row>
                      <Col>
                        <h4>Sentiment Analysis on Movie Review</h4>
                        <ul>
                          <li>
                            Constructed sentiment prediction systems with CNNs and BERT to analyze
                            thousands of online reviews while maintaining high analytical quality.
                          </li>
                          <li>
                            Reached 97% accuracy and improved throughput for perception insights.
                          </li>
                        </ul>
                        <p><strong>Tech Stack:</strong> Python, Jupyter Notebook, GitHub</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab>

              <Tab eventKey="project2" title="Project 2">
                <Card className="tile-card bg-light border-0 shadow-sm rounded-4 my-3">
                  <Card.Body>
                    <Row>
                      <Col>
                        <h4>MSC program MERN Stack</h4>
                        <ul>
                          <li>
                            Built a web app for instructors to manage 100+ students, quizzes, and grading in real time.
                          </li>
                          <li>
                            Added real-time comms, quiz creation, and auto-grading to improve efficiency by 30%.
                          </li>
                        </ul>
                        <p><strong>Tech Stack:</strong> ReactJS, CSS, Node.js, PHP, VS Code</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab>

              <Tab eventKey="project3" title="Project 3">
                <Card className="tile-card bg-light border-0 shadow-sm rounded-4 my-3">
                  <Card.Body>
                    <Row>
                      <Col>
                        <h4>Sorting Techniques Visualizer</h4>
                        <ul>
                          <li>
                            Built an interactive visualizer for sorting algorithms, showing runtime on arrays 100–1000.
                          </li>
                          <li>
                            Improved responsiveness by fixing three timing issues and clarifying results in UI.
                          </li>
                        </ul>
                        <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, GitHub</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab>

              <Tab eventKey="project4" title="Project 4">
                <Card className="tile-card bg-light border-0 shadow-sm rounded-4 my-3">
                  <Card.Body>
                    <Row>
                      <Col>
                        <h4>Distributed File Processing System</h4>
                        <ul>
                          <li>
                            Built a distributed file system with Apache Spark, RDDs, and HDFS for parallel CRUD.
                          </li>
                          <li>
                            Used partitioning and lazy evaluation to boost processing efficiency by 60%.
                          </li>
                        </ul>
                        <p><strong>Tech Stack:</strong> Databricks, Apache Spark</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    </section>
  );
};
