import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
const FormStyles = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ValidateEmail = async (event) => {
    const mailFormat = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (event.target.email.value.match(mailFormat)) {
      event.preventDefault();
      await emailjs
        .sendForm(
          "service_e379dnj",
          "template_6926olj",
          event.target,
          "j4GTw-_jiVibFsbOj"
        )
        .then((res) => {
          console.log(res);
          alert("Form submitted");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => console.log(err));

      return true;
    } else {
      alert("You have entered an invalid email address!");
      event.preventDefault();
      return false;
    }
  };

  return (
    <div>
      <FormStyles>
        <form onSubmit={ValidateEmail}>
          <div className="form-group">
            <label htmlFor="name ">
              Your name
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value.toLowerCase())}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email ">
              Your email
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message ">
              Your message
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      </FormStyles>
    </div>
  );
}
