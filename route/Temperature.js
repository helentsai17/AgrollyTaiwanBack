const express = require('express')
const router = express.Router()
const { Temperature, Cropbase } = require('../models')

router.post('/add', async (req, res) => {
    const { cropId, initial_max_temp, initial_min_temp, dev_max_temp, dev_min_temp, mid_max_temp, mid_min_temp, last_max_temp, last_min_temp } = req.body

    try {
        const crop = await Cropbase.findOne({ where: { id: cropId } })
        const kcvalue = await Temperature.create({ cropId: crop.id, initial_max_temp, initial_min_temp, dev_max_temp, dev_min_temp, mid_max_temp, mid_min_temp, last_max_temp, last_min_temp, harvest_max_temp, harvest_min_temp })
        return res.json(kcvalue)
    } catch (err) {
        console.log(err)
    }
})


router.put('/edit/:id', async (req, res) => {
    const Id = req.params.id
    const { initial_max_temp, initial_min_temp, dev_max_temp, dev_min_temp, mid_max_temp, mid_min_temp, last_max_temp, last_min_temp, harvest_max_temp, harvest_min_temp } = req.body

    try {
        const temperature = await Kcvalue.findOne({ where: { id: Id } })

        temperature.initial_max_temp = initial_max_temp
        temperature.initial_min_temp = initial_min_temp
        temperature.dev_max_temp = dev_max_temp
        temperature.dev_min_temp = dev_min_temp
        temperature.mid_max_temp = mid_max_temp
        temperature.mid_min_temp = mid_min_temp

        temperature.last_max_temp = last_max_temp
        temperature.last_min_temp = last_min_temp
        temperature.harvest_max_temp = harvest_max_temp
        temperature.harvest_min_temp = harvest_min_temp

        await temperature.save()
        return res.json(temperature)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'error came from edit temperature' })
    }
})

module.exports = router;