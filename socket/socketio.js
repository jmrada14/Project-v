let db = require("../models");
console.log(db);
module.exports = io => {
  //listen on every connection
  io.on("connection", socket => {
    console.log("New user connected");
    //default username
    socket.username = "Anonymous";

    //listen on every connection
    io.on("connection", socket => {
      console.log("New user connected");
      //default username
      socket.username = "Anonymous";

      //listen on new_message
      socket.on("new_message", data => {
        //broadcast the new message
        io.sockets.emit("new_message", {
          message: data.message,
          username: socket.username
        });
      });

      //listen on typing
      socket.on("typing", data => {

        socket.broadcast.emit("typing", { username: socket.username });
        console.log(data);

      });

      //listen on new_message
      socket.on("new_message", data => {
        //broadcast the new message
        io.sockets.emit("new_message", {
          message: data.message,
          username: socket.username
        });
      });
    });
    return io;
  });
};

//test
