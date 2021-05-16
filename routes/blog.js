const express = require("express")
const router = express.Router()
const blogModel = require('./../models')

router.get("/", (req, res) => {
    res.send("this is blog page")
})

router.get("/new", (req, res) => {
    res.render("blogs/new")
    
})

router.post('/', async (req, res) => {
    let blog = new blogModel({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        await(blog.save())
        res.redirect(`/blog/${blog.id}`)
    }catch (e) {
        console.log(e)
        res.render('blogs/new')
    }
    
})

router.get('/:id',  async (req, res) => {
    let blog = await blogModel.findById(req.params.id)
    if (blog == null) res.redirect('/')
    res.render('blogs/read', {blog : blog})
})

module.exports = router