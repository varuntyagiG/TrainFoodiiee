const express = require("express");
const { Order } = require("../Database/Schema");
const router = express.Router();

router.post("/verify", async (req, res) => {
  const { pnr } = req.body;

  const order = await Order.findOne({ pnr });

  if (!order) {
    return res.status(400).json({ message: "Invalid PNR" });
  }

  res.json(order.passenger);
});

module.exports = router;
