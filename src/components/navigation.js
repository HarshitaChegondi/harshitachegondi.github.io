import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Section detection logic
            const sections = document.querySelectorAll("section");
            let current = "home"; // Default section

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id");
                }
            });

            setActiveLink(current);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);

       

    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <h3 className="logoName">Harshita's Portfolio</h3>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>

                        <Nav.Link
                            href="#experience"
                            className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('experience')}>
                            Experience
                        </Nav.Link>

                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}>
                            Skills
                        </Nav.Link>

                        <Nav.Link
                            href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}>
                            Projects
                        </Nav.Link>

                        <Nav.Link
                            href="#education"
                            className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('education')}>
                            Education
                        </Nav.Link>


                        <Nav.Link
                            href="#certifications"
                            className={activeLink === 'certifications' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('certifications')}>
                            Certifications
                        </Nav.Link>
                    </Nav>
                    
                    <span className="navbar-text">
                    <div className="social-icon">
                            <a href="https://github.com/HarshitaChegondi" target="_blank"><img src={github} alt="Icon1" /></a>
                        </div>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/harshita0511/" target="_blank"><img src={navIcon1} alt="Icon1" /></a>
                        </div>
                        <button className="vvd" onClick={() => {document.getElementById('footer-down')
                                                                .scrollIntoView({ behavior: 'smooth' });}}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
