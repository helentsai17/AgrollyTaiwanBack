const express = require("express");
const router = express.Router();
const { User, Verifydata, Cropbase } = require("../models");

//create complain
router.post("/", async function (req, res, next) {
  const { userId, cropId, location, start_plant, issue_type, issue_state, feedback, meta, note} = req.body;
  try {
    const user = await User.findOne({ where: { uuid: userId } })
    const verify = Verifydata.create({
      userId:user.id,
      cropId,
      location,
      start_plant,
      issue_type,
      issue_state,
      feedback,
      meta,
      note
    });
    return res.json(verify);
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
});

//get all complain
router.get("/", function (req, res, next) {
  Verifydata.findAll({
    include: [
      {
        model: User,
        as: "user",
      },
      {
        model: Cropbase,
        as: "cropbase",
      },
    ],
  })
    .then((verify) => {
      res.json(verify);
    })
    .catch((err) => {
        res.status(409).json({ error: err.message })
    });
});

module.exports = router;
