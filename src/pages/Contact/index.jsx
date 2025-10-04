import c from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={c.homeContainer}>
      <div className={c.contactForm}>
        <h1>Contact us</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={c.inputGroup}>          <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" />
          </div>
          <div className={c.inputGroup}>          <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" />
          </div>
          <div className={c.inputGroup}>          <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className={c.inputGroup}>          <label htmlFor="body">Body:</label>
            <textarea id="body" />
          </div>
          <input className={c.submitFormBtn} type="submit" />

        </form>
      </div>
    </section>
  )
}