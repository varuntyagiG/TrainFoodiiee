require("dotenv").config();
const express = require("express");
const pnrVerify = require("./Routes/pnrVerify");
const display = require("./Routes/Display");
const addOrders = require("./Routes/addOrders");
const sentEmail = require("./Routes/emailSend");
const getDetails = require("./Routes/getDetails");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("/api/pnr", pnrVerify);
app.use("/api/display", display);
app.use("/api/addOrders", addOrders);
app.use("/api/email", sentEmail);
app.use("/api/pnr", getDetails);

app.listen(3000);
