import mongoose, { model , Schema } from "mongoose";  
import dotenv from "dotenv"
dotenv.config()
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  console.error("MONGO_URL is missing in .env file");
  process.exit(1);
}
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("MongoDB connected successfully!");
  } catch (err:any) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

const UserSchema=new Schema ({
	username:{type:String, unique:true},
	password:{type:String ,unique:true},
})

export const UserModel = model("User", UserSchema);
