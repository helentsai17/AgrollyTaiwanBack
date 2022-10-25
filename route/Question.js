const express = require('express')
const router = express.Router()
const { Question, User, Message } = require('../models')

//image 
const multer = require('multer')
const upload = multer({ dest: 'useruploads/' })
const { uploadFile, getFileStream } = require('../s3')
const message = require('../models/message')

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

router.put('/uploadimage/:uuid', upload.single('file'), async (req, res) => {
    const questionuuid = req.params.uuid

    try {
        const file = req.file
        console.log(file)
        const result = await uploadFile(file)
        console.log(result)
        const question = await Question.findOne({ where: { uuid: questionuuid } })
        question.image_path = `${process.env.BACKENDURL}/question/images/${result.Key}`
        await question.save()
        return res.json(question)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'crop image storage error' })
    }

})

router.get('/images/:key', (req, res) => {
    const key = req.params.key
    const readStream = getFileStream(key)
    console.log(readStream)
    readStream.pipe(res) 
})

// get all user questions with user info
router.get('/posts', async (req, res) => {
    try {
        const posts = await Question.findAll({ include: [{ model: User, as: 'user' },{ model: Message, as:'messages'}],  order: [['id', 'DESC']] })

        return res.json(posts)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

router.get('/posts/:userUuid', async (req, res) => {
    try {
        const user = await User.findOne({ where: { uuid: req.params.userUuid } })
        const posts = await Question.findAll({ where: { userId: user.id }, include: [{ model: User, as: 'user' },{ model: Message, as:'messages'}], order: [['id', 'DESC']] })

        return res.json(posts)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})


router.put('/edit/:id', async(req, res) =>{
    const quesitonUuid = req.params.id
    const { content } = req.body
    
    try {
        const question = await Question.findOne({where: {uuid:quesitonUuid}})
        
        question.content = content

        await question.save()
        return res.json(question)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'error came from edit question' })
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