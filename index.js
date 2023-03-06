const express = require('express');
const clientRouter = require('./routes/routes');
// const router = require('./routes/clientRoute')
const connectDB = require('./config/db');
const cors = require('cors');
const  bodyParser = require('body-parser');
// const userExistRouter = require('./routes/userExistsRoute')

const PORT =  5000;



const app = express();
// database connection
connectDB();
// enabling CORS for all requests

// init middlewares
 app.use(express.json({extended:false})) 

app.use(cors());

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded
// app.use('/api', router);
app.use('/api', clientRouter);
// app.use('/api', userExistRouter);



app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})
