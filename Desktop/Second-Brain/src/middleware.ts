import { type NextFunction, type Request,type Response } from "express"
import jwt	from "jsonwebtoken"


export const UserAuth=(req:Request,res:Response,next:NextFunction)=>{
	try{
		const token=req.headers["authorization"]
	if(!token){
		res.json({
			msg:"you are not signed in"
		})
	}
	const decoded=jwt.verify(token as string,process.env.JWT_USER_SECRET as string) as{id:string}
	console.log(decoded);
	if (!decoded) {
		return res.status(401).json({ msg: "Token missing" });
	}
	(req as any).userID = decoded.id;
   (req as any).user = decoded;
	next()
	}catch (e: any) {
		console.error("Signup error:", e);
		return res.status(500).json({
			msg: "Something went wrong",
		})
	}
}