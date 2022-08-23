const express = require("express");
const dotenv = require("dotenv");
const bootcamps = require("./routes/bootcamps");
const morgan = require("morgan");

const connectDb = require("./config/db");

dotenv.config({ path: "./config/config.env" });
connectDb();

console.log(process.env.NODE_ENV);

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
