import styles from './styles/home.module.css'
import { Link } from "react-router-dom"
import { Row} from 'react-bootstrap';
import Brands from './components/Brands/index';
import Projects from './routes/projects';



function App() {
  return (
    <div className={styles.page}>
    <Row className={styles.text}>
      <nav className={styles.nav}>
        <Link className={styles.link}to="/Home">Home</Link> 
        <Link className={styles.link} to="/Projects">Projects</Link> 
        <Link className={styles.link} to="/Contact">Contact</Link>
      </nav>
      <h3>"What, Who, Where & How.</h3>
      <h4>Helping businesses all over the world share their stories & grow their potential. One word at a time."</h4>
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
