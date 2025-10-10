import s from "./Shoppingcart.module.css";

export default function ShoppingCart() {
  return (
    <section className={s.cartwrapper}>
      <div className={s.cartcontainer}>
        <div className={s.cartitem}>
          <img src="https://blocks.astratic.com/img/general-img-landscape.png" alt="image placeholder" />
          <div className={s.cartinfo}>
            <h2>Item name</h2>
            <span className={s.line}></span>
            <p>Price: $434</p>
            <p>Discount price here</p>
            <div className={s.quantitydisplay}>
              <button className={s.quantitybutton}>-</button><span>1</span><button className={s.quantitybutton}>+</button>
            </div>
            <p>Subtotal:</p>
            <button className={s.removeproduct}>Remove product</button>
          </div>
          <div className={s.ordersummary}>
            <h2>Order Summary</h2>
            <span className={s.line}></span>
            <p>Cart total: $87</p>
            <div className={s.cartoptionbuttons}>
              <button className={s.proceedbtn}>Proceed to checkout</button>
              <button className={s.clearcartbtn}>Clear cart</button>
            </div>
          </div>
        </div>
        <div className={s.cartitem}>
          <img src="https://blocks.astratic.com/img/general-img-landscape.png" alt="image placeholder" />
          <div className={s.cartinfo}>
            <h2>Item name</h2>
            <span className={s.line}></span>
            <p>Price: $434</p>
            <p>Discount price here</p>
            <div className={s.quantitydisplay}>
              <button className={s.quantitybutton}>-</button><span>1</span><button className={s.quantitybutton}>+</button>
            </div>
            <p>Subtotal:</p>
            <button className={s.removeproduct}>Remove product</button>
          </div>
          <div className={s.ordersummary}>
            <h2>Order Summary</h2>
            <span className={s.line}></span>
            <p>Cart total: $87</p>
            <div className={s.cartoptionbuttons}>
              <button className={s.proceedbtn}>Proceed to checkout</button>
              <button className={s.clearcartbtn}>Clear cart</button>
            </div>
          </div>
        </div>
        <div className={s.cartitem}>
          <img src="https://blocks.astratic.com/img/general-img-landscape.png" alt="image placeholder" />
          <div className={s.cartinfo}>
            <h2>Item name</h2>
            <span className={s.line}></span>
            <p>Price: $434</p>
            <p>Discount price here</p>
            <div className={s.quantitydisplay}>
              <button className={s.quantitybutton}>-</button><span>1</span><button className={s.quantitybutton}>+</button>
            </div>
            <p>Subtotal:</p>
            <button className={s.removeproduct}>Remove product</button>
          </div>
          <div className={s.ordersummary}>
            <h2>Order Summary</h2>
            <span className={s.line}></span>
            <p>Cart total: $87</p>
            <div className={s.cartoptionbuttons}>
              <button className={s.proceedbtn}>Proceed to checkout</button>
              <button className={s.clearcartbtn}>Clear cart</button>
            </div>
          </div>
        </div>
        <div className={s.cartitem}>
          <img src="https://blocks.astratic.com/img/general-img-landscape.png" alt="image placeholder" />
          <div className={s.cartinfo}>
            <h2>Item name</h2>
            <span className={s.line}></span>
            <p>Price: $434</p>
            <p>Discount price here</p>
            <div className={s.quantitydisplay}>
              <button className={s.quantitybutton}>-</button><span>1</span><button className={s.quantitybutton}>+</button>
            </div>
            <p>Subtotal:</p>
            <button className={s.removeproduct}>Remove product</button>
          </div>
          <div className={s.ordersummary}>
            <h2>Order Summary</h2>
            <span className={s.line}></span>
            <p>Cart total: $87</p>
            <div className={s.cartoptionbuttons}>
              <button className={s.proceedbtn}>Proceed to checkout</button>
              <button className={s.clearcartbtn}>Clear cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.cartbuttonwrapper}>
        <div className={s.cartbuttons}>
          <button>Continue to shop</button>
        </div>
      </div>
    </section>

  )
}