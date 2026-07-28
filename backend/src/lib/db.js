import mongoose from "mongoose";

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGO_URI;
        if(!mongoUri){
            throw new Error("MongoUri is requied");
            
        }

        await mongoose.connect(mongoUri)
        console.log("mongodb connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1)
    }    
}

