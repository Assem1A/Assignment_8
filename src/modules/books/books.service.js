import { log } from "console"
import { DB } from "../../DB/connection.js"
import { booksModel } from "../../DB/models/booksmodel.js"
import { match } from "assert"

export const createCollection1 = async () => {
    await booksModel
}
export const createIndex = async () => {
    booksModel.createIndex({ title: 1 })
}
export const addBook = async (body) => {
    const { title, author, year, genres } = body
    const book = await booksModel.insertOne({
        "title": title,
        "author": author,
        "year": year,
        "genres": genres
    })
    return book
}
export const addBooks = async (body) => {
    const book = await booksModel.insertMany(body)
    return book
}
export const updateBook = async () => {
    const updatedBook = await booksModel.updateOne({ title: "future" }, {
        $set: {
            year: 2022
        }
    })
    return updatedBook
}
export const selcetBook = async (title) => {
    const book = await booksModel.findOne({ "title": title })
    return book
}
export const selectBooks = async (from, to) => {
    from = Number(from);
    to = Number(to);

    const book = await booksModel.find({ year: { $gt: from, $lt: to } }).toArray()
    return book
}
export const selectGenre = async (genre) => {
    console.log(genre);


    const natg = await booksModel.findOne({ genres: genre })
    return natg
}
export const selectYears = async () => {
    const books = await booksModel.find().skip(2).limit(3).sort({ year: -1 }).toArray()
    return books
}
export const selectYears2 = async () => {
    const books = await booksModel.find({
        year: { $type: "int" }
    }).toArray()
    return books
}
export const selectgenres = async () => {
    const books = await booksModel.find({
        genres: { $nin: ["Horror", "Science Fiction"] }
    }).toArray()

    return books
}
export const deleteBooks = async (tyear) => {
    tyear = Number(tyear)
    const deletee = await booksModel.deleteMany({ year: { $lt: tyear } })
    return deletee
}

export const aggregate1 = async () => {
    const book =
        await booksModel.aggregate(
            {
                $match: {
                    year: { $gt: 2000 }
                }
            },
            {
                $sort: {
                    year: -1
                }
            }
        ).toArray()
    return book
}
export const aggregate2 = async () => {
    const book = await booksModel.aggregate([
        {
            $match: {
                year: { $gt: 2000 }
            }
        }, {
            $project: {
                _id: 0,
                title: 1,
                author: 1,
                year: 1
            }
        }
    ]
    ).toArray()
    return book
}
export const aggregate3 = async () => {
    const book = await booksModel.aggregate([{ $unwind: "$genres" }]).toArray()
    return book
}
export const aggregate4 = async () => {
    const book = await booksModel.aggregate([{
        $lookup: {
            from: "Logs",
            localField: "_id",
            foreignField: "book_id",
            as: "joinedData"

        }
    }]).toArray()
    return book
}