import h from "./Home.module.css";
import Card from "../../components/Card";
import { useState, useEffect } from "react";



export default function Home() {
  const url = "https://v2.api.noroff.dev/online-shop";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function productData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");
        const { data } = await res.json();
        setProducts(data);
      } catch (error) {
        setError(true);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    productData();
  }, [url]);

  if (loading) return <div className="loaderwrapper"><span className="loader"></span></div>;
  if (error) return <h1 className="errormessage">{error}</h1>;

  function searchFilter(e) {
    setSearch(e.target.value);
  }

  const filterProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <>
      <section className={h.homeContainer}>
        <div className={h.herocard}>
          <div className={h.herocontent}>
            <div>
              <h2>Find your next favorite product</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facilis sapiente, itaque cum officia veritatis atque</p></div>
            <input onChange={searchFilter} aria-label="search input" className={h.searchinput} id="search" type="search" placeholder="Search products by title..." />
            <a href="#products" className={`${h.button} ${h.browseall}`}> Browse all</a>
          </div>
        </div>
        <section className={h.cardswrapper} id="products">
          {filterProducts.length > 0 ? (
            filterProducts.map((product) => (
              <Card key={product.id} {...product} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </section>
      </section >
    </>
  )
}