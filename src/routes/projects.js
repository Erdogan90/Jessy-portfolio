import { Link } from "react-router-dom"

function Projects() {
    return (
      <div style={{ padding: "1rem 0" }}>
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
        <h2>Projects</h2>
      </div>
    );
  }

  export default Projects