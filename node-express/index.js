var express=require('express');
 var app= express();
 app.set('view engine', 'ejs');
 
 
 app.use(express.static('public'))
 app.get('/', function(req, res){
	 
	 res.render('home');
	 
 });

 
 
  app.get('/gallery', function(req, res){
	 
		 res.render('gallery');
	 
 });

  
  app.get('/location', function(req, res){
	 
		 res.render('location');
	 
 });

 
  app.get('/contact', function(req, res){
	 
	 res.render('contact');
	 
 });
	 app.listen(8080);
 