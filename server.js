require("dotenv").config();
let express = require("express");
let PORT = process.env.PORT || 3000;
let passport = require('passport');
let http = require('http').Server(app);
let io = require('socket.io')(http);
let session = require("express-session");
let LocalStrategy = require("passport-local").Strategy;

// Middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
io.use( (socket, next) => {
  sessionMiddleware(socket.request, {}, next);
});

// Middleware Helpers
let sessionMiddleware = session({
  secret: "session secret",
  resave: false,
  saveUninitialized: true
});
// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

let syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


io.on("connection", () =>{
  console.log("a user is connected");
});

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
