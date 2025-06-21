import {Router} from 'express'
import { CashOnDeliveryOrderController } from '../controllers/order.controller.js'
import auth from '../middleware/auth.js'

const orderRouter = Router()

orderRouter.post("/cash-on-delivery",auth ,CashOnDeliveryOrderController)

export default orderRouter