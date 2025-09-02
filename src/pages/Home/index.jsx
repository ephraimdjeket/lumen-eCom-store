import h from "./Home.module.css";
import Card from "../../components/Card";
import { useState, useEffect } from "react";


export default function Home() {
  const url = "https://v2.api.noroff.dev/online-shop";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function productData() {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      const { data } = await res.json();
      setProducts(data);
    }
    productData();
  }, [])


  return (
    <>
      <section className={h.homeContainer}>
        <div className={h.herocard}>
          <div className={h.herocontent}>
            <div>
              <h2>Find your next favorite product</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis sapiente, itaque cum officia veritatis atque</p></div>
            <input aria-label="search input" className={h.searchinput} id="search" type="search" placeholder="Search products by title..." />
            <a href="#products" className={`${h.button} ${h.browseall}`}> Browse all</a>
          </div>
        </div>
        <section className={h.cardswrapper} id="products">
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </section>
      </section >
    </>
  )
}