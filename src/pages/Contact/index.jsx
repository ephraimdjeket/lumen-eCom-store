import c from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");



  function onTextInputChange(e) {
    const { name, value } = e.target;

    if ("fullName" === name) {
      setFullName(value);
    } if ("subject" === name) {
      setSubject(value);
    } if ("email" === name) {
      setEmail(value);
    } if ("userMessage" === name) {
      setUserMessage(value);
    }

    const body = {
      fullName,
      subject,
      email,
      userMessage,
    }
    console.log(body)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className={c.homeContainer}>
      <div className={c.contactForm}>
        <h1>Contact us</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={c.inputGroup}>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={onTextInputChange}
              required />
          </div>
          <div className={c.inputGroup}>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={onTextInputChange}
              required />
          </div>
          <div className={c.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onTextInputChange}
              required />
          </div>
          <div className={c.inputGroup}>
            <label htmlFor="body">Body:</label>
            <textarea
              name="userMessage"
              value={userMessage}
              onChange={onTextInputChange}
              required />
          </div>
          <input className={c.submitFormBtn} type="submit" />

        </form>
      </div>
    </section>
  )
}