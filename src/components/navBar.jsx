import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function NavBar() {
  const { count } = useCart();

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: 6,
    background: isActive ? "var(--brand-hover)" : "transparent",
    color: isActive ? "#fff" : "var(--text)",
    fontWeight: 500,
  });

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 20px",
        borderBottom: "1px solid var(--border)",
        background: "var(--panel)",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 18 }}>res</div>
      <nav style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <NavLink to="/" end style={linkStyle}>Home</NavLink>
        <NavLink to="/products" style={linkStyle}>Products</NavLink>
        <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
        <NavLink to="/cart" style={linkStyle}>
          Cart
          <span
            style={{
              marginLeft: 6,
              padding: "2px 8px",
              borderRadius: 999,
              background: "var(--brand)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {count}
          </span>
        </NavLink>
      </nav>
    </header>
  );
}
