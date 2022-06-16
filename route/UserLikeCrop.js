const express = require('express')
const router = express.Router()
const { UserLikeCrop, Cropbase } = require('../models')


router.post('/add', (req, res) => {


    const userLikeCrop = {
        userId: req.body.userId,
        cropId: req.body.cropId
    }

    UserLikeCrop.findOne({
        where: {
            userId: req.body.userId,
            cropId: req.body.cropId
        }
    })
        .then(exit => {
            if (!exit) {
                UserLikeCrop.create(userLikeCrop)
                    .then(() =>
                        res.json({ status: "user like crop created" }))
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            } else {
                res.status(500).json({ error: 'favorite already exit' })
            }
        })
})

//find all the user like crop
router.get('/:userId', function (req, res, next) {
    
    UserLikeCrop.findAll({
      where: { userId: req.params.userId },
      attributes: ['userId', 'cropId'],
      include: 'cropbase'

    }).then( userlike => {
      res.json(userlike)
    }).catch(err => {
        res.send('error: ' + err)
    })
  
})



//Todo: delect favorate using cid and rid
router.delete("/delete/:cid/:pid",function(req, res, next){
    UserLikeCrop.destroy({
        where:{
            userId:req.params.cid,
            userId:req.params.pid
        }
    })
    .then(()=>{
        res.json({status:"the like will not longer exit, but you can get it back by create in again"})
    })
    .catch((error)=>{
        res.send('error: '+ error)
    })

})



module.exports = router;