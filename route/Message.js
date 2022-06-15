const express = require('express')
const router = express.Router()
const { Question, Message, User } = require('../models')

router.post('/answerpost', async (req, res) => {
    const { UserUuid ,questionId, message } = req.body

    try {
        const question = await Question.findOne({ where: { id: questionId } })
        const user = await User.findOne({where: { uuid: UserUuid }  })
        const answer = await Message.create({ message, userId:user.id , questionId: question.id })
        return res.json({ message: "answer post successfully" , post : answer })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "please try again" })
    }
})

router.get('/useranswer/:answerId', async (req, res) => {
    const answerId = req.params.answerId

    try {
        const answer = await Message.findAll({
            where: {id:answerId},
            include: 'user'
        })
        
        return res.json(answer)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'error came from answer' })
    }

})




module.exports = router;