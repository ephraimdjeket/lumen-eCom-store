import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/utils/Layout";
import NotFound from "./components/utils/NotFound";
import ShoppingCart from "./pages/Shoppingcart";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={< Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  )
}

