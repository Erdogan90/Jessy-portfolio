import { Link } from "react-router-dom"
import ContactForm from "../components/Contact";
import css from "../styles/contact.module.css"
import emailjs from 'emailjs-com';

function Contact() {
    return (
<div className={css.page}>
            <nav className={css.nav}>
        <Link className={css.link} to="/Home">Home</Link> |{" "}
        <Link className={css.link} to="/Projects">Projects</Link> |{" "}
        <Link className={css.link} to="/Contact">Contact</Link>
      </nav>
        <h2>Contact</h2>
        <ContactForm/>
      </div>
    );
  }

  export default Contact