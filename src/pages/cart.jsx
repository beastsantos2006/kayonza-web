import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { items, total, add, removeOne, deleteItem, clear } = useCart();

  return (
    <section className="container">
      <h1 className="page-title">Your Cart</h1>
      {items.length === 0 ? (
        <p className="empty">
          Your cart is empty. <Link to="/products" className="btn">Browse products</Link>
        </p>
      ) : (
        <>
          <ul className="grid">
            {items.map((it) => (
              <li key={it.id} className="card">
                <div className="card-body">
                  <h3 className="card-title">{it.name}</h3>
                  <p className="muted">${it.price} each</p>
                </div>
                <div className="card-footer">
                  <div>Qty: {it.qty}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button className="btn" onClick={() => removeOne(it.id)}>-</button>
                    <button className="btn" onClick={() => add(it)}>+</button>
                    <button className="btn" onClick={() => deleteItem(it.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
            <button className="btn" onClick={clear}>Clear Cart</button>
            <div className="price">Total: ${total.toFixed(2)}</div>
          </div>
        </>
      )}
    </section>
  );
}
