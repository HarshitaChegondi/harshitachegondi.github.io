import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";
import erImg from "../assets/img/HarshitaPic.png";
import resume from '../assets/Harshita_Chegondi_Resume.pdf';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Welcome to my portfolio"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => { tick(); }, delta);
        return () => { clearInterval(ticker); };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) setDelta(prev => prev / 2);
        if (!isDeleting && updatedText === fullText) { setIsDeleting(true); setDelta(period); }
        else if (isDeleting && updatedText === '') { setIsDeleting(false); setLoopNum(loopNum + 1); setDelta(500); }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'HarshitaChegondi_Resume.pdf';
        link.click();
    };

    return (
        <>
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="bannerH1">Hi! I am Harshita</h1>
                        <h3><span className="wrap">{text}</span></h3>
                        <p className="banner-desc">
                            Full Stack Software Engineer with 4 years of experience owning the complete
                            request lifecycle from React UI through Node.js REST APIs to PostgreSQL,
                            across enterprise SaaS, AI platforms, and healthcare data systems. Skilled in
                            microservices architecture, OAuth security, CI/CD, and cloud infrastructure on AWS.
                        </p>
                        <button className="tagline" onClick={handleDownload}>
                            Download Resume <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={5} md={5} xl={2}>
                        <img src={erImg} alt="Harshita" className="circular-image" />
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="stats-bar">
            <Container>
                <Row className="g-0 justify-content-center">
                    <Col xs={6} md={3} className="stats-item">
                        <span className="stats-num">4+</span>
                        <p className="stats-label">Years Experience</p>
                    </Col>
                    <Col xs={6} md={3} className="stats-item">
                        <span className="stats-num">15+</span>
                        <p className="stats-label">Technologies</p>
                    </Col>
                    <Col xs={6} md={3} className="stats-item">
                        <span className="stats-num">65%</span>
                        <p className="stats-label">Data Accuracy</p>
                    </Col>
                    <Col xs={6} md={3} className="stats-item">
                        <span className="stats-num">25% faster</span>
                        <p className="stats-label">UI Performance</p>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
};
