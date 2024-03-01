import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './ContactUs.css'
import '../App.css'

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6mu3upo", "template_hchiygb", form.current, {
        publicKey: "fqkxYUc2fsZ3IkcDM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message Sent!")
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact-page">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUs;
