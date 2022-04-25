import { Link } from "react-router-dom"
import css from "../styles/projects.module.css"
import { Card, Button } from "react-bootstrap";

function Projects() {
    return (
      <div className={css.page}>
            <nav className={css.nav}>
        <Link className={css.link} to="/Home">Home</Link> |{" "}
        <Link className={css.link} to="/Projects">Projects</Link> |{" "}
        <Link className={css.link} to="/Contact">Contact</Link>
      </nav>
        <h2>Projects</h2>

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
    );
  }

  export default Projects