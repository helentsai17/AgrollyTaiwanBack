const express = require("express");
const router = express.Router();
const { User, UserCrop, Cropbase } = require("../models");

//add crop to user
router.post("/", async function (req, res, next) {
  const { useruuid, cropId, start_date, field_size, location, note, meta } =
    req.body;
  var startDate = new Date(start_date)
  try {
    const user = await User.findOne({ where: { uuid: useruuid } });
    const usercrop = UserCrop.create({
      userId: user.id,
      cropId,
      start_date:startDate,
      field_size,
      location,
      note,
      meta,
    });
    return res.json(usercrop);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
});

//update userCrop
router.put('/edit/:uuid', async (req, res) =>{
    const usercropId = req.params.uuid
    const { field_size, note } = req.body;

    try{
        const usercrop = await UserCrop.findOne({ where: { uuid: usercropId } })
        usercrop.field_size = field_size
        usercrop.note = note
        
        Usercrop.save()

        return res.json(usercrop)
    }catch(err){
        return res.status(500).json({ error: 'did not update successfully' })
    }

})

//update metadata crop time
router.put('/metaupdate/:uuid', async (req, res) =>{
    const usercropId = req.params.uuid
    const { meta } = req.body;

    try{
        const usercrop = await UserCrop.findOne({ where: { uuid: usercropId } })
        usercrop.meta = meta
        Usercrop.save()

        return res.json(usercrop)
    }catch(err){
        return res.status(500).json({ error: 'did not update successfully' })
    }

})

//update show to detete crop
router.put('/delete/:uuid', async (req, res) =>{
    const usercropId = req.params.uuid

    try{
        const usercrop = await UserCrop.findOne({ where: { uuid: usercropId } })
        usercrop.show = false
        Usercrop.save()

        return res.json(usercrop)
    }catch(err){
        return res.status(500).json({ error: 'did not update successfully' })
    }

})

//get all crop that the user plan
router.get("/:userUuid", async function (req, res, next) {
  try {
    const user = await User.findOne({ where: { uuid: req.params.userUuid } });
    const usercrop = UserCrop.findAll({
      where: { userId: user.id , show:true},
      include: [
        { model: User, as: "user" },
        { model: Cropbase, as: "cropbase" },
      ],
    });
    return res.json(usercrop);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

//find crop plant by users
router.get("/:cropId", async function (req, res, next) {
  try {
    const usercrop = UserCrop.findAll({
      where: { cropId: req.params.cropId },
      include: [
        { model: User, as: "user" },
        { model: Cropbase, as: "cropbase" },
      ],
    });
    return res.json(usercrop)
  } catch (err) {
    return res.status(500).json({ error: err.message });

  }
});






module.exports = router;
