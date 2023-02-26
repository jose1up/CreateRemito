import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
let PORT = process.env.PORT;
const app = express();
import morgan from "morgan";
import router from "./routes/index.js";

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
