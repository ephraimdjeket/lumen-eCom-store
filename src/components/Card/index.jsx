import c from "./Card.module.css";

export default function Card({ title, price, image, rating }) {

  return (
    <article className={c.cardstyle}>
      <img className={c.image} src={image.url} alt={image.alt} />
      <h2>{title}</h2>
      <p>${price}</p>
      {rating ? <span> Rating: {rating}</span> : "No rating"}

      <a className={c.viewproduct}>View Product</a>
    </article >
  )
}