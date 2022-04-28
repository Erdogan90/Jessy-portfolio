import { Card, Button } from "react-bootstrap";
import React from "react";
import css from "../../styles/projectcard.module.css"
import { Link } from "react-router-dom"


function ProjectCard({image, title, leftButton, rightButton, leftClick}){
    return <div>
    <Card className={css.card}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Button className={css.button} variant="primary"><a href={leftClick}>{leftButton}</a></Button>
    <Button className={css.button} variant="primary">{rightButton}</Button>
    </Card.Body>
    </Card>
</div>
}

export default ProjectCard