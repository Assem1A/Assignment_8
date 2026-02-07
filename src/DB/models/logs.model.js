import { DB } from "../connection.js";

export const logsModel=DB.createCollection("Logs",{
    capped:true,
    size:1000000
})