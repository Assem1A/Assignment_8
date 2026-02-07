import express from 'express'
import { NODE_ENV, port } from '../config/config.js'
import { authinDB } from './DB/connection.js'
import { booksRouter } from './modules/books/index.js'
import { authorRouter } from './modules/authors/index.js'
import { logsRouter } from './modules/logs/index.js'

async function  bootstrap() {
    const app = express()
    //convert buffer data
    app.use(express.json())
    app.use('/',booksRouter)
        app.use('/',authorRouter)
                app.use('/',logsRouter)


    await authinDB()
    //application routing
    app.get('/', (req, res) => res.send('Hello World!'))
    

    //invalid routing
    app.use('{/*dummy}', (req, res) => {
        return res.status(404).json({ message: "Invalid application routing" })
    })

    //error-handling
    app.use((error, req, res, next) => {
        const status = error.cause?.status ?? 500
        return res.status(status).json({
            error_message:
                status == 500 ? 'something went wrong' : error.message ?? 'something went wrong',
            stack: NODE_ENV == "development" ? error.stack : undefined
        })
    })
    
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
export default bootstrap