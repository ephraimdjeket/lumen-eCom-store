export const initialState = { cart: [], total: 0 };

export function reducer(state, action) {
  let productIndex;
  let cart = [...state.cart];
  let newTotal;

  switch (action.type) {
    case "addProduct": {
      productIndex = cart.findIndex(p => p.id === action.payload.id);

      if (productIndex === -1) {
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }

      newTotal = cart.reduce((sum, p) => sum + p.discountedPrice * p.quantity, 0);
      return { ...state, cart, total: newTotal };
    }

    case "removeProduct": {
      productIndex = cart.findIndex(p => p.id === action.payload.id);
      if (productIndex !== -1) {
        const q = cart[productIndex].quantity;
        if (q > 1) {
          cart = [
            ...cart.slice(0, productIndex),
            { ...cart[productIndex], quantity: q - 1 },
            ...cart.slice(productIndex + 1),
          ];
        } else {
          cart = [...cart.slice(0, productIndex), ...cart.slice(productIndex + 1)];
        }
      }

      newTotal = cart.reduce((sum, p) => sum + p.discountedPrice * p.quantity, 0);
      return { ...state, cart, total: newTotal };
    }

    case "clearCart":
      return { cart: [], total: 0 };

    default:
      return state;
  }
}
