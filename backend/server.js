import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import MoroccookiesRouter from "./routes/MoroccookiesRoute.js";



// configuration of the app
const app = express();
const port = 4000

// middleware
app.use(express.json());
app.use(cors())

// Connection of DB
connectDB();

// api endpoints
app.use("/api/Moroccookies",MoroccookiesRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})