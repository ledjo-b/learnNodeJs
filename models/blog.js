const mongoose = require('mongoose');

//Schema defines the structure that we are going to be using
// We use first capital letter when naming Schema variables
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    snippet:{
        type:String,
        required: true
    },
    body:{
        type:String,
        required:true,
    }
}, { timestamps:true });


// Modal is the thing that surrounds the Schema and provides an interface
// to comunicate with db collection
// For modal variables the first letter needs to be in capital
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;