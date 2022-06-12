const express = require('express')
const router = express.Router()

const { Cropbase } = require('../models')


router.post('/add', async (req, res) => {
    const { common_name
            ,bio_name
            ,chinese_name
            ,sub_names
            ,season_string
            ,total_grow_time
            ,type
            ,discription
            ,water_sensitive
            ,max_temp
            ,min_temp
            ,best_temp
            ,reco_start
            ,reco_end
            ,distance
            ,ph
            ,author } = req.body

    const cropBasedata = {
        common_name: common_name,
        bio_name: bio_name,
        chinese_name:chinese_name,
        sub_names: sub_names,
        season_string: season_string,
        type: type,
        total_grow_time:total_grow_time,
        discription: discription,
        water_sensitive: water_sensitive,
        crop_image:'crop_defult.jpeg',
        max_temp: max_temp,
        min_temp: min_temp,
        best_temp: best_temp,
        reco_start: reco_start,
        reco_end: reco_end,
        distance: distance,
        ph: ph,
        author: author,
    }

    try{
        const cropBase = await Cropbase.create(cropBasedata)
        return res.json(cropBase)
    }catch(err){
        console.log(err)
        return res.status(500).json({error:'create crop base infomation fall'})
    }


})



module.exports = router;