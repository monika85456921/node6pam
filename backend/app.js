require("dotenv").config();
const express = require("express");
const connectingToDb = require("./config/db.js");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler.js");
// const port = process.env.PORT || 6000;
connectingToDb();

const app = express();
app.use(express.json());
app.use(cors());
app.options("*");
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes.js"));

app.use("/api/ads", require("./routes/adRoutes.js"));

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
