import { Router } from "express";
import auth from "../middleware/auth.js";
import { createProductController, deleteProductDetails, getProductController } from "../controllers/product.controller.js";

const productRouter = Router()

productRouter.post("/create",auth,createProductController)
productRouter.post('/get', getProductController)
productRouter.delete('/delete-product',auth, deleteProductDetails)

export default productRouter