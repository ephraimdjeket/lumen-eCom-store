import { useParams } from "react-router-dom";
import p from "./ProductDetail.module.css";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
      const json = await res.json();
      setProduct(json.data);
      console.log(product)
      setLoading(false)
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>
  if (!product) return <p>Product not found</p>



  return (
    <section className={p.productcontainer}>
      <section className={p.productwrapper}>
        <img src={product.image.url} alt="image placeholder" />
        <div className={p.productinfo}><h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className={p.rating}>Rating: {product.rating}</p>
          {product.price === product.discountedPrice ? (
            <div className={p.pricecontainer}>
              <h2 className={p.price}>${product.price}</h2>
            </div>
          ) : (
            <div className={p.pricescontainer}>
              <h2 className={p.price}> ${product.discountedPrice}</h2>
              <div className={p.pricecontainer}>
                <div className={p.realpricecontainer}>                <p className={p.realprice}>${product.price}</p>
                  <span>Save {(Math.round(product.price - product.discountedPrice / product.price) / 100)}%</span></div>

              </div>
            </div>
          )}

          <button className={p.addtocart}>Add to cart</button>
        </div>
      </section>
      <hr />
      <div className={p.reviewscontainer}>
        <h2>Reviews:</h2>
        <ul className={p.reviewlist}>{product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <li key={index}><span className={p.reviewusername}>{review.username}</span> - {review.description}</li>
          ))
        ) : (
          <li>None</li>
        )}</ul>
      </div>
    </section>
  )
}

