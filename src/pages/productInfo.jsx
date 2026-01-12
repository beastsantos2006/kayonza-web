import { useOutletContext } from "react-router-dom";

export default function ProductInfo() {
  const { product } = useOutletContext();
  return (
    <div className="card" style={{ padding: 16 }}>
      <div className="card-body">
        <h3 className="card-title">About this item</h3>
        <p className="muted">
          {product.name} is sourced from local producers in Kayonza. Hand-checked for quality.
        </p>
      </div>
    </div>
  );
}
