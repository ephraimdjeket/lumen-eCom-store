import s from "./ShoppingCart.module.css";

export default function ShoppingCart() {
  return (
    <section className={s.cartwrapper}>
      <div className={s.cartcontainer}>

        <div className={s.cartitem}>
          <img src="https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg" alt="potato" />
          <div className={s.cartinfo}>
            <h2>Item name</h2>
            <span className={s.line}></span>
            <p>Price: $434</p>
            <p>Discount price here</p>
            <div className={s.quantitydisplay}>
              <button className={s.quantitybutton}>-</button><span>1</span><button className={s.quantitybutton}>+</button>
            </div>
            <p>Subtotal:</p>
          </div>
        </div>
        <div className={s.ordersummary}>
          <h2>Order Summary</h2>
          <p>Cart total: $87</p>
        </div>
      </div>
      <div className={s.cartbuttons}><button>Continue to shop</button>       <button>Proceed to checkout</button></div>
    </section>

  )
}