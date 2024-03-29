import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        style={{ height: "300px", objectFit: "cover" }}
        variant="top"
        src={props.imgPath}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button
          className="demo-btn"
          variant="primary"
          href={props.demoLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"Demo"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
