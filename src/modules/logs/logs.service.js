import { logsModel } from "../../DB/models/logs.model.js"

export const createcollection2=async()=>{
    await logsModel
}
export const addLog=async(body)=>{
const {book_id,action}=body
const logy=(await logsModel).insertOne({
    "book_id":book_id,
    "action":action
})
return logy
}