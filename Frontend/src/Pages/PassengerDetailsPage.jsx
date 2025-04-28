import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const pnr = queryParams.get("pnr");

  const [passenger, setPassenger] = useState(null);
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchPassenger = async () => {
      try {
        const res = await axios.get(`/api/pnr/getpassenger/${pnr}`);
        setPassenger(res.data);
      } catch {
        alert("Invalid or missing PNR.");
        navigate("/");
      }
    };

    if (pnr) fetchPassenger();
    else {
      alert("Missing PNR. Please provide a valid PNR.");
      navigate("/");
    }
  }, [pnr, navigate]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get("/api/display/dis");
        setMenu(res.data.data);
      } catch (err) {
        console.error("Failed to fetch menu items", err);
      }
    };

    fetchMenu();
  }, []);

  const addToCart = (item) => {
    const existing = cart.find((i) => i._id === item._id);
    if (existing) {
      setCart((prev) =>
        prev.map((i) => (i._id === item._id ? { ...i, qty: i.qty + 1 } : i)),
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const handleSubmitOrder = async () => {
    if (cart.length === 0) {
      alert("Please add items to the cart before submitting.");
      return;
    }

    try {
      await axios.post("/api/addOrders/addItems", {
        pnr,
        items: cart,
      });

      navigate("/summary", { state: { cart, pnr, passenger } });
    } catch {
      alert("Failed to place order. Try again.");
    }
  };

  if (!passenger)
    return <div style={styles.loading}>Loading passenger details...</div>;

  // Placeholder for the avatar (initials or image)
  const avatar = passenger.name ? passenger.name.charAt(0).toUpperCase() : "P"; // First letter of name as placeholder

  return (
    <div style={styles.container}>
      {/* Passenger Info */}
      <div style={styles.left}>
        <h2 style={styles.title}>Passenger Information</h2>
        <div style={styles.infoCard}>
          <div style={styles.avatar}>
            <span style={styles.avatarText}>{avatar}</span>
          </div>
          <div style={styles.passengerDetails}>
            <p>
              <strong>Name:</strong> {passenger.name}
            </p>
            <p>
              <strong>Train:</strong> {passenger.train}
            </p>
            <p>
              <strong>Email:</strong> {passenger.email}
            </p>
            <p>
              <strong>PNR:</strong> {pnr}
            </p>
          </div>
        </div>
      </div>

      {/* Menu & Cart */}
      <div style={styles.right}>
        <h2 style={styles.title}>Available Menu</h2>
        <div style={styles.menu}>
          {menu.length > 0 ? (
            menu.map((item) => (
              <div key={item._id} style={styles.menuItem}>
                <div>
                  <strong>{item.name}</strong>
                  <p style={styles.price}>₹{item.price}</p>
                </div>
                <button style={styles.addBtn} onClick={() => addToCart(item)}>
                  Add
                </button>
              </div>
            ))
          ) : (
            <p>No menu items available.</p>
          )}
        </div>

        <h3 style={styles.subtitle}>Your Cart</h3>
        {cart.length > 0 ? (
          <ul style={styles.cartList}>
            {cart.map((item) => (
              <li key={item._id} style={styles.cartItem}>
                <span>{item.name}</span>
                <span>
                  ₹{item.price} × {item.qty}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: "#ccc" }}>Your cart is empty.</p>
        )}

        <button style={styles.submitBtn} onClick={handleSubmitOrder}>
          Submit Order
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    padding: "30px",
    backgroundColor: "#f3f4f6",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#1f2937",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f9fafb, #e5e7eb)",
  },
  left: {
    flex: "1 1 280px",
    background: "#f0f4f8", // Soft gray with a hint of blue
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  right: {
    flex: "2 1 500px",
    background: "#e0f7fa", // Fresh light blue
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  title: {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "20px",
    color: "#111827",
  },
  subtitle: {
    marginTop: "30px",
    fontSize: "20px",
    fontWeight: 600,
    color: "#374151",
  },
  infoCard: {
    lineHeight: 1.8,
    fontSize: "16px",
    backgroundColor: "#f9fafb", // Slightly off-white for the info card itself
    padding: "16px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#3b82f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "24px",
    marginRight: "20px",
  },
  avatarText: {
    fontWeight: "bold",
  },
  passengerDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f1f5f9", // Lighter background for menu items
    padding: "12px 16px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  price: {
    color: "#6b7280",
    marginTop: "4px",
    fontSize: "14px",
  },
  addBtn: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  cartList: {
    listStyle: "none",
    padding: 0,
    marginTop: "12px",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #e5e7eb",
    padding: "8px 0",
    fontSize: "15px",
  },
  submitBtn: {
    marginTop: "24px",
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: "#10b981",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  loading: {
    padding: "50px",
    textAlign: "center",
    fontSize: "18px",
    color: "#4b5563",
  },
};

// Hover effects for buttons and menu items
styles.addBtn["&:hover"] = {
  backgroundColor: "#2563eb",
};

styles.submitBtn["&:hover"] = {
  backgroundColor: "#059669",
};

styles.menuItem["&:hover"] = styles.menuItemHover;

export default DetailsPage;
