import { Card, Button } from "react-bootstrap";
import React from "react";
import css from "../../styles/projectcard.module.css"


function ProjectCard({image, title}){
    return <div>
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className={css.button} variant="primary">Go somewhere</Button>
    <Button className={css.button} variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
</div>
}

export default ProjectCard