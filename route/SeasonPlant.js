const express = require('express')
const router = express.Router()
const { Seasonplant, Cropbase } = require('../models')

router.post('/add', async (req, res) => {
    const { cropId, daystring, plantseason, other_description, duration  } = req.body
 
    try {
        const seasonCropData = await Seasonplant.create({ cropId, daystring, plantseason, other_description, duration  })
        return res.json(seasonCropData)
    } catch (err) {
        console.log(err)
    }

})


router.put('/edit/:id', async(req, res) =>{
    const SeasonPlantId = req.params.id
    const { daystring, plantseason, other_description, duration  } = req.body
    
    try {
        const seasonplantedit = await Fertilize.findOne({where: {id:SeasonPlantId}})
        
        seasonplantedit.daystring = daystring
        seasonplantedit.plantseason = plantseason
        seasonplantedit.other_description = other_description
        seasonplantedit.duration = duration

        await seasonplantedit.save()
        return res.json(seasonplantedit)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'error came from edit seasonPlant' })
    }
})

module.exports = router;