import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Terms of Services</li>
        </ul>
        <p>(c) 2025 Ephraim Djeket
        </p>
      </div>
    </footer>
  )
}