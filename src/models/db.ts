import mongoose from "mongoose"

export const connectToDatabase = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/BitcoinAlgorithm');
        
    } catch (error) {
        console.log(error);
    }
}