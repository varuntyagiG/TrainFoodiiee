require("dotenv").config();
const express = require("express");
const router = express.Router();
const sendEmail = require("./emailService");
const { Order } = require("../Database/Schema");

router.post("/sendconfirmation/:pnr", async (req, res) => {
  const { pnr } = req.params;
  const order = await Order.findOne({ pnr });

  if (!order) {
    return res.status(404).json({ error: "Order not found for this PNR" });
  }

  const { passenger, items, totalAmount } = order;

  let itemList = items
    .map((item) => {
      return `<li>${item.name} - Qty: ${item.qty} - ₹${item.qty * item.price}</li>`;
    })
    .join("");

  const htmlContent = `
      <h2>Hello ${passenger.name},</h2>
      <p>Your order has been confirmed for train ${passenger.train}.</p>
      <p><strong>PNR:</strong> ${pnr}</p>
      <h4>Order Summary:</h4>
      <ul>${itemList}</ul>
      <p><strong>Total Amount:</strong> ₹${totalAmount}</p>
      <br/>
      <p>Thank you for ordering with TrainFoodie!</p>
    `;

  // Send the email
  await sendEmail(
    passenger.email,
    "Your TrainFoodie Order Confirmation",
    htmlContent,
  );

  // Respond with success
  res.json({ message: "Email sent successfully" });
});

module.exports = router;
