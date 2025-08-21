import { ShoppingCart } from "lucide-react";
import classes from "./Header.module.css"

export default function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}><h1>Lumen</h1></div>
        <ul className={classes.list}>
          <li>Home</li>
          <li>Contact</li>
          <li><ShoppingCart aria-hidden="true" size={20} /></li>
        </ul>
      </nav>
    </header>
  )
}