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
                  <li>Built a locked progression system in React and Node.js where each module unlocks only after the prior assessment is passed, increasing course completion rates across the platform.</li>
                  <li>Integrated the Claude API into the Node.js backend to auto-generate study material summaries from uploaded transcripts, stored in Cloud Firestore so learners receive pre-generated content on every page load without redundant API calls.</li>
                  <li>Designed RESTful APIs in Node.js and Express.js covering module content delivery, progress tracking, and assessment submission with all business logic enforced server-side.</li>
                  <li>Built and maintained CI/CD pipelines using GitHub Actions across QA and Production environments, managed environment variables using GitHub Secrets, and served module videos via signed URLs expiring after one hour as a security best practice.</li>
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
                  <li>Delivered client projects end-to-end across React, TypeScript, Angular, and Salesforce, including a J-1 visa sponsorship modernization, an annual audit automation, a legacy website migration from React 16 to React 17, and a student admission portal — owning each from requirements through production deployment with client sign-off at every stage.</li>
                  <li>Built and shipped production-grade features across the full stack including multi-stage React forms with OAuth 2.0 authentication, Angular six-stage audit forms with DocuSign e-signature routing, Apex batch jobs processing large student data volumes, shared React component libraries used across all projects, and CI/CD pipelines using GitHub Actions across QA and Production environments.</li>
                  <li>Diagnosed and resolved performance bottlenecks using Chrome DevTools across both Angular and React codebases, identified unnecessary re-renders as the root cause in both cases, and refactored affected components delivering 25% faster load times on two separate client projects.</li>
                  <li>Maintained 90-95% test coverage across all projects by writing Apex test classes, unit tests using Jest, Jasmine, and Karma, and coordinating regression and cross-browser testing with QA before every release, while conducting code reviews, mentoring junior engineers, and presenting at bi-weekly client demos throughout delivery.</li>
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
                  <li>Built ETL pipelines using AWS Glue and Python to ingest CSV billing data from on-prem systems into S3, applying data quality transformations including null handling, type correction, and deduplication across 50,000+ monthly records.</li>
                  <li>Configured AWS Lambda to trigger pipeline execution on S3 file arrival, implementing event-driven processing that eliminated manual intervention and ensured continuous data ingestion.</li>
                  <li>Loaded cleaned datasets from S3 into Snowflake using Snowpipe for continuous ingestion, enforcing schema standards and data quality checks across 10 hospitals and 4 departments.</li>
                  <li>Built Tableau dashboards surfacing billing KPIs, procedure charge comparisons, and denial trends, giving managers real-time visibility into billing performance and improving data accuracy by 30% across the hospital network.</li>
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
