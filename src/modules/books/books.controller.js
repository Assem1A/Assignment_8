import { Router } from 'express'
import { addBook, addBooks, aggregate1, aggregate2, aggregate3, aggregate4, createCollection1, createIndex, deleteBooks, selcetBook, selectBooks, selectGenre, selectgenres, selectYears, selectYears2, updateBook } from './books.service.js';
const router = Router();
router.post('/books/collection', async (req, res, next) => {
    const sh = await createCollection1()
    res.status(200).json("done")

})


router.post('/collection/books/index', async (req, res, next) => {
    await createIndex()
    res.status(200).json("done")

})
router.post('/books', async (req, res, next) => {
    const result = await addBook(req.body)
    res.status(201).json({ msg: "done", result })

})

router.post('/books/patch', async (req, res, next) => {
    const result = await addBooks(req.body)
    res.status(201).json({ msg: "done", result })

})
router.patch('/books/future', async (req, res, next) => {
    const result = await updateBook(req.body)
    res.status(200).json({ msg: "done", result })
})
router.get('/books/title', async (req, res, next) => {
    const result = await selcetBook(req.query.title)
    res.status(200).json({ msg: "done", result })
})
router.get('/books/year', async (req, res, next) => {
    const result = await selectBooks(req.query.from, req.query.to)
    res.status(200).json({ msg: "done", result })
})
router.get('/books/genre', async (req, res, next) => {
    const result = await selectGenre(req.query.genre)
    res.status(200).json({ msg: "done", result })
})


router.get('/books/skip-limit', async (req, res, next) => {
    const result = await selectYears()
    res.status(200).json({ msg: "done", result })
})

router.get('/books/year-integer', async (req, res, next) => {
    const result = await selectYears2()
    res.status(200).json({ msg: "done", result })
})
router.get('/books/exclude-genres', async (req, res, next) => {
    const result = await selectgenres()
    res.status(200).json({ msg: "done", result })
})

router.delete('/books/before-year', async (req, res, next) => {
    const result = await deleteBooks(req.query.year);
    res.status(200).json({ msg: "done", result })

})
router.get('/books/aggregate1', async (req, res, next) => {
    const result = await aggregate1();
    res.status(200).json({ msg: "done", result })
})
router.get('/books/aggregate2', async (req, res, next) => {
    const result = await aggregate2()
    res.status(200).json({ msg: "done", result })

})
router.get('/books/aggregate3',async(req,res,next)=>{
     const result = await aggregate3()
    res.status(200).json({ msg: "done", result })

})
router.get('/books/aggregate4',async(req,res,next)=>{
     const result = await aggregate4()
    res.status(200).json({ msg: "done", result })

})
export default router