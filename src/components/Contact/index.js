import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { Button, Form } from "react-bootstrap";
import css from "../../styles/form.module.css"


const Result =()=>{
  return (
    <h6 >Your message has been successfully sent</h6>
  )
}

function ContactForm(){
  const [result, showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7zgqr5h', 'contact_form.', e.target, 'byBP9w7D6hoAcOe1m')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      showResult(true)
  };

  setTimeout(()=>{
    showResult(false)
  }, 3000)

    return (
      <form action="" onSubmit={sendEmail}>
            <div className={css.fullForm}>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" name="fullName" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="Contact Number" name="phone" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter your message" name="message" />
            </Form.Group>
            </div>
            <Button type="submit" className={css.button}>
              Submit
            </Button>
        <div className={css.message}>
          {result ? <Result/> : null}
        </div>
        </form>
      );
}

export default ContactForm