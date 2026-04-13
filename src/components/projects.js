import { Container, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: "VOYA – AI Travel Companion",
    description: "Built with React and Vite — helps users plan trips through conversational guidance covering flights, hotels, packing, weather, and cost estimates via the Claude API.",
    tags: ["React", "Vite", "Claude API"],
    link: "https://harshitachegondi.github.io/voya/"
  },
  {
    title: "Sentiment Analysis on Movie Reviews",
    description: "Analyzed 3 ML models (CNN, BERT, NLP), processing 10,000+ reviews and achieving 95% classification accuracy across genre and rating categories.",
    tags: ["Python", "BERT", "CNN", "NLP"],
    link: "https://github.com/HarshitaChegondi/SentimentAnalysisofMovieReview"
  },
  {
    title: "Distributed File System",
    description: "Implemented a distributed file system in Python with client-server architecture supporting upload, download, delete, and rename operations across networked nodes.",
    tags: ["Python", "Distributed Systems"],
    link: "https://github.com/HarshitaChegondi"
  },
  {
    title: "MSC Program MERN Stack",
    description: "Built a web app for instructors to manage 100+ students, quizzes, and grading in real time with auto-grading features, improving efficiency by 30%.",
    tags: ["React", "Node.js", "PHP"],
    link: "https://github.com/HarshitaChegondi"
  }
];

export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <Container>
        <h2 className="section-heading">Featured Projects</h2>
        <Row className="g-4">
          {projects.map((proj) => (
            <Col xs={12} sm={6} lg={3} key={proj.title}>
              <div className="project-card-new">
                
                <div className="project-card-body">
                  <h5 className="project-title">{proj.title}</h5>
                  <p className="project-desc">{proj.description}</p>
                  <div className="project-tags">
                    {proj.tags.map((t) => (
                      <span className="project-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <a href={proj.link} target="_blank" rel="noreferrer" className="view-project-btn">
                    View Project
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
