import React, { useState } from "react";
import emailjs from 'emailjs-com';


const Result =()=>{
  return (
    <h6>Your message has been successfully sent</h6>
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
      <div className="formWord">
      <h2>Say Hello!</h2>
      <span>Full Name</span>
      <br />
      <input className="input10e" type="text" name="fullName" required />
      <br />
      <span>Phone Number</span>
      <br />
      <input className="input100" type="text" name="phone" required />
      <br />
      <span>Email</span>
      <br />
      <input className="input10e" type="text" name="email" required />
      <br />
      </div>
      <div className="formword">
      <span>Message</span>
        <br/>
        <textarea name="message" required></textarea>
        <br/>
        <button>SUBMIT</button>
        <div className="row">
          {result ? <Result/> : null}
        </div>
        </div>
        </form>
      );
}

export default ContactForm