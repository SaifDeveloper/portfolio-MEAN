const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Contact= require('../models/contact');


router.post('/contactme',function (req,res,next) {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    Contact.addContact(newContact,function (err,contact) {
        if(err){
            res.json({success:false,msg:'failed to submit feedback/query'});
        }else {
            res.json({success:true,msg:'feedback/query submitted'})
        }
    });

});


module.exports = router;
