const express = require("express");
const User = require("../modles/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/',[
    body('email', "Enter a valid Email").isEmail(),
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('password', "Password must be atleast 5 characters").isLength({ min: 5 })
] ,(req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user))
    .catch(err=> {console.log(err)
    res.json({error : "Please enter a unique value for email", message: err.message})})

})

module.exports = router