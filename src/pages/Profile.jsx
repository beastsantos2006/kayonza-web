import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        color: "#e6e7eb",
        backgroundColor: "#0b0c0e",
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 680,
          background: "#111317",
          border: "1px solid #242936",
          borderRadius: 12,
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          padding: 32,
          animation: "fadeIn 0.6s ease",
        }}
      >
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: 30 }}>
          <img
            src="https://i.pinimg.com/736x/a5/73/43/a5734393d19c35718f164085c8a0ed81.jpg"
            alt="Profile avatar"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: 16,
              border: "3px solid #3b82f6",
            }}
          />
          <h1 style={{ fontSize: 26, margin: 0 }}>Your Profile</h1>
          <p style={{ color: "#a0a7b4", fontSize: 14 }}>
            Welcome back, valued customer of ABC Kayonza.
          </p>
        </header>

        {/* Info cards */}
        <div
          style={{
            display: "grid",
            gap: 20,
            marginBottom: 30,
          }}
        >
          <InfoCard label="Full Name" value="UGUKKUNDA SUGIRA Santos" />
          <InfoCard label="Email" value="beastsantos2006@gmail.com" />
          <InfoCard label="Location" value="Kayonza District, Rwanda" />
          <InfoCard label="Member Since" value="March 2023" />
        </div>

        {/* Orders summary */}
        <section
          style={{
            marginBottom: 30,
            background: "#161a20",
            borderRadius: 10,
            padding: 16,
            border: "1px solid #242936",
          }}
        >
          <h2 style={{ fontSize: 18, marginBottom: 10 }}>Recent Orders</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { id: "A2105", item: "Isoko Basket", date: "Oct 10 2025", price: "$15" },
              { id: "A2104", item: "Kayonza Coffee 500g", date: "Sep 30 2025", price: "$10" },
              { id: "A2103", item: "Imigongo Art Panel", date: "Sep 22 2025", price: "$45" },
            ].map((o, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: i < 2 ? "1px solid #242936" : "none",
                  padding: "8px 0",
                }}
              >
                <span>{o.item}</span>
                <span style={{ color: "#3b82f6", fontWeight: 600 }}>
                  {o.price}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button
            style={{
              padding: "10px 18px",
              border: "1px solid #3b82f6",
              borderRadius: 8,
              background: "#3b82f6",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background .3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2563eb")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#3b82f6")}
          >
            Edit Profile
          </button>

          <Link
            to="/cart"
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
            View Cart
          </Link>
        </div>
      </div>

      {/* Keyframe animation */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}
      </style>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div
      style={{
        background: "#161a20",
        borderRadius: 10,
        border: "1px solid #242936",
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "transform .2s ease, box-shadow .2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span style={{ color: "#a0a7b4" }}>{label}</span>
      <strong style={{ color: "#fff" }}>{value}</strong>
    </div>
  );
}
