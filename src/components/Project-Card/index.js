import { Card, Button } from "react-bootstrap";
import React from "react";
import css from "../../styles/projectcard.module.css"


function ProjectCard({image, title, leftButton, rightButton, leftClick, rightClick}){
    return <div>
    <Card className={css.card}>
    <Card.Img className={css.picture} variant="top" src={image} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Button className={css.button} variant="primary"><a href={leftClick}>{leftButton}</a></Button>
    <Button className={css.button} variant="primary"><a href={rightClick}>{rightButton}</a></Button>
    </Card.Body>
    </Card>
</div>
}

export default ProjectCard