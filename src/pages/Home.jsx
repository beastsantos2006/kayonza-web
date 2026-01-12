import { Link } from "react-router-dom";

export default function Home() {
  const heroImg =
    "https://plus.unsplash.com/premium_photo-1677171381977-334fb9dc9a74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871";

  const featured = [
    {
      id: "p1",
      title: "Isoko Basket",
      price: "$15",
      img: "https://t3.ftcdn.net/jpg/03/62/00/70/360_F_362007056_iHlGVtYpY2b1Qa7ijeYYAFNm0WWT1o9a.webp",
    },
    {
      id: "p2",
      title: "Kayonza Coffee 500g",
      price: "$10",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p3",
      title: "Imigongo Art Panel",
      price: "$45",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "p4",
      title: "Sun-dried Maize 1kg",
      price: "$4",
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const stripImgs = [
    "https://images.pexels.com/photos/34284760/pexels-photo-34284760.jpeg",
    "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1200&auto=format&fit=crop",
    "https://images.pexels.com/photos/19421440/pexels-photo-19421440.jpeg",
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", color: "#e6e7eb", backgroundColor: "#0b0c0e" }}>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "60vh",
          minHeight: 340,
          borderBottom: "1px solid #242936",
          overflow: "hidden",
        }}
      >
        <img
          src={heroImg}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.8) saturate(1.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 10,
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", margin: 0 }}>RESPONSIVE APP</h1>
          <p style={{ color: "#a0a7b4", maxWidth: 600 }}>
            Authentic handcrafts and local foods from Rwanda’s Eastern Province — curated with care.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <Link
              to="/products"
              style={{
                padding: "10px 18px",
                background: "#3b82f6",
                color: "white",
                borderRadius: 8,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background .3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2563eb")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#3b82f6")}
            >
              Shop Now
            </Link>
            <Link
              to="/profile"
              style={{
                padding: "10px 18px",
                border: "1px solid #3b82f6",
                borderRadius: 8,
                color: "#3b82f6",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all .3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3b82f6";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#3b82f6";
              }}
            >
              Your Account
            </Link>
          </div>
        </div>
      </section>

      {/* Category Chips */}
      <section style={{ padding: "40px 20px", maxWidth: 1120, margin: "0 auto" }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Browse by Category</h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Handcraft", "Food", "Imigongo", "Baskets"].map((cat, i) => (
            <Link
              key={i}
              to={`/products?q=${cat.toLowerCase()}`}
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: 20,
                border: "1px solid #242936",
                background: "#161a20",
                color: "#e6e7eb",
                textDecoration: "none",
                transition: "transform .2s ease, border-color .2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#242936";
              }}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Grid */}
      <section style={{ padding: "0 20px 60px", maxWidth: 1120, margin: "0 auto" }}>
        <h2 style={{ fontSize: 22, marginBottom: 16 }}>Featured this week</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {featured.map((f, i) => (
            <Link
              key={i}
              to={`/products/${f.id}`}
              style={{
                display: "block",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid #242936",
                textDecoration: "none",
                background: "#111317",
                transition: "transform .2s ease, box-shadow .2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={f.img}
                alt={f.title}
                style={{ width: "100%", height: 160, objectFit: "cover" }}
              />
              <div style={{ padding: 14, display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ margin: 0, color: "#fff", fontSize: 16 }}>{f.title}</h3>
                <span style={{ fontWeight: 600, color: "#3b82f6" }}>{f.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Photo Strip */}
      <section
        style={{
          overflow: "hidden",
          borderTop: "1px solid #242936",
          borderBottom: "1px solid #242936",
          background: "#111317",
          padding: "12px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 12,
            width: "max-content",
            animation: "slide 30s linear infinite",
          }}
        >
          {[...stripImgs, ...stripImgs].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              style={{
                width: 220,
                height: 120,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          ))}
        </div>
      </section>

      {/* Inline keyframes */}
      <style>
        {`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}
      </style>
    </div>
  );
}
