const express = require('express')
const router = express.Router()
const { PestDisease, CropPestDisease } = require('../models')


router.post('/add', async (req, res) => {

    const { pic_ptah, name, name_en, type, feature ,discription } = req.body

    try {
        const cropBase = await PestDisease.create({ pic_ptah, name, name_en, type, feature ,discription})
        return res.json(cropBase)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'create pest disese infomation fall' })
    }


})

router.get('/list', async(req, res) =>{

    try {
        const pests = await PestDisease.findAll()
        return res.json(pests)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Something went wrong getting pests" })
    }
})


router.put('/pd/:id', async(req, res) =>{
    const pestId = req.params.id
    const { pic_ptah, name, name_en, type, feature ,discription } = req.body
    try {
        const pests = await PestDisease.findOne({where: {id:pestId}})
        
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

module.exports = router;