const mongoose = require('mongoose');

//contact Schema
const ContactSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
});

const Contact = module.exports = mongoose.model('Contact',ContactSchema);

module.exports.addContact = function(newContact, callback) {
    // console.log("entered!",newContact);
    newContact.save(callback);
};