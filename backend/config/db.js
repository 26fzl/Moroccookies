import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fatimaezzahra288:9n5HS9y8Dn5bl49z@cluster0.exsegeb.mongodb.net/Moroccookies').then(()=>console.log("DB Connected"));
}
