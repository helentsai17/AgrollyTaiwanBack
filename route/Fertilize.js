const express = require('express')
const router = express.Router()
const { Fertilize, Cropbase } = require('../models')

router.post('/add', async (req, res) => {
    const { cropId, stage, content  } = req.body

    try {
        const crop = await Cropbase.findOne({ where: { id: cropId } })
        const fertilize = await Fertilize.create({ cropId: crop.id, stage, content   })
        return res.json(fertilize)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;