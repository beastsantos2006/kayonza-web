import { useOutletContext } from "react-router-dom";
import { REVIEWS } from "../data/reviews";

export default function ProductReviews() {
  const { product } = useOutletContext();
  const reviews = REVIEWS[product.id] ?? [];

  if (reviews.length === 0)
    return <p className="empty">No reviews yet for this product.</p>;

  return (
    <ul className="grid">
      {reviews.map((r) => (
        <li key={r.id} className="card">
          <div className="card-body">
            <h3 className="card-title">
              {r.author} — {Array.from({ length: r.rating }).map(() => "★").join("")}
            </h3>
            <div className="muted">{r.text}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
