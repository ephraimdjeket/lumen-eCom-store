import { useReducer } from "react";
import { CartContext } from "./cartContext.js";

const initialState = { cart: [], total: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case "addProduct": {
      const existing = state.cart.find(p => p.id === action.payload.id);
      const cart = existing
        ? state.cart.map(p =>
          p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
        )
        : [...state.cart, { ...action.payload, quantity: 1 }];

      const total = cart.reduce((sum, p) => sum + p.discountedPrice * p.quantity, 0);
      return { ...state, cart, total };
    }
    case "removeProduct": {
      const cart = state.cart
        .map(p => (p.id === action.payload.id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter(p => p.quantity > 0);

      const total = cart.reduce((sum, p) => sum + p.discountedPrice * p.quantity, 0);
      return { ...state, cart, total };
    }
    case "clearCart":
      return { cart: [], total: 0 };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}
