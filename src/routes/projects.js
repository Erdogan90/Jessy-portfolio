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
        <h2 className={css.header}>Projects</h2>
        <Row className={css.info}>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Row>
        <Row className={css.row}>
        <Col className={css.col}>
        <ProjectCard leftButton={'Echelon'} rightButton={'Nashville shoe warehouse'} title={'Blog Work'} image={"https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"}/>
        </Col>
        <Col className={css.col}>
        <ProjectCard leftButton={'Echelon'} rightButton={'Nashville shoe warehouse'} title={'E-Commerce'} image={"https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/>
        </Col>
        <Col className={css.col}>
        <ProjectCard leftButton={'Opry'} rightButton={'Roka'} title={'Ideation & Brand Development'} image={"https://images.unsplash.com/photo-1609372697655-65d874e3fe60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/>
        </Col>
        <Col className={css.col}>
        <ProjectCard leftButton={'Hunter'} rightButton={'Trevecca'} title={'Web Copy'} image={"https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/>
        </Col>
        <Col className={css.col}>
        <ProjectCard leftButton={'Trailer Upgrade'} rightButton={'Roka'} title={'Print'} image={"https://images.unsplash.com/photo-1644952350841-070996fad2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/>
        </Col>
        </Row>
      </div>
    );
  }

  export default Projects