import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post('/register', (req, res) => {
    res.status(201).json({
        username: req.body.username,
        password: req.body.password,
    })
})

export default router