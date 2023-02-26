import { Router } from "express";
var router = Router();
import { allGetProduct, findProductId, postProduct } from "../helpers/Product.js";

router.get("/", async (req, res) => {
  let allproducts = await allGetProduct();
  res.status("200").send(allproducts);
});

router.post("/create", async (req, res) => {
  try {
    let CreateProduct = await postProduct(req.body);

    if (!CreateProduct) {
      res.status(404).send({ message: "Not create product" });
    } else {
      res.status(200).send({ message: "Product created success" });
    }
  } catch (error) { }
});

router.get("/find/:id", async (req, res) => {
  try {
    console.log(req.params.id)
    let FindProduct = await findProductId(Number(req.params.id))
    if (FindProduct) {
      res.status(200).send(FindProduct)
    } else {
      res.status(404).send({ message: "Product not found" });
    }

  } catch (error) {
    console.error(error);
  }
})

export default router;
