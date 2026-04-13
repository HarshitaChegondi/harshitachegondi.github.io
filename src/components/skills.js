import { Container } from 'react-bootstrap';

const categories = [
  {
    label: "Programming Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Python", "C/C++", "Go"]
  },
  {
    label: "Full Stack",
    skills: ["React", "Node.js", "Express", "Redux", "GraphQL", "REST API", "Swagger", "Spring Boot", "Django", "Bootstrap"]
  },
  {
    label: "Databases & Cloud",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "AWS", "Salesforce", "Google Cloud Platform"]
  },
  {
    label: "Data Engineering",
    skills: ["Apache Airflow", "PySpark", "Snowflake", "AWS Glue", "AWS S3", "Databricks", "Parquet", "JSON", "ETL Pipelines", "Data Ingestion", "Schema Validation"]
  },
  {
    label: "Analytics & Visualization",
    skills: ["Tableau", "Power BI", "Snowflake"]
  },
  {
    label: "AI / ML Tools",
    skills: ["Claude", "Gemini", "GitHub Copilot", "Microsoft Copilot", "TensorFlow"]
  },
  {
    label: "Development Tools",
    skills: ["Git", "GitLab", "GitHub", "Jenkins", "Bitbucket", "Confluence", "Jira", "ServiceNow", "Postman", "Bash", "CI/CD", "Eclipse", "VS Code", "IntelliJ"]
  },
  {
    label: "Engineering Practices",
    skills: ["Agile", "Waterfall", "Sprint Planning", "Story Point Estimation", "Unit Testing", "Debugging", "API Documentation", "Code Reviews", "Cross Functional Collaboration", "Deployment", "Post Production Support"]
  },
  {
    label: "Productivity Tools",
    skills: ["MS Teams", "Office 365", "Slack", "SharePoint", "Lucid Charts", "Google Workspace"]
  }
];

export const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <Container>
        <h2 className="section-heading">Technical Skills</h2>
        <div className="skills-grid-card">
          {categories.map((col) => (
            <div className="skill-column" key={col.label}>
              <h4 className="skill-column-heading">{col.label}</h4>
              <div className="skill-chip-list">
                {col.skills.map((s) => (
                  <span className="skill-chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
