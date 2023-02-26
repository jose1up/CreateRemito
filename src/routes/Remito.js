import { createPdf } from "../helpers/Remito.js";
import { Router } from "express";
var router = Router();

router.get('/',async(req, res) => {
    await createPdf();
    res.send('ok')

}
)

export default router

