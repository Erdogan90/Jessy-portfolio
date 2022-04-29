import styles from './styles/home.module.css'
import { Link } from "react-router-dom"
import { Row} from 'react-bootstrap';
import Brands from './components/Brands/index';




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
      <Row className={styles.about}>
      <p className={styles.message}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </Row>
      <Row className={styles.brands} >
      <Brands/>
      </Row>
    </div>
  );
}

export default App;
