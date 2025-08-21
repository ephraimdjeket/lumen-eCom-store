import c from "./Card.module.css";

export default function Card() {
  return (
    <article className={c.cardstyle}>
      {/* <img src="" alt="" /> */}
      <div className={c.imagedummy}></div>
      <h2>Product name</h2>
      <p>$999</p>
      <button className={c.button}>View Product</button>
    </article>
  )
}