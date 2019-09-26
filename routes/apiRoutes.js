
let router = require('express').Router();
let db = require('/models')

module.exports = router;

// GET /api/messages
router.get('/', async (req, res, next) => {
  try {
    let messages = await db.Message.findAll();
    res.json(messages);
  } catch (err) {
    next(err);
  }
});

// POST /api/messages

router.post('/', async (req, res, next) =>{

  // We don't have proper users yet
  try {
    let user = await db.User.findOrCreate({
      where: {
        name: req.body.name || 'Juan'
      }
    });
    let message = Message.build(req.body);
    message.set(User, { save: false });
    await message.save()
    let returnMessage = message.toJSON();
    returnMessage.user = user;
    res.json(returnMessage);
  } catch (err) {
    next(err);
  }
});
