const mongoose = require("mongoose");
const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 32
    },
    email: {
        type:String,
        required: true 
    },
    projDesc: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },

    compTime: {
        type: String,
        
    },
    contactMethod : {
        type: String,
     
    },
    msg: {
        type: String,
      
    }

})

module.exports = mongoose.model("Client", ClientSchema );

