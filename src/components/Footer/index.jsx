import f from "./Footer.module.css";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className={f.footer}>
      <div className={f.footerContent}>
        <ul className={f.list}>
          <li><a href="#">Terms of Services</a></li>
          <li><a href="#"><SiFacebook size={20} /></a></li>
          <li><a href="#"><SiInstagram size={20} /></a></li>
          <li><a href="#"><SiX size={20} /></a></li>

        </ul>
        <p>© 2025 Ephraim Djeket</p>
      </div>
    </footer>
  )
}