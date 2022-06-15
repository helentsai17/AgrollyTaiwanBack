const express = require('express')
const router = express.Router()
const { Temperature, Cropbase } = require('../models')

router.post('/add', async (req, res) => {
    const { cropId, initial_max_temp, initial_min_temp, dev_max_temp, dev_min_temp, mid_max_temp, mid_min_temp, last_max_temp, last_min_temp } = req.body

    try {
        const crop = await Cropbase.findOne({ where: { id: cropId } })
        const kcvalue = await Temperature.create({ cropId: crop.id, initial_max_temp, initial_min_temp, dev_max_temp, dev_min_temp, mid_max_temp, mid_min_temp, last_max_temp, last_min_temp })
        return res.json(kcvalue)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;