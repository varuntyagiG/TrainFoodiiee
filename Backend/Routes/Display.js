const express = require("express");
const router = express.Router();
const { Menu } = require("../Database/AddMenu"); // Make sure this exports the Menu model properly

// Route to fetch all menu items
router.get("/dis", async (req, res) => {
  try {
    const data = await Menu.find({});

    res.json({
      success: true,
      data,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Failed to fetch menu items",
    });
  }
});

module.exports = router;
