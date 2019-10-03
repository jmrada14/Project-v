require("dotenv").config();
let session = require("express-session");
let express = require("express");
let app = express();
let exphbs = require("express-handlebars");
let db = require("./models");
let http = require("http").Server(app);
let passport = require("./config/middleware/passport");
let io = require("socket.io")(http);
let PORT = process.env.PORT || 2000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
require("./socket/socketio")(io);
// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/authroute")(app);
require("./routes/htmlRoutes")(app);

let syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  console.log("test");
});
// db.User.create({
//   username: "juan",
//   password: "1234"
// });

app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;
