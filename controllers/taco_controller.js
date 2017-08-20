const express = require('express'),
    db = require('../models'),
    router = express.Router();

router.get("/", (req, res) => { return res.redirect("/tacos") });

router.get("/tacos", (req, res) => {
    // console.log(res);
    db.tacos2s.findAll({
        include: [db.Customer],
        order: [
            ["tacoName", "ASC"]
        ]
    }).then((result) => {
        let hbsObject = { taco: result };
        return res.render("index", hbsObject);
    })
});

router.post("/", (req, res) => {
    db.tacos2s.create({ tacoName: req.body.taco_name }).then(() => {
        return res.redirect("/tacos");
    }).catch(error => {
        if (error) {
            console.log(JSON.stringify(error));
        }
    })
});

router.put("/:id", (req, res) => {
    // id of clicked taco
    let tacoId = req.params.id;
    let customerName = req.body.customer_name;

    db.Customer.findAll({
        where: {
            customer: customerName
        }
    }).then(customer => {
        // if Customer does not exist
        if (customer.length === 0) {
            db.Customer.create({
                customer: req.body.customer_name
            }).then(newCustomer => {
                db.tacos2s.update({
                    devoured: true,
                    CustomerId: newCustomer.id
                }, {
                    where: {
                        id: req.params.id
                    }
                }).then(taco => {
                    res.redirect('/')
                }).catch(error => {
                    console.log(error);
                }).catch(error => {
                    console.log(error);
                })
            })
        } else {
            // if customer already exists
            console.log("this" + customer[0]);
            db.tacos2s.update({
                devoured: true,
                CustomerId: customer[0].id
            }, {
                where: {
                    id: req.params.id
                }
            }).then(taco => {
                res.redirect('/');
            }).catch(error => {
                console.log(error);
            }).catch(error => {
                if (error) {
                    console.log(error);
                }
            })

        }
    });
})

module.exports = router;