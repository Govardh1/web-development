import { log } from "console";
import express from "express";

const app = express();
const PORT=3000;
app.post("/api/v1/signup",(req,res)=>{

})

app.post("/api/v1/signin",(req,res)=>{

})

app.post("/api/v1/content",(req,res)=>{

})
app.get("/api/v1/content",(req,res)=>{

})

app.delete("/api/v1/coneten",(req,res)=>{

})

app.post("/api/v1/brain/share",(req,res)=>{

})

app.get("/api/v1/brain/:shareLink",(req,res)=>{

})

app.listen(PORT,()=>{
	console.log("listning at ${PORT}");
	
})