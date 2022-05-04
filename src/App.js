import styles from './styles/home.module.css'
import { Link } from "react-router-dom"
import { Row} from 'react-bootstrap';
import Brands from './components/Brands/index';
import Projects from '../src/components/Project-section/projects';
import ContactForm from './components/Contact';



function App() {
  return (
    <div className={styles.page}>
    <Row className={styles.text}>
      <h1 className={styles.header}>Jessy Anne Scott | Copywriter & Marketing Specialist</h1>
      </Row>
      <Row>
      <h2 className={styles.title}>Who | What | Where</h2>
      <h4 className={styles.subtext}>Helping businesses all over the world share their stories & grow their potential.</h4>
      <h4 className={styles.line}> One word at a time.</h4>
      </Row>
      <Row className={styles.projects}>
        <Projects/>
      </Row>
      <Row className={styles.space}></Row>
      <Row className={styles.brands} >
      <Brands/>
      </Row>
      <Row className={styles.contact}>
      <h1 className={styles.title}>Contact</h1>
      <h4 className={styles.subtext}>From copywriting to campaigns, lets talk about what I can do for you.</h4>
      <h4 className={styles.subtext}> Drop me a note.</h4>
      </Row>
      <Row className={styles.form}>
      <ContactForm/>
      </Row>
      <Row className={styles.footer}>

      </Row>
    </div>
  );
}

export default App;
