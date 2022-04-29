import { Link } from "react-router-dom"
import css from "../styles/projects.module.css"
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Project-Card";
import { Card, Button } from "react-bootstrap";


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
        <ProjectCard rightClick={"https://www.nashvilleshoewarehouse.com/blogs/fashion-trends-news/take-your-style-to-new-heights"} leftClick={"https://echelonfit.com/blogs/blog/walking-a-path-to-a-healthier-you"} leftButton={'Echelon'} rightButton={'Nashville shoe warehouse'} title={'Blog Work'} image={"https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"}/>
        </Col>
        <Col className={css.col}>
        <ProjectCard rightClick={"https://www.nashvilleshoewarehouse.com/collections/slippers/products/levis-harbin-mens-clog-slipper"} leftClick={"https://echelonfit.com/products/echelon-smart-connect-bike-ex5"} leftButton={'Echelon'} rightButton={'Nashville shoe warehouse'} title={'E-Commerce'} image={"https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/>
        </Col>
        <Col className={css.col}>
        <Card className={css.card}>
      <Card.Img variant="top" src={"https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} />
      <Card.Body>
      <Card.Title>"Ideation & Branding"</Card.Title>
      <Button className={css.button} variant="primary"><a href={"https://www.opry.com/opry-5000-landing-page/"}>Opry</a></Button>
      <Link to="/RokaPdf">
      <Button className={css.button} variant="primary">Roka</Button>
      </Link>
      </Card.Body>
      </Card>
        </Col>
        <Col className={css.col}>
        <ProjectCard rightClick={"https://industrialfans.hunterfan.com/pages/warehouse"} leftClick={"https://www.trevecca.edu/academics/program/physician-assistant"} leftButton={'Hunter'} rightButton={'Trevecca'} title={'Web Copy'} image={"https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}/>
        </Col>
        <Col className={css.col}>
        <Card className={css.card}>
      <Card.Img variant="top" src={"https://images.unsplash.com/photo-1644952350841-070996fad2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} />
      <Card.Body>
      <Card.Title>Print</Card.Title>
      <Link to="/TrailerPdf">
      <Button className={css.button} variant="primary">Trailer upgrade</Button>
      </Link>
      <Link to="/RokaEuro">
      <Button className={css.button} variant="primary">Roka</Button>
      </Link>
      </Card.Body>
      </Card>
        </Col>
        </Row>
      </div>
    );
  }

  export default Projects