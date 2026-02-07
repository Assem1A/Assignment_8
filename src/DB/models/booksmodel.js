import { DB } from "../connection.js";

export const booksModel=await DB.createCollection("Books", {
      validator: {
        $jsonSchema: {
          required: ["title"],
          properties: {
          
          }
        }
      }
    })  