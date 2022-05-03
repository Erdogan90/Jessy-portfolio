import { Card, Button } from "react-bootstrap";
import React from "react";
import css from "../../styles/projectcard.module.css"


function ProjectCard({image, title, leftButton, rightButton, leftClick, rightClick}){
    return <div>
    <Card className={css.card}>
    <Card.Title className={css.title}>{title}</Card.Title>
    <Card.Img className={css.picture} variant="top" src={image} />
    <Card.Body>
    <Button className={css.button} variant="light"><a href={leftClick}>{leftButton}</a></Button>
    <Button className={css.button} variant="light"><a href={rightClick}>{rightButton}</a></Button>
    </Card.Body>
    </Card>
</div>
}

export default ProjectCard