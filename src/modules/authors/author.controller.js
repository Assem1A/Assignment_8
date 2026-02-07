import { Router } from "express";
import { createAuthor } from "./author.service.js";
const router = new Router()

router.post('/authors/collection',async(req,res,next)=>{
    const result=await createAuthor(req.body)
    res.status(200).json({msg:"done",result})
})









export default router