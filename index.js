const express = require("express");
const app = express();

app.use(express.json());

function gateway(req, res, next) {
  console.log(`Gateway received request for ${req.url}`);
  next();
}

app.use(gateway);

app.get("/service/user", (req, res) => {
  res.json({ service: "User Service", status: "Running" });
});

app.get("/service/order", (req, res) => {
  res.json({ service: "Order Service", status: "Running" });
});

app.get("/service/payment", (req, res) => {
  res.json({ service: "Payment Service", status: "Running" });
});

app.listen(3000, () => {
  console.log("Microservice Gateway running on port 3000");
});
