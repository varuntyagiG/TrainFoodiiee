import React from "react";

const RoughPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Order Placed Successfully! 🎉</h1>
        <p style={styles.message}>
          Your confirmation email has been sent. Thank you for choosing
          TrainFoodie!
        </p>
        <p style={styles.details}>
          We’re thrilled to serve you on your journey. Your food will be
          delivered soon, enjoy the ride!
        </p>
        <button
          style={styles.button}
          onClick={() => (window.location.href = "/")}
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6",
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "100%",
  },
  heading: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#10b981",
    marginBottom: "20px",
  },
  message: {
    fontSize: "18px",
    fontWeight: 400,
    color: "#374151",
    marginBottom: "20px",
  },
  details: {
    fontSize: "16px",
    fontWeight: 300,
    color: "#6b7280",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    backgroundColor: "#3b82f6",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default RoughPage;
