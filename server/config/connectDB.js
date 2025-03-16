import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.MONGODB_URI){
  throw new Error(
    "Please provide mongoDB URI"
  )
}

async function connectDB(){
  try{
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error){
    console.log("Mongodb connect error")
    process.exit(1)
  }
}

export default connectDB