//require http module
const http = require('http');
const fs   = require('fs');
const _    = require('lodash');

//create server
//two main attributes are the request object and the response object
const server = http.createServer((req, resp)=>{
//Runs every time a request comes to our server

   //--------- lodash ---------
      const num = _.random(0,20);
      console.log(num);

     // run function only once
     const greet = _.once(() =>{
       console.log('Hello there !');
     });

     greet();
     greet();
     greet();
   //--------- lodash ---------

    // set header content type
    resp.setHeader('Content-Type', 'text/html');

    //Define the path for routing
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            resp.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            resp.statusCode = 200;
            break;
      //Redirect
        case '/about-us':
            resp.statusCode = 301; // Meaning page as been redirected
            resp.setHeader('Location','/about');
            resp.end();
            break;
        default:
            path += '404.html';
            resp.statusCode = 404;
            break;
    }
    
    //Read & send a html file 
    fs.readFile(path,(err, data) =>{
        if(err){
            console.log(err);
            resp.end();;
        } else{
           // resp.write(data);
           //Since we are sending only one thing we can do it directly from end method
            resp.end(data);
        }
    })
});

// Listen for requests
server.listen(3000,'localhost',()=>{
    console.log('Listening for request on port 3000 !');
});