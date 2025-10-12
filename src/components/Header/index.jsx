import { ShoppingCart } from "lucide-react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../cart/useCart";

export default function Header() {
  const { state } = useCart();

  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link to="/" className={classes.logo}><h1>Lumen</h1></Link>
        <ul className={classes.list}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/cart" className={classes.cartamount}>
              <ShoppingCart aria-hidden="true" size={20} />
              <span>{count}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
