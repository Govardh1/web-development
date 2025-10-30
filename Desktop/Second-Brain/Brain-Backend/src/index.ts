import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import { ContentModel, LinkModel, UserModel } from "./db.js";
import * as z from "zod";
const app = express();
app.use(express.json())
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import { UserAuth } from "./middleware.js";
import { random } from "./utils.js";
import { hash } from "crypto";

dotenv.config(); // must be before connectDB
connectDB(); 
const PORT = 3000;
app.post("/api/v1/signup", async (req, res) => {
	try {
		const userZodSchema = z.object({
			username: z.string().min(3).max(18).regex(/^[a-zA-Z0-9_]+$/),
			password: z.string().min(8).max(15).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/).regex(/[@$#%&?]/)
		})
		const parsed = userZodSchema.safeParse(req.body);
		if (!parsed.success) {
			return res.status(400).json({
				msg: "Invalid input",
				errors: parsed.error
			});
		}

		const { username, password } = parsed.data;
		const existingUser = await UserModel.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ msg: "Username already taken" });
		}
		const hashedpassword = await bcrypt.hash(password, 15)

		if (existingUser) {
			return res.status(400).json({ msg: "User already exists" });
		}
		const user = await UserModel.create({
			username: username,
			password: hashedpassword
		})
		res.status(200).json({
			msg: "You are signed up ",
			user: { id: user._id, username: user.username },
		})
	} catch (e: any) {
		console.error("Signup error:", e);
		return res.status(500).json({
			msg: "Something went wrong",
		})
	}
})

app.post("/api/v1/signin", async (req, res) => {
	try {
		const userZodSchema = z.object({
			username: z.string().min(3).max(18).regex(/^[a-zA-Z0-9_]+$/),
			password: z.string().min(8).max(15).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/).regex(/[@$#%&?]/)
		})
		const parsedData = userZodSchema.safeParse(req.body)
		if (!parsedData.success) {
			return res.status(400).json({
				msg: "Invalid input",
				errors: parsedData.error.format(),
			});
		}
		const { username, password } = parsedData.data;
		const user = await UserModel.findOne({ username }).select("+password")
		if (!user || !user.password) {
			return res.status(404).json({ msg: `User with ${username} not found` });
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ msg: "Invalid password" });
		}
		const token = jwt.sign({ id: user._id }, process.env.JWT_USER_SECRET!, { expiresIn: "7d" })
		res.status(200).json({ msg: "You are signed in" ,
			token
		});
	} catch (error: any) {
		res.status(411).json({
			msg: "Something went wrong",
			error: error.message,
		})
	}
})

app.post("/api/v1/content", UserAuth,async(req, res) => {
	try {
		const link=req.body.link;
		const type=req.body.type;
		const title=req.body.title;
		await ContentModel.create({
			link,
			type,
			title,
			userID:(req as any).userID,
			tags:[]
		})
		res.json({
			msg:"Content added",
			link,
			type,
			title,
			userID:(req as any).userID,
			tags:[],
			user:(req as any).user
		})

	} catch (e) {
		console.error("Signup error:", e);
		return res.status(500).json({
			msg: "Something went wrong in post-Content",
		})
	}
})
app.get("/api/v1/content",UserAuth,async(req, res) => {
	try {
		
	const contentGot=await ContentModel.find({
			userID:(req as any).userID
		})
		res.json({
			msg:"content are here",
			contentGot
		})
	} catch (e) {
		console.error("Signup error:", e);
		return res.status(500).json({
			msg: "Something went wrong in get-Content",
		})
	}
})

app.delete("/api/v1/coneten", UserAuth,async(req, res) => {
	const contentID=req.body.contentID
	if (!contentID) {
		return res.json({
			msg:"no contentid"
		})
	}
	await ContentModel.deleteMany({
		contentID,
		userID:(req as any).userId
	})
	res.json({
		msg:"deleted content",
		contentID,
	})
})

app.post("/api/v1/brain/share" ,UserAuth, async(req, res) => {
	const {share}=req.body;
	if(share){
		const existingUser=await LinkModel.findOne({
			userId:(req as any).userId
		})
		if (existingUser) {
			res.json({
			msg:"sharable Link exist already",
			hash:existingUser.hash
		})
		return
		}
		const hash=random(10);
		await LinkModel.create({
			userId:(req as any).userId,
			hash:hash
		})
	}else{
		await LinkModel.deleteOne({
			userId:(req as any).userId,
		})
	}
	res.json({
		msg:"/share/ " + hash,
		hash
	})
})

app.get("/api/v1/brain/:shareLink",async (req, res) => {
 const hash=req.params.shareLink;
 const link=await LinkModel.findOne({
	hash
 })
 if(!link){
	res.status(411).json({
		msg:"incorrect input"
	})	
	return
 }
 const content=await ContentModel.findOne({
	userID:link.userId,
 })
 const user=await UserModel.findOne({
	_id:link.userId
 })

 if (!user) {
	res.json({
		msg:"user does not exist"
	})
	return
 }
 res.json({
	username:user.username,
	content:content	
 })
})

app.listen(PORT, () => {
	console.log(`listning at ${PORT}`);
})