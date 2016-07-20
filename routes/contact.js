var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render("contact", {
        title: "Vue.js/Express.js Registration Example Application",
        contact: true,
    });
});

module.exports = router;
