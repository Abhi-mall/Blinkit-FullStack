import express, { response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'
import userRouter from './routes/user.route.js'
import categoryRouter from './routes/category.route.js'
import uploadRouter from './routes/upload.route.js'
import subCategoryRouter from './routes/subCategory.route.js'

const app = express()
app.use(cors({
  credentials: true,
  origin: process.env.FRONTED_URL
}))
app.use(express.json())
app.use(cookieParser())
app.use(helmet({
  crossOriginEmbedderPolicy: false
}))

const PORT = 8080 || process.env.PORT

app.get("/", (request, response)=> {
  response.json({
    message: "server is running " + PORT
  })
})

connectDB().then(()=> {
  app.listen(PORT, ()=> {
    console.log("Server is running ", PORT)
  })
})

app.use('/api/user', userRouter)
app.use('/api/category', categoryRouter)
app.use("/api/file",uploadRouter)
app.use("/api/subcategory",subCategoryRouter)
