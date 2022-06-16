const express = require('express')
const router = express.Router()

const { Cropbase, kcvalue, Temperature, CropPest, PestDisease } = require('../models')



router.post('/add', async (req, res) => {
    const { common_name, bio_name, chinese_name, sub_names, season_string, total_grow_time, type, discription, water_sensitive, max_temp, min_temp, best_temp, reco_start, reco_end, distance, ph, author } = req.body

    const cropBasedata = {
        common_name: common_name,
        bio_name: bio_name,
        chinese_name: chinese_name,
        sub_names: sub_names,
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

//get crops list
router.get('/list', async (req, res) => {
    try {
        const crops = await Cropbase.findAll()
        return res.json(Cropbase)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Something went wrong" })
    }
})

//find one
router.get('/detailinfo/:id', async (req, res) => {
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



// add pest to cropbase
router.post('/croppest', async (req, res) => {
    const { cropId, pestId } = req.body

    try {
        const post = await CropPest.create({ cropId, pestId })
        return res.json(post)
    } catch (err) {
        console.log(err)
    }
})

router.post('/croppest/delete/:id', async (req, res) => {
    const croppestId = req.params.id

    try {
        const croppest = await CropPest.findOne({where:{id:croppestId}})
        await croppest.destroy()

        return res.json('crop pest got destoryed')
    } catch (err) {
        console.log(err)
    }
})


router.get('/croppest/:id', async (req, res) => {
    const id = req.params.id
    try {
        const crop = await Cropbase.findOne({
            where: { id },
            include: [
                {
                    model: CropPest,
                    as: 'croppest',
                    attributes : ['id'],
                    include: [
                        { 
                            model: PestDisease , 
                            as:'pestdisease',
                            attributes : ['pic_path','name','name_en','type','discription'],
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




module.exports = router;