import styles from './styles/home.module.css'
import { Link } from "react-router-dom"
import { Row, Col } from 'react-bootstrap';
import Brands from './components';


function App() {
  return (
    <div className={styles.page}>
    <Row>
    <Col className={styles.nav}>
      <nav>
        <Link className={styles.link}to="/Home">Home</Link> |{" "}
        <Link className={styles.link} to="/Projects">Projects</Link> |{" "}
        <Link className={styles.link} to="/Contact">Contact</Link>
      </nav>
      </Col>
      </Row>
      <Row className={styles.main}>
      <Col className={styles.message}>
      <h3>"What, Who, Where & How.</h3>
      <h4>Helping businesses all over the world share their stories & grow their potential. One word at a time."</h4>
      </Col>
      </Row>
      <Row classname={styles.logo}>
      <Brands/>
      </Row>
    </div>
  );
}

export default App;
