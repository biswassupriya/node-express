var express=require('express');
 var app= express();
 app.set('view engine', 'ejs');
 
 
// app.use(express.static('public'))
 app.get('/', function(req, res){

	 res.render('pages/home');

 });



  app.get('/gallery', function(req, res){

		 res.render('pages/gallery');

 });


  app.get('/location', function(req, res){

		 res.render('pages/location');

 });


  app.get('/contact', function(req, res){

	 res.render('pages/contact');

 });

	 app.listen(8080);
 