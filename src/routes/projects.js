import { Link } from "react-router-dom"
import css from "../styles/projects.module.css"
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Project-Card";


function Projects() {
    return (
      <div className={css.page}>
            <nav className={css.nav}>
        <Link className={css.link} to="/Home">Home</Link> |{" "}
        <Link className={css.link} to="/Projects">Projects</Link> |{" "}
        <Link className={css.link} to="/Contact">Contact</Link>
      </nav>
        <h2>Projects</h2>
        <Row className={css.row}>
        <Col className={css.col}>
        <ProjectCard title={'Blog work'} image={"https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"}/>
        <ProjectCard title={'Digital Marketing'} image={"https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"}/>
        <ProjectCard title={'E-Commerce'} image={"https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/>
        </Col>
        <Col className={css.col}>
        <ProjectCard title={'Ideation'} image={"https://images.unsplash.com/photo-1609372697655-65d874e3fe60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/>
        </Col>
        </Row>
      </div>
    );
  }

  export default Projects