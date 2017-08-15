const express = require('express');
const db = require('../models/');
const router = express.Router();
const path = require("path");

module.exports = function(app) {
    // send root to index
    app.get("/", (req, res) => {
        // res.redirect("/tacos");
        res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    });

    router.get("/tacos", function(req, res) {
        console.log(res);
        db.Tacos2.findAll({
            include: [db.tacoName]
        }).then(function(result) {
            console.log(result);
            // var hbsObject = { taco: result };
            res.render("index", hbsObject);
        })
    })



    // root directory renders index.handblebars
    // router.get("/", (req, res) => {
    //     db.Taco.findAll({
    //         include: [db.Tacos]
    //     }).then((hbsObject) => {
    //         res.render(hbsObject);
    //     });
    // });

    // router.post("/", (req, res) => {
    //     taco.insert("taco_name", req.body.taco_name, function() {
    //         res.redirect("/");
    //     });
    // });

    // router.put("/:id", (req, res) => {
    //     // id of clicked button
    //     let condition = "id = " + req.params.id;
    //     // change value to true - aka devoured!
    //     taco.update({
    //         devoured: req.body.devoured
    //     }, condition, function() {
    //         res.redirect("/");
    //     });
    // });
};