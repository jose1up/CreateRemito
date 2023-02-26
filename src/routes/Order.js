import { Router } from "express";
import { getallOrder } from "../helpers/Order.js";
var router = Router();

router.get('/', async (req, res) => {
    try {
        let allOrder = await getallOrder();
        res.status(200).send(allOrder);
    } catch (error) {
        console.error(error);
    }
})


export default router;