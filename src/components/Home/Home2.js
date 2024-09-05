import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
            I am deeply passionate about programming, and my journey has been driven by curiosity and a relentless desire to create.🤷‍♂️
              <br />
              <br />With fluency in classic programming languages like
              <i>
                <b className="purple"> C/C++, Java, Python, PHP </b>
              </i>
                etc., I have cultivated expertise in developing modern web technologies and innovative products. My areas of interest include Blockchain, Artificial Intelligence, and building intelligent systems that push the boundaries of what's possible.
              <br />
              <br />
                I thrive on developing robust applications, harnessing the power of Machine Learning with frameworks like Django, and integrating tools like <i>
                <b className="purple"> JASON and XML.</b></i> My technical toolkit includes various programming languages, web development frameworks, databases, and machine learning libraries, allowing me to tackle complex problems across multiple domains.
              <br />
              <br />
            </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>

          <Row>
          <Col md={8} className="home-about-description" >
            <h1 style={{ fontSize: "2.6em" }}>
              TECHNICAL <span className="purple">SKILLS </span>
            </h1>
              <br />
              <br />
              <p style={{ textAlign: "left" }}>
                - <b className="purple">Programming Languages:</b> Python, Java, JavaScript, C/C++, HTML/CSS <br />
                - <b className="purple">Web Development:</b> Django, PHP, React, Node.js, Angular <br />
                - <b className="purple">Databases:</b> MySQL, PostgreSQL, MongoDB, SQLite <br />
                - <b className="purple">Machine Learning & Data Analysis:</b> TensorFlow, Keras, Scikit-learn, Pandas, NumPy <br />
                - <b className="purple">Tools & Technologies:</b> Git/GitHub, Docker, VS Code, Jupyter Notebook, Android Studio, Xampp, Arduino Uno, AutoCAD <br />
                - <b className="purple">Software Development:</b> Object-Oriented Programming (OOP), RESTful APIs, Agile Methodologies <br />
                - <b className="purple">Other Skills:</b> Data Structures & Algorithms, Blockchain Technology, Natural Language Processing (NLP), MS Excel, MS Word, etc. <br /> <br />
              </p>

              <p style={{ textAlign: "justify" }}>
              Combining my passion for technology with a strong foundation in 
               <b className="purple"> machine learning,</b>
              <i>
                <b className="purple">
                  {" "}
                  web development,
                </b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> software engineering. </b>
              </i>
              I aim to develop groundbreaking solutions that meet today's needs and anticipate tomorrow's challenges.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">contact </span> me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FardinJim27"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/fardin.ahmed.3956"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fardin-ahmed-jim-7594ba209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fardin_jim/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
