import React, { useState } from 'react';
import { Button, Card, Col, Container, Image, ListGroup, Nav, Navbar, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'
import Projects from './Projects';
import Blog from './Blog';
import Resume from '../assets/documents/Resume_s23.pdf'
import headshot from "../assets/_figures/headshot.jfif"

const Homepage = () => {
    const [home, setHome] = useState(true)

    return <Container style={{marginTop:'20px'}}>
        <Row>
        <h1>Matthew Chang</h1>
        <p>University of Wisconsin-Madison <br/>
            Bachelor of Science in Computer Sciences, minor in Data Science</p>
        <BrowserRouter>
            <Navbar style={{marginTop: '-20px', marginBottom: '-15px'}}>
                <Container>
                    <Nav className='me-auto'>
                    <Nav.Link as={Link} to="/home" className='navLink' onClick={() => setHome(true)}><h5>Home</h5></Nav.Link>
                    <Nav.Link as={Link} to="/projects" className='navLink' onClick={() => setHome(false)}><h5>Projects</h5></Nav.Link>
                    <Nav.Link as={Link} to="/blog" className='navLink' onClick={() => setHome(false)}><h5>Blog</h5></Nav.Link>
                    </Nav>
                    <a href={Resume} target="_blank">
                    <Button variant="success" style={{marginBottom:'20px', marginLeft: '12px'}}>Download Resume</Button>
                    </a>
                    <a href="mailto:mrchang2@wisc.edu" target="_blank" rel="noopener noreferrer">
                    <Button variant="success" style={{marginBottom:'20px', marginLeft:'20px'}}>Email me</Button>
                    </a>
                </Container>
            </Navbar>
            <hr/>
            <Routes>
                {/* <Route path='/' element={<Home/>}/> */}
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/blog' element={<Blog/>}/>
            </Routes>
        </BrowserRouter>
        { home &&
        <Container>
            <Row>
                <Col xs={12} md={4} style={{marginTop:'7px'}}>
                    <Image src={headshot} alt="headshot" fluid rounded/>
                    <div style={{ alignSelf: 'stretch', textAlign: 'center', marginTop: '10px'}}>
                        <a href="https://www.linkedin.com/in/matthew-chang-899861233/" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/matthew-chang-899861233/
                        </a>
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <p>
                    I am a Junior at the University of Wisconsin Madison majoring in Computer Science and pursuing a 
                    certificate in Data Science. I have an interest in computer programming, particularly in web design, 
                    UX, and data analysis. I am experienced in programming languages such as Java, C, Python, HTML, 
                    JavaScript, and CSS. I am currently working as an IT Support Specialist at the UW Madison Division 
                    of Informational Technology (DoIT).
                    </p>
                    <strong>Courses</strong>
                    <ListGroup> 
                    <ListGroup.Item style={{color: '#28282B'}}>Object Oriented Programming I, II, and III (CS 200, 300, 400)</ListGroup.Item>
                    <ListGroup.Item>Data Science Programming I and II (CS 220, 320)</ListGroup.Item>
                    <ListGroup.Item>Computer Engineering (ECE 252)</ListGroup.Item>
                    <ListGroup.Item>Machine Organization and Programming (CS 354)</ListGroup.Item>
                    <ListGroup.Item>Data Engineering and Machine Learning(ECE 204)</ListGroup.Item>
                    <ListGroup.Item>Designing User Interfaces (CS 571)</ListGroup.Item>
                    <ListGroup.Item>Introduction to Cryptography (CS 435)</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        }
        <hr style={{marginTop:'15px'}}/>
        </Row>
        <p style={{textAlign: "center"}}>Email: mrchang2@wisc.edu <br/> Mobile: 608-977-2329</p>
    </Container>
}

export default Homepage