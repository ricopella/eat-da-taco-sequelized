const express = require('express');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const routes = require("./controllers/taco_controller.js");
const sequelize = require('sequelize');
const app = express();
const port = process.env.PORT || 3000;
var db = require("./models");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

db.sequelize.sync().then(function() {

    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    });
});