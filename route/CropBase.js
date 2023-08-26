const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'cropuploads/' })
const { uploadFile, getFileStream } = require('../s3')
require('dotenv').config

const router = express.Router()

const { Cropbase, Kcvalue, Temperature, Fertilize, CropPest, PestDisease, User, UserLikeCrop, Media, Seasonplant,sequelize } = require('../models')
const { Op } = require("sequelize");

//add crop base information
router.post('/add', async (req, res) => {
    const { common_name, bio_name, chinese_name, breed, variety, season_string, total_grow_time, type, discription, water_sensitive, max_temp, min_temp, best_temp, reco_start, reco_end, distance, ph, author } = req.body

    const cropBasedata = {
        common_name: common_name,
        bio_name: bio_name,
        chinese_name: chinese_name,
        breed: breed,
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
    const { common_name, bio_name, chinese_name, breed, variety, season_string, total_grow_time, type, discription, water_sensitive, max_temp, min_temp, best_temp, reco_start, reco_end, distance, ph, author } = req.body

    try {
        const crop = await Cropbase.findOne({ where: { id: cropId } })

        crop.common_name = common_name
        crop.bio_name = bio_name
        crop.chinese_name = chinese_name
        crop.breed = breed,
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
        const crops = await Cropbase.findAll({
            include: [
                {
                    model: Seasonplant,
                    as: 'seasonplant',

                },
            ]
        })
        return res.json(crops)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Something went wrong" })
    }
})

router.get('/search', async (req, res) => {
    // ?type=tom
    var type = req.query.type == '' ? "" : req.query.type
    var water_sensitive = (req.query.water_sensitive == null || req.query.water_sensitive == NaN) ? 0 : req.query.water_sensitive
    var season = req.query.season == '' ? '' :req.query.season

    console.log("type: "+ type + " water: " + water_sensitive + " season " + season)

    try {
        const crops = await Cropbase.findAll({
            where: {
                type: type == "" ? { [Op.ne]: 'undefined' } : { [Op.like]: `%${type}%` },
                water_sensitive: (water_sensitive == 0) ? { [Op.ne]: 0 } : { [Op.eq]: parseInt(water_sensitive) },
                season_string: ((season == "")) ? { [Op.ne]: 'undefined' } : {[Op.or]:{ [Op.like]: `%${season}%`}},
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
                    model: Seasonplant,
                    as: 'seasonplant',

                },
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
                    attributes: ['id','comment'],
                    include: [
                        {
                            model: PestDisease,
                            as: 'pestdisease',
                            attributes: ['pic_path', 'name', 'name_en', 'type', 'description'],
                        }

                    ]
                },
                {
                    model: Media,
                    as: 'media',

                },
                

            ],
            order: [[{ model: Fertilize, as: 'fertilize' }, 'stage', 'ASC']]
        })

        return res.json(cropAllInfo)
    } catch (err) {
        console.log( "fix this "+ err)
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
                    attributes: ['id','comment'],
                    include: [
                        {
                            model: PestDisease,
                            as: 'pestdisease',
                            attributes: ['pic_path', 'name', 'name_en', 'type', 'discription'],
                        },comment

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
    const { cropId, pestId, comment } = req.body

    try {
        if(!req.body.cropId){
            res.status(400)
            res.json({
              error:'crop id can not be null'
            })
        }

        if(!req.body.pestId){
            res.status(400)
            res.json({
              error:'pest Id can not be null'
            })
        }

        const post = await CropPest.create({ cropId, pestId, comment })
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


