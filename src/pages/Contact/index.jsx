import c from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const [errors, setErrors] = useState({});

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
  }


  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!fullName.trim() || fullName.length < 3) {
      newErrors.fullName = "Minimum number of characters is 3, required";
    }
    if (!subject.trim() || subject.length < 3) {
      newErrors.subject = "Minimum number of characters is 3, required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!userMessage.trim() || userMessage.length < 3) {
      newErrors.userMessage = "Minimum number of characters is 3, required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const body = { fullName, subject, email, userMessage };
      console.log(body);
    }
  }

  return (
    <section className={c.homeContainer}>
      <div className={c.contactForm}>
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit}>
          <div className={c.inputGroup}>
            <label htmlFor="fullName">Full Name:</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={fullName}
              onChange={onTextInputChange}
              required
            />
            {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
          </div>
          <div className={c.inputGroup}>
            <label htmlFor="subject">Subject:</label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={subject}
              onChange={onTextInputChange}
              required
            />
            {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
          </div>
          <div className={c.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={onTextInputChange}
              required
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div className={c.inputGroup}>
            <label htmlFor="userMessage">Body:</label>
            <textarea
              id="userMessage"
              name="userMessage"
              value={userMessage}
              onChange={onTextInputChange}
              required
            />
            {errors.userMessage && <p style={{ color: "red" }}>{errors.userMessage}</p>}
          </div>
          <input className={c.submitFormBtn} type="submit" value="send" />
        </form>
      </div>
    </section>
  )
}