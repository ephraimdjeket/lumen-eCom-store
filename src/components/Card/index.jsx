import c from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ title, price, discountedPrice, image, rating, id }) {

  return (
    <article className={c.cardstyle}>
      <img className={c.image} src={image.url} alt={image.alt} />
      <h2>{title}</h2>
      {price === discountedPrice ? (
        <div className={c.pricecontainer}>
          <h2 className={c.price}>${price}</h2>
        </div>
      ) : (
        <div className={c.pricescontainer}>
          <h3 className={c.price}> ${discountedPrice}</h3>
          <div className={c.pricecontainer}>
            <div className={c.realpricecontainer}>
              <p className={c.realprice}>${price}</p>
              <span>Save {(Math.round(price - discountedPrice / price) / 100)}%</span></div>

          </div>
        </div>
      )}
      {rating ? <span> Rating: {rating}</span> : "No rating"}

      <Link to={`/productdetail/${id}`} className={c.viewproduct}>View Product</Link>
    </article >
  )
}