import styles from './styles/home.module.css'
import { Link } from "react-router-dom"
import { Row} from 'react-bootstrap';
import Brands from './components/Brands/index';
import Projects from '../src/components/Project-section/projects';



function App() {
  return (
    <div className={styles.page}>
    <Row className={styles.text}>
      <nav className={styles.nav}>
        <Link className={styles.link}to="/Home">Home</Link> 
        <Link className={styles.link} to="/Contact">Contact</Link>
      </nav>
      <h1 className={styles.header}>Jessy Anne-Scott | Copywriter & Marketing Specialist</h1>
      </Row>
      <Row>
      <h2 className={styles.title}>Who | What | Where</h2>
      <h5 className={styles.subtext}>Helping businesses all over the world share their stories & grow their potential.</h5>
      <h5 className={styles.line}> One word at a time.</h5>
      </Row>
      <Row className={styles.projects}>
        <Projects/>
      </Row>
      <Row className={styles.space}></Row>
      <Row className={styles.brands} >
      <Brands/>
      </Row>
    </div>
  );
}

export default App;
