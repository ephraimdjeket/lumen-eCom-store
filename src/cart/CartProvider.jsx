import { useReducer } from "react";
import { CartContext } from "./cartContext.js";

const initialState = { cart: [], total: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case "addProduct": {
      const existing = state.cart.find(p => p.id === action.payload.id);
      let updatedCart;
      if (existing) {
        updatedCart = state.cart.map(p =>
          p.id === action.payload.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      return {
        ...state,
        cart: updatedCart,
        total: updatedCart.reduce(
          (sum, p) => sum + p.discountedPrice * p.quantity,
          0
        ),
      };
    }

    case "removeProduct": {
      let updatedCart = state.cart
        .map(p =>
          p.id === action.payload.id
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        .filter(p => p.quantity > 0);
      return {
        ...state,
        cart: updatedCart,
        total: updatedCart.reduce(
          (sum, p) => sum + p.discountedPrice * p.quantity,
          0
        ),
      };
    }

    case "clearCart":
      return { cart: [], total: 0 };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
