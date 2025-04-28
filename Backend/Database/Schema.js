const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://internship077:0NYIhzMCRWKrBmSm@cluster0.ggnbkxo.mongodb.net/TrainFoodie?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(() => console.log("Connected to MongoDB Database"));

// Passenger-Schema
const passengerSchema = new mongoose.Schema({
  name: String,
  email: String,
  seat: String,
  age: Number,
  train: String,
});

// item-Schema
const itemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  qty: Number,
  price: Number,
});

const orderSchema = new mongoose.Schema({
  pnr: String,
  passenger: passengerSchema,
  items: [itemSchema],
  totalAmount: Number,
  status: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order };
