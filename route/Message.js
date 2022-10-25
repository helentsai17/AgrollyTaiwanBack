const express = require('express')
const router = express.Router()
const { Question, Message, User } = require('../models')

router.post('/answerpost', async (req, res) => {
    const { UserUuid ,questionId, message } = req.body

    try {
        const question = await Question.findOne({ where: { uuid: questionId } })
        const user = await User.findOne({where: { uuid: UserUuid }  })
        // console.log(user.id);
        // console.log(question.id)
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

//get question answer
router.get('/answer/:id', async function (req, res, next) {

    const question = await Question.findOne({ where: { uuid: req.params.id } })

    Message.findAll({
      where: {
        questionId: question.id
      }, include: [{ model: User, as: 'user' }] 
    }).then(message => {
      res.json(message)
    })
    .catch(err => console.log('error get message : ' + err));
  })



module.exports = router;