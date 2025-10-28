import mongoose, { model , Schema } from "mongoose";  
import dotenv from "dotenv"
import { title } from "process";
import { any } from "zod";
import { required } from "zod/mini";
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

const contentSchema=new Schema({
  title:{type:String},
  type:{type:String },
  link:{type:String},
  tags:[{type:mongoose.Types.ObjectId, ref:"User"}],
  userID:[{type:mongoose.Types.ObjectId, ref:"User",required:true}]
})

export const ContentModel=model("Content",contentSchema)