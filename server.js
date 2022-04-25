const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV !== "production") require("dotenv").config();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post((req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) res.status(500).send({ error: stripeErr });
    else res.status(200).send({ success: stripeRes });
  });
});

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server listening on port ${PORT}`);
});
