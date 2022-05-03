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
      <h1>Jessy Anne-Scott | Copywriter & Marketing Specialist</h1>
      <h5>"What, Who, Where & How.</h5>
      <h5>Helping businesses all over the world share their stories & grow their potential. One word at a time."</h5>
      </Row>
      <Row>
        <Projects/>
      </Row>
      <Row className={styles.about}>
      </Row>
      <Row className={styles.brands} >
      <Brands/>
      </Row>
    </div>
  );
}

export default App;
