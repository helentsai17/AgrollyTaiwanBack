const express = require('express')
const router = express.Router()
const { Question, User } = require('../models')

router.post('/post', async (req, res) => {
    const { userUuid, content } = req.body

    try {
        const user = await User.findOne({ where: { uuid: userUuid } })
        const post = await Question.create({ content, userId: user.id })
        return res.json(post)
    } catch (err) {
        console.log(err)
    }
})

// get all user questions with user info
router.get('/posts', async (req, res) => {
    try {
        const posts = await Question.findAll({ include: [{ model: User, as: 'user' }] })

        return res.json(posts)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// get all the answer relate to the question
router.get('/answer/:questionId', async (req, res) => {
    const questionId = req.params.questionId

    try {
        const question = await Question.findAll({
            where: {id:questionId},
            include: 'messages'
        })
        
        return res.json(question)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'error came from getting user question' })
    }

})

module.exports = router;