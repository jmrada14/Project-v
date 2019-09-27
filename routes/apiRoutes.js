let router = require("express").Router();
let db = require("/models");

module.exports = router;
//get all messages
router.get("/api/messages", (req, res) => {
  let query = {};
  if (req.query.user_id) {
    query.UserId = req.query.user_id;
  }
  db.Message.findAll({
    where: query,
    include: [db.User]
  }).then((dbMessage) => {
    res.json(dbMessage);
  });
});
//get message by user
router.get("/api/messages/:id", (req, res) => {
  db.Message.findOne({
    where: {
      id: req.params.id
    },
    include: [db.User]
  }).then((dbMessage) => {
    res.json(dbMessage);
  });
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
