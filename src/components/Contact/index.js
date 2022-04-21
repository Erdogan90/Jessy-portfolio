import React from "react";
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function ContactForm(){
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Contact Form', 'contact_form.', form.current, 'byBP9w7D6hoAcOe1m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div class="container">
          <div class="row">
            <div class="col align-self-center">
              <h1 class="text-center">Contact me for help on your project</h1>
              {/* <!-- contact form --> */}
              <form ref={form} onSubmit={sendEmail}>
                {/* <!-- name --> */}
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="name"
                    name="name"
                    class="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
    
                {/* <!-- email --> */}
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
    
                {/* <!-- subject --> */}
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    class="form-control"
                    id="subject"
                    placeholder="Enter email subject"
                  />
                </div>
    
                <div class="form-group">
                  <label for="email_body">Message</label>
                  <textarea
                    class="form-control"
                    id="email_body"
                    rows="5"
                  ></textarea>
                </div>
    
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default ContactForm