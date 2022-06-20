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


router.put('/edit/:id', async(req, res) =>{
    const FertilizeId = req.params.id
    const { stage, content  } = req.body
    
    try {
        const fertilize = await Fertilize.findOne({where: {id:FertilizeId}})
        
        fertilize.stage = stage
        fertilize.content = content

        await fertilize.save()
        return res.json(fertilize)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'error came from edit fertilize' })
    }
})


module.exports = router;