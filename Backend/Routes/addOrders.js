const express = require("express");
const router = express.Router();
const { Order } = require("../Database/Schema");

router.post("/addItems", async (req, res) => {
  const { pnr, items } = req.body;
  console.log(pnr);
  console.log(req.body);

  try {
    const order = await Order.findOne({ pnr });

    if (!order) {
      return res.status(404).json({ error: "Order with this PNR not found" });
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ error: "Items are required and must be a non-empty array" });
    }

    // calculate total manually
    let totalAmount = 0;
    for (let i = 0; i < items.length; i++) {
      totalAmount += items[i].qty * items[i].price;
    }

    order.items = items;
    order.totalAmount = totalAmount;
    order.status = "Confirmed";

    await order.save();

    res
      .status(200)
      .json({ message: "Items added to order successfully", order });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
