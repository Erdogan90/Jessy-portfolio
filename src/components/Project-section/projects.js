import { Link } from "react-router-dom"
import css from "../../styles/projects.module.css"
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../Project-Card/index";
import { Card, Button } from "react-bootstrap";
import blog from "../../images/blog work.png";
import ecomm from "../../images/e-comm.png";
import ideation from "../../images/ideation.png"
import print from "../../images/print.png"
import web from "../../images/web copy.png"


function Projects() {
    return (
      <div className={css.page}>
        <h2 className={css.header}>Projects</h2>
        <Row className={css.info}>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Row>
        <Row className={css.row}>
        <Col className={css.col}>
        <ProjectCard rightClick={"https://www.nashvilleshoewarehouse.com/blogs/fashion-trends-news/take-your-style-to-new-heights"} leftClick={"https://echelonfit.com/blogs/blog/walking-a-path-to-a-healthier-you"} leftButton={'Echelon'} rightButton={'Nashville shoe warehouse'} title={'Blog Work'} image={blog}/>
        </Col>
        <Col className={css.col}>
        <ProjectCard rightClick={"https://www.nashvilleshoewarehouse.com/collections/slippers/products/levis-harbin-mens-clog-slipper"} leftClick={"https://echelonfit.com/products/echelon-smart-connect-bike-ex5"} leftButton={'Echelon'} rightButton={'Nashville shoe warehouse'} title={'E-Commerce'} image={ecomm}/>
        </Col>
        <Col className={css.col}>
        <Card className={css.card}>
      <Card.Img className={css.picture} variant="top" src={ideation}/>
      <Card.Body>
      <Card.Title>"Ideation & Branding"</Card.Title>
      <Button className={css.button} variant="light" ><a href={"https://www.opry.com/opry-5000-landing-page/"}>Opry</a></Button>
      <Link to="/RokaPdf">
      <Button className={css.button} variant="primary">Roka</Button>
      </Link>
      </Card.Body>
      </Card>
        </Col>
        <Col className={css.col}>
        <ProjectCard rightClick={"https://industrialfans.hunterfan.com/pages/warehouse"} leftClick={"https://www.trevecca.edu/academics/program/physician-assistant"} leftButton={'Hunter'} rightButton={'Trevecca'} title={'Web Copy'} image={web}/>
        </Col>
        <Col className={css.col}>
        <Card className={css.card}>
      <Card.Img className={css.picture} variant="top" src={print} />
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