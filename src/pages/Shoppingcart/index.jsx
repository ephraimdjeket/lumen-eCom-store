import { useState } from "react";
import s from "./Shoppingcart.module.css";
import { useCart } from "../../cart/useCart";

export default function ShoppingCart() {
  const { state, dispatch } = useCart();
  const [success, setSuccess] = useState(false);

  function handleProceed() {
    setSuccess(true);
    dispatch({ type: "clearCart" });
    setTimeout(() => setSuccess(false), 3000);
  }

  if (state.cart.length === 0 && !success) {
    return (
      <section className={s.cartwrapper}>
        <div className={s.cartcontainer}>
          <div className={s.cartcountwrapper}>
            <h2>Your cart (0)</h2>
            <p>Cart is empty</p></div>

        </div>
      </section>
    );
  }

  return (
    <section className={s.cartwrapper}>
      <div className={s.cartcontainer}>
        {success && (
          <div className={s.successMessage}>
            <h2>Checkout successful!👍 Returning back to cart...</h2>
          </div>
        )}

        {state.cart.map((item) => (
          <div className={s.cartitem} key={item.id}>
            <img src={item.image?.url || item.image} alt={item.title} />
            <div className={s.cartinfo}>
              <h2>{item.title}</h2>
              <span className={s.line}></span>
              <p>Price: ${item.discountedPrice.toFixed(2)}</p>

              <div className={s.quantitydisplay}>
                <button
                  className={s.quantitybutton}
                  onClick={() =>
                    dispatch({ type: "removeProduct", payload: item })
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className={s.quantitybutton}
                  onClick={() =>
                    dispatch({ type: "addProduct", payload: item })
                  }
                >
                  +
                </button>
              </div>

              <p>
                Subtotal: ${(item.discountedPrice * item.quantity).toFixed(2)}
              </p>
              <button
                className={s.removeproduct}
                onClick={() => {
                  for (let i = 0; i < item.quantity; i++) {
                    dispatch({ type: "removeProduct", payload: item });
                  }
                }}
              >
                Remove product
              </button>
            </div>
          </div>
        ))}

        {state.cart.length > 0 && (
          <div className={s.ordersummary}>
            <h2>Order Summary</h2>
            <span className={s.line}></span>
            <p>Cart total: ${state.total.toFixed(2)}</p>
            <div className={s.cartoptionbuttons}>
              <button className={s.proceedbtn} onClick={handleProceed}>
                Proceed to checkout
              </button>
              <button
                className={s.clearcartbtn}
                onClick={() => dispatch({ type: "clearCart" })}
              >
                Clear cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
