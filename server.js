const express = require("express")
const app = express()
const blogModel = require('./models')
const mongoose = require('mongoose')
const blogRouter = require("./routes/blog")

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://bigg:1234@cluster0.gduld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', options)

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

app.get("/", async (req, res) => {
    let blogs = await blogModel.find().sort({
        createdAt:'desc'
    })
    res.render('blogs/index', { blogs: blogs})
})

app.use("/blog", blogRouter)




app.listen(4000, ()=>{
    console.log("listening on port 4000")
})