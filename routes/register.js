var express = require('express');
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
    res.render("register", {
        title: "Vue.js/Express.js Registration Example Application",
        register: true,
        component: "register",
    });
});

router.post("/", function(request, response, next) {
    var user = request.body;
    
    models.user.create(user).then(function(user) {
        response.send(user);
    }).catch(function(errors) {
        response.status(500).send({
            message: "Whoops! Something went awry!",
            sequelizeErrors: errors,
        });
    });
});

module.exports = router;
