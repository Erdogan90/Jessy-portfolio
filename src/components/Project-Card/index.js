import { Card, Button } from "react-bootstrap";
import React from "react";


function ProjectCard(){
    return <div>
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" />
    <Card.Body>
    <Card.Title>Blog Work</Card.Title>
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