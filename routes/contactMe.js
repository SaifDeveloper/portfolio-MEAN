const express = require('express');
const router = express.Router();
const Contact= require('../models/contactModel');


router.post('/',function (req,res,next) {
    console.log("inside contact me!");
    // console.log(req.body);

    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    Contact.addContact(newContact,function (err,contact) {
        // console.log("in addContact")
        // console.log("contact:",contact);
        if(err){
            console.log("error happened!");
            // res.json({success:false,msg:'failed to submit feedback/query'});
            res.json(false);
        }else {
            // res.json({success:true,msg:'feedback/query submitted'})
            res.json(true);
        }
    });

});


module.exports = router;
