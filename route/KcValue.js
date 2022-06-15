const express = require('express')
const router = express.Router()
const { Kcvalue, Cropbase } = require('../models')

router.post('/kcvalue', async (req, res) => {
    const { cropId, location, inital_kc, dev_kc, mid_kc, last_kc, harvest_kc, inital_days, dev_days, mid_days, last_days, harvest_days, ref } = req.body

    try {
        const crop = await Cropbase.findOne({ where: { id: cropId } })
        const kcvalue = await Kcvalue.create({ cropId: crop.id, location, inital_kc, dev_kc, mid_kc, last_kc, harvest_kc, inital_days, dev_days, mid_days, last_days, harvest_days, ref  })
        return res.json(kcvalue)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;