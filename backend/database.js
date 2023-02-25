const mongoose = require("mongoose");

function DBConnect() {
  const DB_URL = process.env.DB_URL;

  mongoose.set("strictQuery", false);
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("DB Connected");
  });
}

module.exports = DBConnect;
