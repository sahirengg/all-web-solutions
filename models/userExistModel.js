const mongoose = require("mongoose");
const USerExistSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true 
    },

})

module.exports = mongoose.model("UserExist", USerExistSchema );

