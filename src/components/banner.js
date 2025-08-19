import { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/HarshitaPic.png";
import resume from '../assets/HarshitaChegondi.pdf'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Welcome to my portfolio"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta)

        return() => {clearInterval(ticker)};
    }, [text])

    const tick = () => {

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        //let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        let updatedText = fullText.substring(0, text.length+1);

        setText(updatedText);

        
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
    }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);  
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        } 
         
        
    }
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume; // Replace with the file's URL
        link.download = 'HarshitaChegondi_Resume.pdf'; // Set the file name
        link.click();

       
      };

      
    return(
        <section className="banner" id="home">
            <br/>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <h1 className="bannerH1">{'Hi! I am Harshita'}</h1>
                        <h3><span className="wrap">{text}</span></h3>
                        <div><p>Full-stack and data engineer with 4 years of experience spanning React, 
                            TypeScript, Node.js, Java, and Python for application development, and AWS, Snowflake, 
                            and Salesforce for scalable cloud solutions. Proven track record of delivering measurable 
                            results, including 25% faster UI performance, 40% higher form accuracy, 70% reduction in manual 
                            data sync, and 95% test coverage on high-volume processing. Skilled in Web apps,
                            distributed computing and data visualization. </p></div>
                        <button className='tagline' onClick={handleDownload}>Download Resume <ArrowRightCircle size={25} /></button>
                    </Col>
                     
                    <Col xs={5} md={5} xl={2}>
                        <img src={headerImg} alt="Header img" className="circular-image" />
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}
