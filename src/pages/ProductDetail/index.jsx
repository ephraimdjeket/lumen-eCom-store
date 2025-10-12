import { useParams } from "react-router-dom";
import p from "./ProductDetail.module.css";
import { useEffect, useState } from "react";
import { useCart } from "../../cart/useCart.js";

export default function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        const json = await res.json();
        setProduct(json.data);
      } catch (error) {
        setError(true);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <div className="loaderwrapper"><span className="loader"></span></div>;
  if (error) return <h1 className="errormessage">{error}</h1>;

  function addToCart() {
    dispatch({ type: "addProduct", payload: product });
  }

  return (
    <section className={p.productcontainer}>
      <section className={p.productwrapper}>
        <img src={product.image.url} alt={product.image.alt || product.title} />
        <div className={p.productinfo}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className={p.rating}>Rating: {product.rating}</p>

          {product.price === product.discountedPrice ? (
            <div className={p.pricecontainer}>
              <h2 className={p.price}>${product.price}</h2>
            </div>
          ) : (
            <div className={p.pricescontainer}>
              <h2 className={p.price}>${product.discountedPrice}</h2>
              <div className={p.pricecontainer}>
                <div className={p.realpricecontainer}>
                  <p className={p.realprice}>${product.price}</p>
                  <span>
                    Save{" "}
                    {Math.round(
                      ((product.price - product.discountedPrice) /
                        product.price) *
                      100
                    )}
                    %
                  </span>
                </div>
              </div>
            </div>
          )}

          <button className={p.addtocart} onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </section>

      <hr />
      <div className={p.reviewscontainer}>
        <h2>Reviews:</h2>
        <ul className={p.reviewlist}>
          {product.reviews?.length ? (
            product.reviews.map((r, i) => (
              <li key={i}>
                <span className={p.reviewusername}>{r.username}</span> -{" "}
                {r.description}
              </li>
            ))
          ) : (
            <li>None</li>
          )}
        </ul>
      </div>
    </section>
  );
}
