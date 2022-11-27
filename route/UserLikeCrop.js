const express = require('express')
const router = express.Router()
const { User ,UserLikeCrop, Cropbase } = require('../models')


router.post('/add', async(req, res) => {
    const {uuid, cropId} = req.body;

    const user = await User.findOne({ where: { uuid: uuid } })

    UserLikeCrop.findOne({
        where: {
            userId: user.id,
            cropId: cropId
        }
    }).then(exit => {
            if (!exit) {
                UserLikeCrop.create({userId: user.id, cropId})
                    .then(() =>
                        res.json({ status: "user like crop created" }))
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            } else {
                res.status(500).json({ error: 'user like crop already exit' })
            }
        })
})


router.delete("/delete/:uuid/:cropId",async(req, res, next) =>{
    const UserUuid = req.params.uuid
    const user = await User.findOne({ where: { uuid: UserUuid } })

    UserLikeCrop.destroy({
        where:{
            userId: user.id,
            cropId: req.params.cropId
        }
    })
    .then(()=>{
        res.json({status:"the like will not longer exit, but you can get it back by create in again"})
    })
    .catch((error)=>{
        res.send('error: '+ error)
    })

})


//find all the user like crop
router.get('/:userUuid', async function (req, res, next) {

    const user = await User.findOne({ where: { uuid: req.params.userUuid } })
    
    UserLikeCrop.findAll({
      where: { userId: user.id },
      attributes: ['userId', 'cropId'],
      include: 'cropbase'

    }).then( userlike => {
      res.json(userlike)
    }).catch(err => {
        res.send('error: ' + err)
    })
  
})


module.exports = router;