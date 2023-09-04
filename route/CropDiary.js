const express = require('express')
const router = express.Router()
const { CropDiary } = require('../models')


router.post('/add', async (req, res) => {
    const { cropId, userId, usercropId, image, content, date, days } = req.body

    const CropDiaryData = {
        cropId: cropId,
        userId: userId,
        usercropId: usercropId,
        image: image,
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