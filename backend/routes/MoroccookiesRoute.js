import express from "express"
import { addMoroccookies,listMoroccookies,removeMoroccookies } from "../controllers/MoroccookiesController.js"
import multer from "multer"

const MoroccookiesRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

MoroccookiesRouter.post("/add",upload.single("image"),addMoroccookies)
MoroccookiesRouter.get("/list",listMoroccookies)
MoroccookiesRouter.post("/remove",removeMoroccookies);



export default MoroccookiesRouter;