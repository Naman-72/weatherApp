//  1) FOR ALL THINGS ROUTERS

const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const fs = require('fs');

// 2) port -> local environment 
// But when hosted we use => const port = process.env.PORT || 3000;
const port = process.env.PORT || 3000;





// // 5) using handlebars
// // USING app.set('view engine', 'hbs');
app.set('view engine', 'hbs');




// 6)
app.set('views',path.join(__dirname,'../templates/views'));
hbs.registerPartials(path.join(__dirname,'../templates/partials'))



// 4) for app to use static website
// console.log(path.join(__dirname,"../public"));
// EXPRESS WORKS IN TOP TO BOTTOM APPROACH
app.use(express.static(path.join(__dirname,'../public')));
// NOW WHY INDEX PAGE ?
// REASON index is taken as homepage in all sites mostly while hosting so
// index by default homepage






// 3) app.get(route,callback_function)
// route -> where
app.get('/',(req,res)=>{
    // res.send('Hello World');

    // 6)
    res.render('index');
});
app.get('/about',(req,res)=>{
    // res.send('About Page');

    res.render('about');
});
app.get('/contact',(req,res)=>{
    // res.send('Contact Page');

    res.render('contact');
});
app.get('/weather',(req,res)=>{
    // res.send('Weather Page');

    res.render('weather');
});

// * => use when you dont get any page then 
app.get("*",(req,res)=>{
    // res.send('404 ERROR');

    res.render('404error');
});





// 4) app.listen() 
app.listen(port,()=>{
    console.log(`Running At http://localhost:${port}`);
});