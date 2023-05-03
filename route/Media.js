const express = require('express');
const { appendFile } = require('fs');
const router = express.Router()
const { Media } = require('../models')

router.post('/', async(req,res) =>{
    const {cropId, link, type} = req.body;

    try{
        await Media.create({cropId, link, type})

        return res.json(Media);

    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
})

router.get('/', async(req,res) =>{
    try{
        const mediaSourse = await Media.findAll()
        return res.json(mediaSourse)
    }catch(err){
        console.log(err)
        return res.status(500).json({error: "something when wrong in media get"})
    }
})

router.get('/:cropid', async(req,res) =>{
    const cropId = req.params.cropid

    try{
        const mediaSourse = await Media.findAll({
            where:{cropId}
        })
        return res.json(mediaSourse)
    }catch(err){
        console.log(err)
        return res.status(500).json({error: "something when wrong in media get"})
    }
})

router.get('/:type/:cropid',async(req,res) =>{
    const type = req.params.type
    const cropId = req.params.cropid

    try {
        const mediaSourse = await Media.findAll({
            where:{[Op.and]: [
                { type: type },
                { cropId: cropId }
              ]
            }   
        })
    }catch(err){
        console.log(err)
        return res.status(500)
    }
})

router.delete('/:id', async(req,res) =>{
    const id = req.params.id
    try{
        const media = await Media.findOne({where:{id}})
        await media.destroy()
        return res.json({message: 'Media deleted'})
    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Something went wrong in deleting the media'})
    }
})

router.put('/:id', async(req, res) =>{
    const id = req.params.id
    const {link, type} = req.body
    
    try{
        const media = await Media.findOne({where : {id}})

        media.link = link
        media.type = type

        await media.save()

        return res.json(media)

    }catch(err){
        console(err);
        return res.status(500).json({error: 'Something went wrong in updating media'})

    }
    
})

module.exports = router;