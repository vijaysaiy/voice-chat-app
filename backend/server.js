require("dotenv").config();
const express = require("express");
const router = require("./routes");
const DBConnect = require("./database");
const app = express();
const PORT = process.env.PORT || 5000;

DBConnect();
app.use(express.json());
app.use(router);
app.get("/", (req, res) => res.send("Hello from backend"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
