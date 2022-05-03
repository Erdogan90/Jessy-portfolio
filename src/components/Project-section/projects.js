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
        <h1 className={css.header}>Work</h1>
        <Row className={css.info}>
        <h4>Here's a small sampling of some past projects.</h4>
        <h4>Take a closer look</h4>
        </Row>
        <Row className={css.row}>
        <Col className={css.col}>
        <ProjectCard rightClick={"https://www.nashvilleshoewarehouse.com/blogs/fashion-trends-news/take-your-style-to-new-heights"} leftClick={"https://echelonfit.com/blogs/blog/walking-a-path-to-a-healthier-you"} leftButton={'Echelon'} rightButton={'Genesco Inc.'} title={'Blog Work'} image={blog}/>
        </Col>
        <Col className={css.col}>
        <ProjectCard rightClick={"https://www.nashvilleshoewarehouse.com/collections/slippers/products/levis-harbin-mens-clog-slipper"} leftClick={"https://echelonfit.com/products/echelon-smart-connect-bike-ex5"} leftButton={'Echelon'} rightButton={'Genesco Inc.'} title={'E-Commerce'} image={ecomm}/>
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