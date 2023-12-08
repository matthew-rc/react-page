import React from 'react';
import { Button, Card, Col, Container, Image, ListGroup, Nav, Navbar, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'
import Projects from './Projects';
import Blog from './Blog';
import Resume from '../assets/documents/Resume_s23.pdf'
  
const Homepage = () => {
    return <Container style={{marginTop:'20px'}}>
        <Row>
        <h1>Matthew Chang</h1>
        <p>University of Wisconsin-Madison <br/>
            Bachelor of Science in Computer Sciences, minor in Data Science</p>
        <BrowserRouter>
            <Navbar style={{marginTop: '-20px', marginBottom: '-15px'}}>
                <Container>
                    <Nav className='me-auto'>
                    <Nav.Link as={Link} to="/" className='navLink'><h5>Home</h5></Nav.Link>
                    <Nav.Link as={Link} to="/projects" className='navLink'><h5>Projects</h5></Nav.Link>
                    <Nav.Link as={Link} to="/blog" className='navLink'><h5>Blog</h5></Nav.Link>
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
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/blog' element={<Blog/>}/>
            </Routes>
        </BrowserRouter>
        <hr style={{marginTop:'15px'}}/>
        </Row>
        <p style={{textAlign: "center"}}>Email: mrchang2@wisc.edu <br/> Mobile: 608-977-2329</p>
    </Container>
}

export default Homepage