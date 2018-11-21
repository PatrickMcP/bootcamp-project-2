/* eslint-disable no-unused-vars */
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

//Passport
var passport = require("passport");
var flash = require("connect-flash");

// eslint-disable-next-line no-unused-vars
=======

var cookieParser = require("cookie-parser");
var session = require("express-session"); // cookie session
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    key: "user_sid",
    secret: "goN6DJJC6E287cC77kkdYuNuAyWnz7Q3iZj8",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  })
);

=======
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

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
require("./routes/htmlRoutes")(app, passport);
require("./controllers/account-controller")(app, passport);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
