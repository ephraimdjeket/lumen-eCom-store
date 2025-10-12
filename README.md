## Lumen eCom Store
This is a school project that was built to apply knowledge of React by creating a simple eCommerce store.

# Features

### Homepage:
- Displays a list of all products from Noroff Online Shop API
- Search bar with look-ahead filtering to find products quickly.
- Each product card links to a detailed product page.

### Product page:
- Shows single product details (title, description, image, rating, and reviews).
- Displays discounted price and calculated savings if available.
- “Add to Cart” button adds the product to the cart.

### Cart page:
- Lists products added to the cart with quantities, subtotals, and total price.
- Allows increasing, decreasing, or removing products.
- “Proceed to Checkout” button navigates to checkout success.

### Checkout Success Page
- Displays a confirmation message when checkout is complete.
- Clears the cart and provides a link back to the store.

### Contact Page
- Contains a contact form with validation:
- Full name (min 3 characters, required)
- Subject (min 3 characters, required)
- Email (valid email format, required)
- Message body (min 3 characters, required)
- Logs form data to the console upon successful submission.

### Layout
- Header with navigation and cart icon showing current item count.
- Footer included on all pages.
- Responsive design using CSS Modules.

## Tech Stack
- React (with React Router for routing)
- CSS Modules for styling
- useReducer + Context API for cart state management
- Netlify for deployment

## Getting Started

Clone the repository
```
git clone https://github.com/your-username/lumen-ecom-store.git
cd lumen-ecom-store
```

Install dependencies
```
npm install
```

Run locally
```
npm run dev
```

Build for production
```
npm run build
```
## API Reference

Base URL:
```
https://v2.api.noroff.dev/online-shop
```

Single product:
```
https://v2.api.noroff.dev/online-shop/:id
```
