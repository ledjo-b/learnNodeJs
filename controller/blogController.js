const Blog    = require('../models/blog');

 // Get all blogs from db
 const blog_index = (req, res) =>{

    Blog.find().sort({createdAt: -1})
    .then(result =>{
       res.render('Index',{title:'Home', blogs:result});
    })
    .catch(err=>{
        console.log(err);
    })
}

 // Get blog details
 const blog_details = (req, res) =>{

    const id = req.params.id;

    Blog.findById(id)
    .then((result)=>{
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch((err)=>{
        res.status(404).render('404',{title:'Blog not found'});
    });
 }

 // Get create blog form
 const blog_create_get = (req, res) =>{
     res.render('create',{title:'New Blog'});
 }

 // Save posts into db
 const blog_create_post = (req, res) =>{
    const blog = new Blog(req.body);
    blog.save()
    .then((respo)=>{
      res.redirect('/blogs');
    })
    .catch(err=>{
        console.log(err);
    })
 }   

 //Delete Posts
 const blog_delete = (req, res) =>{
    const id = req.params.id;
   
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({ redirect:'/blogs' })
    })
    .catch((err)=>{
        console.log('Something wenr wrong =>',err);
    })
 }

 module.exports = {
     blog_index,
     blog_details,
     blog_delete,
     blog_create_get,
     blog_create_post
 }