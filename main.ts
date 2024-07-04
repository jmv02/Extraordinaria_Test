import mongoose from "mongoose";
import express from "express";
import {Request,Response} from "express"; 
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL || MONGO_URL === undefined) {
  console.log("No mongo URL found");

} else {

await mongoose.connect(MONGO_URL);
  const app = express();
  app.use(express.json());

  app.get("/test",(req:Request,res:Response)=>{
    res.status(200).send("Working!");
  } )
  




  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
}


