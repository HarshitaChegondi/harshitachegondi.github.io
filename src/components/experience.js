import { Row, Col, Container, Card } from "react-bootstrap";
import ABSYZ from "../assets/img/absyz.jpg";
import Pena4 from "../assets/img/pena4.jpeg";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <div className="text-center"><h2>WORK EXPERIENCE</h2></div>

        {/* ABSYZ */}
        <Card className="tile-card bg-light border-0 shadow-sm rounded-4 mb-4">
          <Card.Body>
            <Row className="align-items-start g-3">
              <Col xs={12} md="auto" className="text-center text-md-start">
                <img src={ABSYZ} alt="ABSYZ logo" className="company-logo" />
              </Col>
              <Col xs={12} md={10}>
                <h5 className="mb-2">Senior Software Engineer | April 2021 - January 2023</h5>
                <ul className="mb-3">
                  <li>Delivered a 30% drop in support tickets by designing a unified submission gateway with server-side validations and async queues using Node.js, Express, Apex, and Salesforce Flows</li>
                  <li>Boosted form data accuracy by 40% by creating a reusable LWC component library with field-level rules using Lightning Web Components, JavaScript, and Apex</li>
                  <li>Reduced manual data synchronization by 70% by integrating Salesforce with third-party platforms and scheduling bi-directional updates using REST, OAuth 2.0, and Named Credentials</li>
                  <li>Optimized API latency by 40% by refactoring middleware and bulkifying queries using Node.js, Express, cached lookups, and selective SOQL</li>
                  <li>Streamlined release cadence by 30% by tightening CI/CD checks and leading Agile ceremonies using Jira, Git, Jenkins, and SFDX</li>
                </ul>

                <h5 className="mb-2">Software Engineer | April 2021 - September 2020</h5>
                <ul className="mb-0">
                  <li>Elevated data processing throughput by 35% by developing a custom admissions app with normalized relationships using Salesforce HEDA, Aura, and Apex</li>
                  <li>Minimized production defects by 50% by adopting test-driven development and raising coverage to 90%+ using Apex test classes and SFDX automation</li>
                  <li>Accelerated page load times by 25% by eliminating N+1 patterns and refactoring triggers using bulkified Apex and indexed SOQL</li>
                  <li>Simplified approval turnaround by 60% by automating workflows, validations, and notifications using Flows, Process Builder, and Email Alerts</li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Pena4 */}
        <Card className="tile-card bg-light border-0 shadow-sm rounded-4">
          <Card.Body>
            <Row className="align-items-start g-3">
              <Col xs={12} md="auto" className="text-center text-md-start">
                <img src={Pena4} alt="Pena4 logo" className="company-logo" />
              </Col>
              <Col xs={12} md={10}>
                <h5 className="mb-2">Data Analyst Intern | April 2019 - May 2020</h5>
                <ul className="mb-0">
                  <li>Improved data availability by 50% by migrating structured healthcare datasets to a cloud data lake using Python, SQL, AWS Glue, and Amazon S3</li>
                  <li>Shortened reporting cycles by 40% by parallelizing transformations and enabling ad-hoc SQL using AWS EMR, Athena, and partitioned Parquet</li>
                  <li>Secured audit readiness by enforcing least-privilege access and proactive monitoring using AWS IAM, CloudWatch, and executive dashboards in Tableau</li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};
