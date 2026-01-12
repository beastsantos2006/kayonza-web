import { NavLink, Outlet, useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { add } = useCart();

  if (!product)
    return (
      <section className="container">
        <h1 className="page-title">Product not found</h1>
        <Link to="/products" className="btn btn-primary">Back</Link>
      </section>
    );

  return (
    <section className="container">
      <h1 className="page-title">{product.name}</h1>
      <p className="page-subtitle">
        Category: {product.category} • ${product.price}
      </p>
      <button
        className="btn btn-primary"
        onClick={() => add(product)}
        style={{ marginBottom: 16 }}
      >
        Add to Cart
      </button>
      <nav className="toolbar">
        <NavLink to="." end className="btn">Details</NavLink>
        <NavLink to="reviews" className="btn">Reviews</NavLink>
      </nav>
      <Outlet context={{ product }} />
    </section>
  );
}
