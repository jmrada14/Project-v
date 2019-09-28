let db = require("../models");

//get all messages
module.exports = (app) => {

  app.get("/api/messages", (req, res) => {
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
  app.get("/api/messages/:id", (req, res) => {
    db.Message.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then((dbMessage) => {
      res.json(dbMessage);
    });
  });
};
