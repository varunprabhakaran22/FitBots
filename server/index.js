const express = require('express');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const cors=require('cors');
const port = process.env.PORT || 8000;

// importing routes
const add = require('./routes/add');

const app = express();
app.use(bodyparser.urlencoded({encoded:false}))
app.use(bodyparser.json());
app.use(cors());


// connecting the mangoose with mongodb
//Idle have to be in environment variable but due to time span .....sorry
mongoose.connect('mongodb+srv://varun:testpassword@cluster0-bhfp5.mongodb.net/test?retryWrites=true&w=majority',{
    // useMongoClient: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
  }
)
.then(() => console.log('Connected to MongoDB Successfully......'))
.catch(err => console.log('Error occured while connecting MongoDB '+ err));


// Redirecting to the specific routes
app.use('/api',add);

// Server can be accessed from port 8000
app.listen(port, () => {
    console.log('Server is ready');
});