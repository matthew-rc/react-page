import { Col, Container, ListGroup, Row, Image } from "react-bootstrap"
import headshot from "../assets/_figures/headshot.jfif"

const Home = () => {
    return <Container>
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
export default Home