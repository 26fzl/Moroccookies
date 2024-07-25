import MoroccookiesModel from "../models/MorocookiesModel.js";
import MoroccokiesModel from "../models/MorocookiesModel.js";
import fs from 'fs'

// add Moroccookies item
const addMoroccookies = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const Moroccookies = new MoroccookiesModel({
        name:req.body.name,
        recipe:req.body.recipe,
        category:req.body.category,
        image:image_filename
    })
    try {
        await Moroccookies.save()
        res.json({success:true,message:"Moroccookies Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"}) 
    }
}

// All Moroccookies list
const listMoroccookies = async (req,res) => {
    try {
        const Moroccookies = await MoroccookiesModel.find({});
        res.json({success:true,data:Moroccookies})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }
}

// remove Moroccookies item
const removeMoroccookies = async (req,res) => {
    try {
        const Moroccookies = await MoroccookiesModel.findById(req.body.id);
        fs.unlink(`uploads/${Moroccookies.image}`,()=>{})

        await MoroccookiesModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Moroccookies Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addMoroccookies,listMoroccookies,removeMoroccookies}