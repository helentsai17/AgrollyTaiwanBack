const express = require('express')
const router = express.Router()
const { Fertilize, Cropbase } = require('../models')

router.post('/add', async (req, res) => {
    const { cropId, stage, content  } = req.body
    console.log(cropId)
    console.log(stage)
    console.log(content)
    try {
        const crop = await Cropbase.findOne({ where: { id : cropId } })
        const fertilize = await Fertilize.create({ cropId:crop.id , stage, content   })
        return res.json(fertilize)
    } catch (err) {
        console.log(err)
    }

})

router.get('/:cropid', async(req, res) =>{
    const cropId = req.params.cropid

    try {
        const fertilize = await Fertilize.findAll({
          where: { cropId: cropId}, 
          order: [['stage', 'ASC']]
        });
    
        return res.json(fertilize);
      } catch (err) {
        return res.status(500).json({ error: "error from " + err.message });
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

router.delete('/delete/:id', async (req, res) => {
    const Id = req.params.id

    try {
        const fertilize = await Fertilize.findOne({ where: { id: Id } })
        await fertilize.destroy()

        return res.json('crop pest got destoryed')
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;