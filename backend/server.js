import express from "express"
import cors from"cors"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'

// App config
const app = express()
const port = 4000

// Middleware
app.use(express.json())
app.use(cors())

// DB Connection
connectDB();

// API endpoints
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
