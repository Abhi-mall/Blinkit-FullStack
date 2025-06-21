import CartProductModel from "../models/cartproduct.model.js";
import UserModel from "../models/user.model.js";
import OrderModel from "../models/order.model.js";
import mongoose from "mongoose";

 export async function CashOnDeliveryOrderController(req, res){
  try {
    const userId = req.userId
    const {list_items, totalAmt, addressId, subTotalAmt} = req.body

    const payload = list_items.map((el)=> {
      return ({
        userId : userId,
        orderId : `ORD-${new mongoose.Types.ObjectId()}`,
        productId : el.productId._id,
        product_details : {
          name : el.productId.name,
          image : el.productId.image
        },
        paymentId : "",
        payment_status : "CASH ON DELIVERY",
        delivery_address : addressId ,
        subTotalAmt  : subTotalAmt,
        totalAmt  :  totalAmt,
      })
    })

    const generatedOrder = await OrderModel.insertMany(payload)

     const removeCartItems = await CartProductModel.deleteMany({ userId : userId })
     const updateInUser = await UserModel.updateOne({ _id : userId }, { shopping_cart : []})


  } catch (error) {
    return response.status(5000).json({
      message : error.message || error,
      error : true,
      success : false
    })
  }
 }