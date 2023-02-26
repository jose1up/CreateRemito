import { Router } from "express";
let router = Router();
import product from "./Product.js";
import order from "./Order.js";
import remito from "./Remito.js";

router.use("/product", product);
router.use("/order", order)
router.use("/remito",remito)

export default router;
