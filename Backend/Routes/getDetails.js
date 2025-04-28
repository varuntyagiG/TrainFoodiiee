const express = require("express");
const router = express.Router();
const { Order } = require("../Database/Schema");

router.get("/getpassenger/:pnr", async (req, res) => {
  try {
    const passenger = await Order.findOne({ pnr: req.params.pnr });
    if (!passenger)
      return res.status(404).json({ message: "Passenger not found" });

    console.log(passenger);
    res.json(passenger.passenger);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
