import { MongoClient } from "mongodb";
import { DB_NAME, DB_URI } from "../../config/config.js";
const client =new MongoClient(DB_URI)

export const DB=client.db(DB_NAME)

export const authinDB=async()=>{
    try{
        await client.connect()
        console.log('jiji2');
        
    }
    catch(er){
        console.log(er);
        
    }
}