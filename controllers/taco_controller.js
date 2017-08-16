const express = require('express');
const db = require('../models');
const router = express.Router();

// root directory renders index.handblebars
router.get("/", (req, res) => {
    res.redirect("/tacos");
});

router.get("/tacos", function(req, res) {
    console.log(res);
    db.tacos2s.findAll().then(function(result) {
        console.log(result);
        var hbsObject = { taco: result };
        res.render("index", hbsObject);
    })
})

router.post("/", (req, res) => {
    db.tacos2s.create({ tacoName: req.body.taco_name, devoured: req.body.devoured }).then(function() {
        res.redirect("/tacos");
    });
});

router.put("/:id", (req, res) => {
    // id of clicked button
    let condition = "id = " + req.params.id;
    // change value to true - aka devoured!
    db.tacos2s.update({ devoured: req.body.devoured }, {
        where: { id: req.params.id }
    }).then(function() {
        res.redirect("/tacos");
    });
});

module.exports = router;