// let db = require("../models");

// //get all messages
// module.exports = app => {
//   app.get("/api/messages", (req, res) => {
//     let query = {};
//     if (req.query.user_id) {
//       query.UserId = req.query.user_id;
//     }
//     db.Message.findAll({
//       where: query,
//       include: [db.User]
//     }).then(dbMessage => {
//       res.json(dbMessage);
//     });
//   });
//   //get message by user
//   app.get("/api/messages/:id", (req, res) => {
//     db.Message.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.User]
//     }).then(dbMessage => {
//       res.json(dbMessage);
//     });
//   });
//   //POST message
//   app.post("/api/messages", (req, res) => {
//     db.Message.create(req.body).then(dbMessage => {
//       res.json(dbMessage);
//     });
//   });
//   //GET ROOM
//   app.get("/api/room", (req, res) => {
//     let query = {};
//     if (req.query.user_id) {
//       query.UserId = req.query.user_id;
//     }
//     db.Room.findAll({
//       where: query,
//       include: [db.User]
//     }).then(dbMessage => {
//       res.json(dbMessage);
//     });
//   });
//   // POST room
//   app.post("/api/room", (req, res) => {
//     db.Room.create(req.body).then(dbRoom => {
//       res.json(dbRoom);
//     });
//   });
// };
