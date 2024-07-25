import mongoose from "mongoose";

const MoroccookiesSchema = new mongoose.Schema({
    name: {type:String,required:true},
    recipe: {type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const MoroccookiesModel = mongoose.models.Moroccookies || mongoose.model("Moroccookies",MoroccookiesSchema)

export default MoroccookiesModel;