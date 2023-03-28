const mongoose = require("mongoose");



const connectDB = async () => {
    try {
      console.log("mongodb connected succesfully")
       (mongoose.connect(process.env.MONGO_ATLAS, { useNewUrlParser: true,useUnifiedTopology: true}));
      

    }  catch (error) {
       console.error(error.message)
      //  process.exit(1)
    }
}

module.exports = connectDB;
// export default connectDB;