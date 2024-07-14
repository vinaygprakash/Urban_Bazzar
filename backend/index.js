const express = require("express");
const app = express();
const cors = require('cors');

const port = process.env.PORT || 4000;

const connectToMongo = require("./db/connection");
// connectToMongo();

// Configure CORS
app.use(cors({
  origin: [ 'https://urban-bazzar-frontend.vercel.app', 'http://localhost:3000'],
  credentials: true,
}));

app.use(express.json());

// Available routes
app.use("/api/user", require("./routes/User"));
app.use("/api/cart", require("./routes/Cart"));
app.use("/api/placeorder", require("./routes/Order"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
