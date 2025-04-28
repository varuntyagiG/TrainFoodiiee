import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PnrPage = () => {
  const [pnr, setPnr] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("/api/pnr/verify", { pnr });
      navigate(`/details?pnr=${pnr}`);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome to TrainFoodie 🚆</h2>
        <p style={styles.subtitle}>Enter your 10-digit PNR to continue</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            placeholder="Enter your PNR"
            maxLength={10}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Get My Meal Plan
          </button>
        </form>

        {error && <div style={styles.error}>{error}</div>}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    backgroundImage:
      "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Felectric-train&psig=AOvVaw1L9ikiR43qvpHX92deZ2XE&ust=1745714201390000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDjwKq69IwDFQAAAAAdAAAAABAX')", // High quality train-related image
    backgroundSize: "cover", // Ensure the image covers the entire background
    backgroundPosition: "center", // Center the image in the viewport
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Darker overlay for better contrast
    zIndex: 1, // Make sure the overlay is above the background image
  },
  card: {
    zIndex: 2, // Ensure the card is on top of the overlay
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
    maxWidth: "420px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#2d3748",
  },
  subtitle: {
    fontSize: "16px",
    color: "#4a5568",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  input: {
    padding: "14px 18px",
    fontSize: "18px",
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    outline: "none",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
  },
  button: {
    padding: "14px",
    fontSize: "16px",
    backgroundColor: "#4f46e5",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#6366f1",
    transform: "scale(1.05)",
  },
  error: {
    marginTop: "12px",
    color: "#e53e3e",
    backgroundColor: "#fff5f5",
    padding: "10px 14px",
    borderRadius: "8px",
    fontSize: "14px",
  },
};

export default PnrPage;
