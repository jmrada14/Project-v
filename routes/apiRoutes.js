
let router = require("express").Router();
let db = require("/models");

module.exports = router;

// GET /api/messages
//Async and await were taken out
router.get("/", (req, res, next) => {
  try {
    let messages = db.Message.findAll();
    res.json(messages);
  } catch (err) {
    next(err);
  }
});

// POST /api/messages

router.post("/", (req, res, next) => {

  // We don"t have proper users yet
  try {
    let user = db.User.findOrCreate({
      where: {
        name: req.body.name || "Juan"
      }
    });
    let message = Message.build(req.body);
    message.set(User, { save: false });
    message.save();
    let returnMessage = message.toJSON();
    returnMessage.user = user;
    res.json(returnMessage);
  } catch (err) {
    next(err);
  }
});
