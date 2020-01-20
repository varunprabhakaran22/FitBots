//importing the mongoose package
const mongoose=require('mongoose');

//Creating the book model Scheme
const courseSchema = new mongoose.Schema({
    name:{
       type: String
    },

    university:{
        type:String
    },

    provider:{
        type:String
    },
});

//exporting the schema
module.exports = mongoose.model('Course',courseSchema);