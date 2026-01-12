import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/cartContext.jsx";

import NavBar from "./components/navBar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/productDetail.jsx";
import ProductInfo from "./pages/productInfo.jsx";
import ProductReviews from "./pages/productReviews.jsx";
import Cart from "./pages/cart.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />}>
          <Route index element={<ProductInfo />} />
          <Route path="reviews" element={<ProductReviews />} />
        </Route>
        <Route path="shop" element={<Navigate to="/products" replace />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Footer */}
<footer
  style={{
    background: "#111317",
    borderTop: "1px solid #242936",
    marginTop: 40,
    padding: "20px 16px",
    textAlign: "center",
    color: "#a0a7b4",
    fontFamily: "system-ui, sans-serif",
    fontSize: 14,
  }}
>
  <p style={{ margin: 0 }}>
    © {new Date().getFullYear()} — Developed by{" "}
    <span
      style={{
        color: "#3b82f6",
        fontWeight: 600,
      }}
    >
      UGUKUNDA SUGIRA SANTOS
    </span>{" "}
    🔥 | All rights reserved.
  </p>
</footer>

    </CartProvider>
  );
}
