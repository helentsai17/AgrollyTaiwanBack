const express = require("express");
const router = express.Router();
const { User, Verifydata, Cropbase } = require("../models");

//create complain
router.post("/", async function (req, res, next) {
  const { useruuid, cropId, location, issue_type, feedback } = req.body;
  try {
    const user = await User.findOne({ where: { uuid: useruuid } })
    const verify = Verifydata.create({
      userId:user.id,
      cropId,
      location,
      issue_type,
      feedback,
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
