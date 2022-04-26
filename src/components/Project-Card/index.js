import { Card, Button } from "react-bootstrap";
import React from "react";


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
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
</div>
}

export default ProjectCard