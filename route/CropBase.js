const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'cropuploads/' })
const { uploadFile, getFileStream } = require('../s3')
require('dotenv').config

const router = express.Router()

const { Cropbase, Kcvalue, Temperature, Fertilize, CropPest, PestDisease, User, UserLikeCrop, sequelize } = require('../models')
const { Op } = require("sequelize");

//add crop base information
router.post('/add', async (req, res) => {
    const { common_name, bio_name, chinese_name, sub_names,variety, season_string, total_grow_time, type, discription, water_sensitive, max_temp, min_temp, best_temp, reco_start, reco_end, distance, ph, author } = req.body

    const cropBasedata = {
        common_name: common_name,
        bio_name: bio_name,
        chinese_name: chinese_name,
        sub_names: sub_names,
        variety: variety,
        season_string: season_string,
        type: type,
        total_grow_time: total_grow_time,
        discription: discription,
        water_sensitive: water_sensitive,
        crop_image: 'crop_defult.jpeg',
        max_temp: max_temp,
        min_temp: min_temp,
        best_temp: best_temp,
        reco_start: reco_start,
        reco_end: reco_end,
        distance: distance,
        ph: ph,
        author: author,
    }

    try {
        const cropBase = await Cropbase.create(cropBasedata)
        return res.json(cropBase)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'create crop base infomation fall' })
    }


})

router.get('/images/:key', (req, res) => {
    const key = req.params.key
    const readStream = getFileStream(key)
    console.log(readStream)
    readStream.pipe(res) 
})

router.put('/uploadimage/:cropId', upload.single('file'), async (req, res) => {
    const cropId = req.params.cropId

    try {
        const file = req.file
        console.log(file)
        const result = await uploadFile(file)
        console.log(result)
        const crops = await Cropbase.findOne({ where: { id: cropId } })
        crops.crop_image = `${process.env.BACKENDURL}/crops/images/${result.Key}`
        await crops.save()
        return res.json(crops)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'crop image storage error' })
    }

})

//edit cropbase 
router.put('/edit/:cropId', async (req, res) => {
    const cropId = req.params.cropId
    const { common_name, bio_name, chinese_name, sub_names, variety, season_string, total_grow_time, type, discription, water_sensitive, max_temp, min_temp, best_temp, reco_start, reco_end, distance, ph, author } = req.body

    try {
        const crop = await Cropbase.findOne({ where: { id: cropId } })

        crop.common_name = common_name
        crop.bio_name = bio_name
        crop.chinese_name = chinese_name
        crop.sub_names = sub_names,
        crop.variety = variety,
        crop.season_string = season_string
        crop.total_grow_time = total_grow_time
        crop.type = type
        crop.discription = discription
        crop.water_sensitive = water_sensitive
        crop.max_temp = max_temp
        crop.min_temp = min_temp
        crop.best_temp = best_temp
        crop.reco_start = reco_start
        crop.reco_end = reco_end
        crop.distance = distance
        crop.ph = ph
        crop.author = author


        await crop.save()
        return res.json(crop)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'error came from edit crop base info' })
    }
})

//get crops list
router.get('/list', async (req, res) => {
    try {
        const crops = await Cropbase.findAll()
        return res.json(crops)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Something went wrong" })
    }
})

router.get('/search', async (req, res) => {
    // ?type=tom
    let type = req.query.type == null ? "" : req.query.type
    let water_sensitive = req.query.water_sensitive
    let season = req.query.season
    var month = req.query.month

    try {
        const crops = await Cropbase.findAll({
            where: {
                type: type == undefined ? { [Op.ne]: 'undefined' } : { [Op.like]: `%${type}%` },
                water_sensitive: water_sensitive == undefined ? { [Op.ne]: 0 } : { [Op.eq]: parseInt(water_sensitive) },
                season_string: season == undefined ? { [Op.ne]: 'undefined' } : {[Op.or]:{ [Op.like]: `%${season}%`}},
                reco_start: month == undefined ? { [Op.ne]: -1 } : { [Op.gte]: parseFloat(month) },
                reco_end: month == undefined ? { [Op.ne]: -1 } : { [Op.lte]: parseFloat(month) + 1 }
            }
        })

        return res.json(crops)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Something went wrong" })
    }
})

//find one crop base with kcvalue and temperature
router.get('/calvalue/:id', async (req, res) => {
    const id = req.params.id
    try {
        const crop = await Cropbase.findOne({
            where: { id },
            include: ['kcvalue', 'temperature']
        })

        return res.json(crop)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'error came from crop detail' })
    }
})


router.get('/detailinfo/:id', async (req, res) => {
    const id = req.params.id
    try {
        const cropAllInfo = await Cropbase.findOne({
            where: { id },
            include: [
                {
                    model: Kcvalue,
                    as: 'kcvalue',

                },
                {
                    model: Temperature,
                    as: 'temperature',

                },
                {
                    model: Fertilize,
                    as: 'fertilize',

                },
                {
                    model: CropPest,
                    as: 'croppest',
                    attributes: ['id'],
                    include: [
                        {
                            model: PestDisease,
                            as: 'pestdisease',
                            attributes: ['pic_path', 'name', 'name_en', 'type', 'discription'],
                        }

                    ]
                },

            ]
        })

        return res.json(cropAllInfo)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'error came from crop all detail' })
    }
})


//get crop's all pest information
router.get('/croppest/:cropId', async (req, res) => {
    const id = req.params.cropId
    try {
        const crop = await Cropbase.findOne({
            where: { id },
            include: [
                {
                    model: CropPest,
                    as: 'croppest',
                    attributes: ['id'],
                    include: [
                        {
                            model: PestDisease,
                            as: 'pestdisease',
                            attributes: ['pic_path', 'name', 'name_en', 'type', 'discription'],
                        }

                    ]
                },

            ]

        })

        return res.json(crop)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'error came from crop detail' })
    }
})


//crop like by user
router.get('/like/:cropId', async (req, res, next) => {
    const cropId = req.params.cropId

    try {
        const user = await Cropbase.findOne({
            where: { id: cropId },
            include: [
                {
                    model: UserLikeCrop,
                    as: 'userlikecrop',
                    attributes: ['userId'],
                    include: [
                        {
                            model: User,
                            as: 'user',
                            attributes: ['first_name', 'last_name', 'country', 'email', 'position'],
                        }

                    ]
                },

            ]

        })

        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'error came from user like' })
    }

})


// create relationship: pest and cropbase lookup 
router.post('/croppest', async (req, res) => {
    const { cropId, pestId } = req.body

    try {
        const post = await CropPest.create({ cropId, pestId })
        return res.json(post)
    } catch (err) {
        console.log(err)
    }
})

//delete crop and pest's relationship
router.delete('/croppest/delete/:id', async (req, res) => {
    const croppestId = req.params.id

    try {
        const croppest = await CropPest.findOne({ where: { id: croppestId } })
        await croppest.destroy()

        return res.json('crop pest got destoryed')
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;


