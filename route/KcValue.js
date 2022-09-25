const express = require('express')
const router = express.Router()
const { Kcvalue, Cropbase } = require('../models')

router.post('/kcvalue', async (req, res) => {
    const { cropId, location, inital_kc, dev_kc, mid_kc, last_kc, harvest_kc, inital_days, dev_days, mid_days, last_days, harvest_days, version ,ref } = req.body

    try {
        const crop = await Cropbase.findOne({ where: { id: cropId } })
        console.log(crop)
        const kcvalue = await Kcvalue.create({ cropId: crop.id, location, inital_kc, dev_kc, mid_kc, last_kc, harvest_kc, inital_days, dev_days, mid_days, last_days, harvest_days, version ,ref  })
        return res.json(kcvalue)
    } catch (err) {
        console.log(err)
    }
})


router.put('/edit/:id', async(req, res) =>{
    const Id = req.params.id
    const { inital_kc, dev_kc, mid_kc, last_kc, harvest_kc, inital_days, dev_days, mid_days, last_days, harvest_days, version } = req.body
    
    try {
        const kcvalue = await Kcvalue.findOne({where: {id:Id}})
        
       
        kcvalue.inital_kc = inital_kc
        kcvalue.dev_kc = dev_kc
        kcvalue.mid_kc = mid_kc
        kcvalue.last_kc = last_kc
        kcvalue.harvest_kc = harvest_kc

        kcvalue.inital_days = inital_days
        kcvalue.dev_days = dev_days
        kcvalue.mid_days = mid_days
        kcvalue.last_days = last_days
        kcvalue.harvest_days = harvest_days

        kcvalue.version = version
       


        await kcvalue.save()
        return res.json(kcvalue)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'error came from edit fertilize' })
    }
})


module.exports = router;