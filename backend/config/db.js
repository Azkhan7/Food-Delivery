import mongoose  from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://azkhan:azkhan1622@cluster0.wmk8jzx.mongodb.net/food-del').then(()=>console.log("Db Connected"));

}