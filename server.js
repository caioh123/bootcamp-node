const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const bootcamps = require("./routes/bootcamps");
const morgan = require("morgan");
const errorHandler = require("./middleware/error");
const connectDb = require("./config/db");

connectDb();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler);

const PORT = process.env.PORT || 8888;

const server = app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);

// handle unhandled promise rejections

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message} `);

  server.close(() => process.exit(1));
});
