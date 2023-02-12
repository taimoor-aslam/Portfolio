import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello and welcome to my portfolio! I am a full-stack developer with
            expertise in the MERN (MongoDB, Express, React, and Node.js) stack.
            I have a passion for creating dynamic and interactive web
            applications that provide intuitive and seamless user experiences.
            With my strong knowledge of the MERN stack, I have been able to
            develop various applications for clients, ranging from simple
            content management systems to complex e-commerce platforms. In
            addition to my technical skills, I am a dedicated and
            detail-oriented individual who takes pride in delivering
            high-quality work. I have excellent communication skills, and I am
            comfortable working both independently and as part of a team. Please
            take a look at some of my projects in my portfolio to get a better
            understanding of my skills and experience. If you have any questions
            or would like to discuss a potential project, please do not hesitate
            to reach out.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Taimoor</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
