import { Router } from "express";
import { addLog, createcollection2 } from "./logs.service.js";
const router = new Router()
router.post('/collection/logs/capped',async(req,res,next)=>{
    const result=await createcollection2()
    res.status(200).json({msg:"done",result})
})
 
router.post('/logs',async(req,res,next)=>{
       const result=await addLog(req.body)
            res.status(201).json({msg:"done",result})
})







export default router