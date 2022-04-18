import styles from './styles/home.module.css'
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <Link to="/Home">Home</Link> |{" "}
        <Link to="/Projects">Projects</Link> |{" "}
        <Link to="/Contact">Contact</Link>
      </nav>
      <Outlet/>
      <h1 className={styles.header}>Hello Jessy</h1>
    </div>
  );
}

export default App;
