import { Container } from "react-bootstrap";
import ABSYZ from "../assets/img/absyz.jpg";
import Pena4 from "../assets/img/pena4.jpeg";

export const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <Container>
        <h2 className="section-ing">Work Experience</h2>

        <div className="tl-wrapper">

          {/* SkillzDepot — left */}
          <div className="tl-row">
            <div className="tl-left">
              <div className="timeline-card timeline-card-accent">
                <div className="timeline-card-er">
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
                <div className="timeline-card-er">
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
                <div className="timeline-card-er">
                  <img src={Pena4} alt="Pena4" className="timeline-logo" />
                  <div>
                    <h5 className="timeline-title">Software Engineer</h5>
                    <span className="timeline-company">Pena4 · Andhra Pradesh, India</span><br />
                    <span className="timeline-date">May 2020 – Sep 2020</span>
                  </div>
                </div>
                <ul className="timeline-list">
                  <li>Deployed cloud-native AWS pipelines (S3, Lambda, Glue) for large-scale healthcare data ingestion; reduced data prep effort by 35% and improved pipeline reliability by 30%.</li>
                  <li>Automated Snowflake and DynamoDB pipeline schema validation and integrity checks, cutting 25% of manual audit over and reducing reporting defects by 25%.</li>
                  <li>Optimized PostgreSQL query plans and indexes for high-throughput dashboards; reduced median response time by 35% and improved aggregation performance by 40%.</li>
                </ul>
              </div>
            </div>
            <div className="tl-center"><div className="tl-dot"></div></div>
            <div className="tl-right"></div>
          </div>

        </div>
      </Container>
    </section>
  );
};
