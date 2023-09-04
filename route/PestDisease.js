const express = require('express')
const router = express.Router()
const { PestDisease, CropPest, Cropbase } = require('../models')
const multer = require('multer')
const upload = multer({ dest: 'pestuploads/' })
const { uploadFile, getFileStream } = require('../s3')
require('dotenv').config

router.post('/add', async (req, res) => {

    const { pic_path, name, name_en, type, feature, discription } = req.body

    const pestDiseasedata = {
        pic_path: 'pest_defult.jpeg',
        name: name,
        name_en: name_en,
        type: type,
        feature: feature,
        discription: discription,
    }

    try {
        const cropPest = await PestDisease.create(pestDiseasedata)
        return res.json(cropPest)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'create pest disese infomation fall' })
    }


})

router.get('/images/:key', (req, res) => {
    const key = req.params.key
    const readStream = getFileStream(key)
    console.log(readStream)
    readStream.pipe(res)
})

//find one crop base with kcvalue and temperature
router.get('/detailInfo/:id', async (req, res) => {
    const pestId = req.params.id
    try {
        const pestinfo = await PestDisease.findOne({
            where: { id:pestId },
        })

        return res.json(pestinfo)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'error came from pest detail' })
    }
})

router.put('/uploadimage/:pestId', upload.single('file'), async (req, res) => {
    const pestId = req.params.pestId

    try {

        const file = req.file
        console.log(file)
        const result = await uploadFile(file)
        console.log(result)
        const pests = await PestDisease.findOne({ where: { id: pestId } })
        pests.pic_path = `${process.env.BACKENDURL}/pestdisease/images/${result.Key}`
        await pests.save()
        return res.json(pests)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'pest image storage error' })
    }

})

router.put('/edit/:id', async (req, res) => {
    const pestId = req.params.id
    const { pic_ptah, name, name_en, type, feature, discription } = req.body
    try {
        const pests = await PestDisease.findOne({ where: { id: pestId } })

        pests.pic_ptah = pic_ptah
        pests.name = name
        pests.name_en = name_en
        pests.type = type
        pests.feature = feature
        pests.discription = discription

        await pests.save()
        return res.json(pests)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'error came from getting user question' })
    }
})

router.get('/list', async (req, res) => {

    try {
        const pests = await PestDisease.findAll()
        return res.json(pests)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Something went wrong getting pests" })
    }
})

router.get('/list_pest_crops', async (req, res) => {
   
    try {
        const pests = await PestDisease.findAll({
            include: [
                {
                    model: CropPest,
                    as: 'croppest',
                    attributes: ['id','comment'],
                    include: [
                        {
                            model: Cropbase,
                            as: 'cropbase',
                            attributes: ['id','common_name', 'chinese_name', 'crop_image'],
                        }

                    ]
                },
            ]
        })
        return res.json(pests)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Something went wrong List pest crops" })
    }
})



router.get('/pest_crops/:pestId', async (req, res) => {
    const id = req.params.pestId

    try {
        const pests = await PestDisease.findOne({
            where: { id },
            include: [
                {
                    model: CropPest,
                    as: 'croppest',
                    attributes: ['id','comment'],
                    include: [
                        {
                            model: Cropbase,
                            as: 'cropbase',
                            attributes: ['id','common_name', 'chinese_name', 'crop_image'],
                        }

                    ]
                },
            ]
        })
        return res.json(pests)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Something went wrong List pest crops" })
    }
})

module.exports = router;