import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, pnr, passenger } = location.state || {};

  useEffect(() => {
    const sendEmail = async () => {
      try {
        await axios.post(`/api/email/sendconfirmation/${pnr}`);
      } catch {
        console.error("Email send failed");
      }
    };

    if (pnr) {
      sendEmail();
      // After email sent, wait 7 seconds and go to RoughPage
      const timeout = setTimeout(() => {
        navigate("/roughpage");
      }, 7000);

      return () => clearTimeout(timeout);
    }
  }, [pnr, navigate]);

  if (!cart || !passenger) {
    return (
      <div style={styles.wrapper}>
        <h2 style={styles.error}>Missing order data. Please go back.</h2>
        <button onClick={() => navigate("/")} style={styles.button}>
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎉 Order Confirmed!</h1>
      <p style={styles.subtitle}>
        Thank you for ordering with <strong>TrainFoodie</strong>
      </p>

      <div style={styles.section}>
        <h2>Passenger</h2>
        <p>
          <strong>Name:</strong> {passenger.name}
        </p>
        <p>
          <strong>Email:</strong> {passenger.email}
        </p>
        <p>
          <strong>Train:</strong> {passenger.train}
        </p>
        <p>
          <strong>PNR:</strong> {pnr}
        </p>
      </div>

      <div style={styles.section}>
        <h2>Ordered Items</h2>
        <ul style={styles.list}>
          {cart.map((item) => (
            <li key={item._id} style={styles.item}>
              {item.name} - ₹{item.price} × {item.qty}
            </li>
          ))}
        </ul>
      </div>

      <h3 style={styles.total}>
        Total: ₹{cart.reduce((total, item) => total + item.price * item.qty, 0)}
      </h3>

      <p style={{ marginTop: "20px", color: "#6b7280" }}>
        Redirecting you shortly to finish up...
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#f9fafb",
    color: "#1f2937",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#10b981",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "30px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    textAlign: "left",
    maxWidth: "600px",
    marginInline: "auto",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    padding: "8px 0",
    borderBottom: "1px solid #e5e7eb",
  },
  total: {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "20px",
  },
  button: {
    marginTop: "30px",
    padding: "12px 24px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  wrapper: {
    padding: "40px",
    textAlign: "center",
  },
  error: {
    color: "red",
    fontSize: "18px",
  },
};

export default SummaryPage;
