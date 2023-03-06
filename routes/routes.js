const express = require("express");
const Client = require('../models/clientModel')
const { check, validationResult } = require('express-validator')
const EmailSent = require('../helpers/confirmEmail')

const clientRouter = express.Router();

// @route POST api/clients
// @desc   Register user
// @access public

const errorArray = [check('name', 'name is required').not().isEmpty(),
check('email', 'Please include a valid email').isEmail(),
check('projDesc', 'projDesc is required').not().isEmpty().isLength({ max: 100 }),
check('budget', 'budget is required').not().isEmpty(),
check('compTime', 'completion time is required').not().isEmpty(),
check('budget', 'budget is required').not().isEmpty(),
check('msg', 'message is required').not().isEmpty()
]

clientRouter.post('/client',
    errorArray,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        }
        const { name, email, projDesc, budget, msg, compTime, contactMethod } = req.body;
        const client = await Client.findOne({ email })
        const newClient = await Client.create({ name, email, projDesc, budget, msg, compTime, contactMethod });
        if (client) {
          
            return res.status(400).json({ errors: [{ msg: "Client already exists" }] })
        }
        newClient.save().then(item => {
           console.log("item---------->>",item)
           if(item){
            EmailSent(item)
        }
            res.status(200).send(`fields are saved successfully !`)
           
        })
            .catch(err => {

                res.status(400).send("unable to save to database");
            });


    })
//    check('email', 'Please include a valid email').isEmail(),

clientRouter.post('/clientExist',
    check('email', 'Please include a valid email').isEmail(),

    async (req, res) => {
        const emailReg = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        const { email } = req.body;

        if (!(emailReg.test(email))) {
            return res.status(400).json({ msg: 'please enter the valid email' })
        }
        const client = await Client.findOne({ email })
        console.log('email exists-------->>>>', client)
        if (client) {
            return res.status(400).json({ msg: "User already exists" })
        }
        return res.status(200).json('unique client email')
    })
module.exports = clientRouter;