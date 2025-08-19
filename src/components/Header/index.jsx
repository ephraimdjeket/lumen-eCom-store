import { ShoppingCart } from "lucide-react";
import classes from "./Header.module.css"

export default function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>Lumen</div>
        <ul>
          <li>Home</li>
          <li>Contact</li>
        </ul>
        <ShoppingCart aria-hidden="true" size={20} />
      </nav>
    </header>
  )
}