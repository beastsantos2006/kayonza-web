import { Link, useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = (searchParams.get("q") || "").toLowerCase();
  const category = searchParams.get("category") || "all";

  const PRODUCTS = [
    {
      id: "p1",
      name: "Isoko Basket",
      price: 15,
      category: "handcraft",
      img: "https://t3.ftcdn.net/jpg/03/62/00/70/360_F_362007056_iHlGVtYpY2b1Qa7ijeYYAFNm0WWT1o9a.webp",
    },
    {
      id: "p2",
      name: "Kayonza Coffee 500g",
      price: 10,
      category: "food",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p3",
      name: "Imigongo Art Panel",
      price: 45,
      category: "handcraft",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p4",
      name: "Sun-dried Maize 1kg",
      price: 4,
      category: "food",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p5",
      name: "Banana Fiber Tote",
      price: 25,
      category: "handcraft",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p6",
      name: "Rwandan Tea Pack",
      price: 8,
      category: "food",
      img: "https://images.pexels.com/photos/19421440/pexels-photo-19421440.jpeg",
    },
  ];

  const filtered = PRODUCTS.filter((p) => {
    const matchesQuery = p.name.toLowerCase().includes(q);
    const matchesCat = category === "all" ? true : p.category === category;
    return matchesQuery && matchesCat;
  });

  function updateSearchParam(key, value) {
    const params = new URLSearchParams(searchParams);
    if (!value || value === "all") params.delete(key);
    else params.set(key, value);
    setSearchParams(params);
  }

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        color: "#e6e7eb",
        backgroundColor: "#0b0c0e",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Title */}
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>Products</h1>
        <p style={{ color: "#a0a7b4", marginBottom: 24 }}>
          Explore authentic products crafted in Kayonza District.
        </p>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 28,
          }}
        >
          <input
            placeholder="Search products..."
            defaultValue={q}
            onChange={(e) => updateSearchParam("q", e.target.value)}
            style={{
              flex: "1 1 200px",
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid #242936",
              background: "#161a20",
              color: "#e6e7eb",
              outline: "none",
            }}
          />
          <select
            value={category}
            onChange={(e) => updateSearchParam("category", e.target.value)}
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid #242936",
              background: "#161a20",
              color: "#e6e7eb",
              outline: "none",
            }}
          >
            <option value="all">All categories</option>
            <option value="handcraft">Handcraft</option>
            <option value="food">Food</option>
          </select>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 20,
          }}
        >
          {filtered.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#111317",
                borderRadius: 12,
                border: "1px solid #242936",
                overflow: "hidden",
                transition: "transform .25s ease, box-shadow .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  padding: 14,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: 110,
                }}
              >
                <h3
                  style={{
                    margin: "0 0 6px",
                    color: "#fff",
                    fontSize: 16,
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ color: "#a0a7b4", fontSize: 14 }}>
                  Category: {p.category}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 6,
                  }}
                >
                  <span
                    style={{
                      color: "#3b82f6",
                      fontWeight: 700,
                      fontSize: 15,
                    }}
                  >
                    ${p.price}
                  </span>
                  <Link
                    to={`/products/${p.id}`}
                    style={{
                      padding: "6px 12px",
                      borderRadius: 8,
                      background: "#3b82f6",
                      color: "white",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "background .3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#2563eb")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#3b82f6")
                    }
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              color: "#a0a7b4",
              textAlign: "center",
              marginTop: 40,
            }}
          >
            No products match your search.
          </p>
        )}
      </div>
    </div>
  );
}
