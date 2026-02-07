import { authorModel } from "../../DB/models/authors.model.js"

export const createAuthor=async(body)=>{

   const author= (await authorModel).insertOne(body)
    return author
}