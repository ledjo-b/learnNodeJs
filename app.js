//Get express
const mongoose   = require('mongoose');
const express    = require('express');
const morgan     = require('morgan');
const blogRoutes = require('./routes/blogRoutes');
const app        = express();

const dbURI = 'mongodb+srv://ledjo:******l@nodejslearn.3euhe.mongodb.net/node-tuts?retryWrites=true&w=majority';

  mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
     .then((result) =>{
           console.log('DB connected with success !');
          app.listen(3000);
      })
     .catch((err) =>{console.log(err)});

//register view engine
app.set('view engine', 'ejs');

// Middleware & static files
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.get('/',(req,res)=>{res.redirect('/blogs');});
app.get('/about',(req,res)=>{res.render('about',{title:'About'});});
app.use('/blogs',blogRoutes);
app.use((req,res)=>{ res.status(404).render('404',{title:'Not Found'})});