let db = require("../models");

module.exports = function(app) {
 //GET all messages

  app.get('/messages', (req, res) => {
    db.Message.findAll({},(err, messages)=> {
      res.send(messages);
    })
  });



  // Create a new message

};app.post('/messages', (req, res) => {
    let message = new db.Message(req.body);
    message.save((err) =>{
      if(err){ sendStatus(500);}
      let io = require('socket.io');
      io.emit('message', req.body);
      res.sendStatus(200);
    });
  });



