<<<<<<< HEAD
import { Container } from "react-bootstrap";
=======
import { Row, Col, Container, Card } from "react-bootstrap";
>>>>>>> 42d1e49c3e13a41f0cf35d57ac9da70284af6b48
import ABSYZ from "../assets/img/absyz.jpg";
import Pena4 from "../assets/img/pena4.jpeg";

export const Experience = () => {
  return (
<<<<<<< HEAD
    <section className="experience-section" id="experience">
      <Container>
        <h2 className="section-heading">Work Experience</h2>

        <div className="tl-wrapper">

          {/* SkillzDepot — left */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="timeline-card timeline-card-accent">
                <div className="timeline-card-header">
                  <div className="timeline-logo-text">SD</div>
                  <div>
                    <h5 className="timeline-title">Software Engineer</h5>
                    <span className="timeline-company">SkillzDepot · Remote, USA</span><br />
                    <span className="timeline-date">Feb 2025 – Present</span>
                  </div>
                </div>
                <ul className="timeline-list">
                  <li>Built AI workflow features in React and Node.js with server-side validation and GCS progress tracking; improved task completion by 38% and cut API error rates by 27%.</li>
                  <li>Optimized REST API via request batching and server-side caching, reducing call volume by 27% and latency by 40ms per interaction.</li>
                  <li>Architected Docker-containerized Node.js microservices for auth and session management with Jest test suites; improved reliability by 31% and eliminated regression defects by 26%.</li>
                  <li>Implemented CI/CD pipelines using GitHub Actions with branch-based release strategies, enabling zero-downtime deployments and cutting release cycles by 40%.</li>
                </ul>
              </div>
            </div>
            <div className="tl-center"><div className="tl-dot"></div></div>
            <div className="tl-right"></div>
          </div>

          {/* ABSYZ — right */}
          <div className="tl-row">
            <div className="tl-left"></div>
            <div className="tl-center"><div className="tl-dot"></div></div>
            <div className="tl-right">
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <img src={ABSYZ} alt="ABSYZ" className="timeline-logo" />
                  <div>
                    <h5 className="timeline-title">Senior Software Engineer</h5>
                    <span className="timeline-company">ABSYZ · Hyderabad, India</span><br />
                    <span className="timeline-date">Sep 2020 – Jan 2023</span>
                  </div>
                </div>
                <ul className="timeline-list">
                  <li>Led full-stack development for enterprise SaaS serving 10,000+ users across React, TypeScript, and Node.js with Salesforce integration; raised form completion by 30% and cut UI defects by 25%.</li>
                  <li>Built end-to-end OAuth 2.0 system — React login flows, Node.js token middleware, JWT REST endpoints — reducing partner onboarding time by 40% and improving data accuracy by 28%.</li>
                  <li>Migrated React class components to hooks, co-optimized API payloads and PostgreSQL query plans; achieved 25% faster load times on 50,000+ record datasets.</li>
                  <li>Shipped Java and TypeScript microservices with 90%+ test coverage; CI/CD gates reduced production incidents by 30% across all endpoints.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pena4 — left */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="timeline-card timeline-card-accent">
                <div className="timeline-card-header">
                  <img src={Pena4} alt="Pena4" className="timeline-logo" />
                  <div>
                    <h5 className="timeline-title">Software Engineer</h5>
                    <span className="timeline-company">Pena4 · Andhra Pradesh, India</span><br />
                    <span className="timeline-date">May 2020 – Sep 2020</span>
                  </div>
                </div>
                <ul className="timeline-list">
                  <li>Deployed cloud-native AWS pipelines (S3, Lambda, Glue) for large-scale healthcare data ingestion; reduced data prep effort by 35% and improved pipeline reliability by 30%.</li>
                  <li>Automated Snowflake and DynamoDB pipeline schema validation and integrity checks, cutting 25% of manual audit overhead and reducing reporting defects by 25%.</li>
                  <li>Optimized PostgreSQL query plans and indexes for high-throughput dashboards; reduced median response time by 35% and improved aggregation performance by 40%.</li>
                </ul>
              </div>
            </div>
            <div className="tl-center"><div className="tl-dot"></div></div>
            <div className="tl-right"></div>
          </div>

        </div>
=======
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
>>>>>>> 42d1e49c3e13a41f0cf35d57ac9da70284af6b48
      </Container>
    </section>
  );
};
