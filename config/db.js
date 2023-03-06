const mongoose = require("mongoose");
const config = require('config');
const db = config.get('MONGOURI')


const connectDB = async () => {
    try {
      console.log("mongodb connected succesfully")
       (mongoose.connect(db, { useNewUrlParser: true,useUnifiedTopology: true}));
      

    }  catch (error) {
       console.error(error.message)
      //  process.exit(1)
    }
}

module.exports = connectDB;
// export default connectDB;