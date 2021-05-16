const mongoose = require('mongoose')

let blog_schema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String
    },
    markdown:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const blogModel = mongoose.model('Blog', blog_schema)

module.exports = blogModel