const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("general/home");
});


router.get("/aboutme", (req,res) =>{
    res.render("general/aboutme");
});

router.get("/registration", (req,res) =>{
    res.render("general/registration");
});
module.exports = router;