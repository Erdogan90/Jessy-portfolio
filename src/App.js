import './App.css';
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Home">Home</Link> |{" "}
        <Link to="/Projects">Projects</Link> |{" "}
        <Link to="/Contact">Contact</Link>
      </nav>
      <Outlet/>
      <h1>Hello Jessy</h1>
    </div>
  );
}

export default App;
