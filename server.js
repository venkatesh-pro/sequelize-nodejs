const express = require("express");
const fs = require("fs");
const { connectDb } = require("./config/db-config");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// connect db
connectDb();

// routes
fs.readdirSync("./routes").map((r) =>
  app.use("/api", require(`./routes/${r}`))
);

app.listen(PORT, () => {
  console.log("app is running in port 5000");
});
