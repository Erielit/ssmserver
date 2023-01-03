import express, { Application } from "express";
import morgan from "morgan";
require("dotenv").config();

const app: Application = express();
const cors = require("cors");
const session = require("express-session");
app.set("port", process.env.PORT || 3000);

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(
  session({
    secret: "ssmserver",
    resave: false,
    saveUnitialized: false,
  })
);

//routes
app.get("/", (req, res) => {
  res.send("SSMSEVER");
});

export default app;
