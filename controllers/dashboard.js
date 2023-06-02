// const passport = require("passport");
// const validator = require("validator");
// const User = require("../models/User");

module.exports = {
    getDashboard: (req,res) => {
        res.render("dashboard.ejs");
    },
}
