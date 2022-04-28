import { Card, Button } from "react-bootstrap";
import React from "react";
import css from "../../styles/projectcard.module.css"


function ProjectCard({image, title}){
    return <div>
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Button className={css.button} variant="primary">Go somewhere</Button>
    <Button className={css.button} variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
</div>
}

export default ProjectCard