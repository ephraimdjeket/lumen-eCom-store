import h from "./Home.module.css";
import Card from "../../components/Card";


export default function Home() {
  return (
    <>
      <section className={h.homeContainer}>
        <div className={h.herocard}>
          <div className={h.herocontent}>
            <div>
              <h2>Find your next favorite product</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis sapiente, itaque cum officia veritatis atque</p></div>
            <input aria-label="search input" className={h.searchinput} id="search" type="search" placeholder="Search products by title..." />
            <a href="#products" class={`${h.button} ${h.browseall}`}> Browse all</a>
          </div>
        </div>
        <section className={h.cardswrapper} id="products">
          < Card />
          < Card />
          < Card />
          < Card />
          < Card />
          < Card />
        </section>
      </section >
    </>
  )
}