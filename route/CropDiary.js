const express = require('express')
const router = express.Router()
const { CropDiary } = require('../models')
const multer = require('multer')
const upload = multer({ dest: 'useruploads/' })
const { uploadFile, getFileStream } = require('../s3')


router.post('/add', async (req, res) => {
    const { cropId, userId, usercropId, content, date, days } = req.body

    const CropDiaryData = {
        cropId: cropId,
        userId: userId,
        usercropId: usercropId,
        content: content,
        date: date,
        days: days
    }

    try {
        const cropDiary = await CropDiary.create(CropDiaryData)
        return res.json(cropDiary)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'create crop base infomation fall' })
    }
})


router.put('/uploadimage/:id', upload.single('file'), async (req, res) => {
    const diaryId = req.params.id

    try {
        const file = req.file
        const result = await uploadFile(file)
        const diary = await CropDiary.findOne({ where: { id: diaryId } })
        diary.image = `${process.env.BACKENDURL}/diary/images/${result.Key}`
        await diary.save()
        return await res.json(diary)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'diary image storage error' })
    }

})

router.get('/images/:key', (req, res) => {
    const key = req.params.key
    const readStream = getFileStream(key)
    readStream.pipe(res) 
})


//get data base on usercrop
router.get("/usercrop/:usercropId", async function (req, res, next) {
    const id = req.params.usercropId
    try {

        const cropdiary = await CropDiary.findAll({
            where: { usercropId: id },
            order: [['date', 'DESC']]
        });

        return res.json(cropdiary);
    } catch (err) {
        return res.status(500).json({ error: "crop diary table base on user crop"});
    }
});

//delete crop and pest's relationship
router.delete('/usercrop/delete/:diaryId', async (req, res) => {
    const id = req.params.diaryId

    try {
        const cropDiary = await CropDiary.findOne({ where: { id: id } })
        await cropDiary.destroy()

        return res.json({ error: "this diary got destroy"})
    } catch (err) {
        return res.status(500).json({ error: "there is some issue not able to delete, pleaes try again."})
    }
})

router.get("/editget/:diaryId", async function (req, res, next) {
    const id = req.params.diaryId
    try {

        const cropdiary = await CropDiary.findOne({
            where: { id : id },
        });

        return res.json(cropdiary);
    } catch (err) {
        return res.status(500).json({ error: "issue get diary edit info"});
    }
});

router.put('/usercrop/edit/:diaryId', async(req, res) =>{
    const id = req.params.diaryId
    const { content, date, days } = req.body
    
    try {
        const cropDiary = await CropDiary.findOne({where: {id:id}})

        cropDiary.content = content
        cropDiary.date = date
        cropDiary.days = days

        await cropDiary.save()
        return res.json(cropDiary)

    } catch (error) {
        return res.status(500).json({ error: 'some issue with the edit, please try agian' })
    }
})

//use for checking crop grow status for future use analist
router.get("/cropgrow/:cropId", async function (req, res, next) {
    const id = req.params.cropId
    try {

        const cropdiary = await CropDiary.findAll({
            where: { cropId: id },
            order: [['days', 'ASC']]
        });

        return res.json(cropdiary);
    } catch (err) {
        return res.status(500).json({ error: "crop diary table base on user crop"});
    }
});

router.get("/usercropgroup/:userId", async function (req, res, next) {
    const id = req.params.userId
    try {

        const cropdiary = await CropDiary.findAll({
            where: { userId: id },
            group: 'usercropId',
            order: [['date', 'ASC']]
        });

        return res.json(cropdiary);
    } catch (err) {
        return res.status(500).json({ error: "crop diary table base on user crop"});
    }
});


// user will be able to see all her crop base on date
router.get("/usercrop/date/:userId", async function (req, res, next) {
    const id = req.params.userId
    try {

        const cropdiary = await CropDiary.findAll({
            where: { userId: id },
            order: [['date', 'ASC']]
        });

        return res.json(cropdiary);
    } catch (err) {
        return res.status(500).json({ error: "crop diary table base on user crop"});
    }
});

module.exports = router;