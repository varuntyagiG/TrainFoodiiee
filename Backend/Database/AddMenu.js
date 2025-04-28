const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String,
});

// Create Menu Model
const Menu = mongoose.model("Menu", menuSchema);
module.exports = { Menu };
