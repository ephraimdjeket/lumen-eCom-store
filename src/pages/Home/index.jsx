import h from "./Home.module.css";

export default function Home() {
  return (
    <>
      <section className={h.homeContainer}>
        <div className={h.herocard}>
          <div className={h.herocontent}>
            <div>
              <h2>Find your next favorite product</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis sapiente, itaque cum officia veritatis atque voluptatibus repellendus in quas reprehenderit laudantium exercitationem quo omnis quasi expedita illum soluta tenetur.</p></div>
          </div>
          <a href="#products"> Browse all</a>
        </div>
        <article className={`${h.card} ${h.firstcard}`}>
          {/* <img src="" alt="" /> */}
          <div className={h.imagedummy}></div>
          <h2>Product name</h2>
          <p>$999</p>
          <button className={h.button}>View Product</button>
        </article>
        <article className={`${h.card} ${h.secondcard}`}>
          {/* <img src="" alt="" /> */}
          <div className={h.imagedummy}></div>
          <h2>Product name</h2>
          <p>$999</p>
          <button className={h.button}>View Product</button>
        </article>
        <article className={`${h.card} ${h.thirdcard}`}>
          {/* <img src="" alt="" /> */}
          <div className={h.imagedummy}></div>
          <h2>Product name</h2>
          <p>$999</p>
          <button className={h.button}>View Product</button>
        </article>
        <section className={h.products} id="products">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </section >
    </>
  )
}