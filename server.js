var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
		'article-one' : {
			title:'Article One',
			heading:'Article One',
			date:'March 21, 1996',
			contents:`
					<p>
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>
					<p>
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>
					<p>
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>`},
		'article-three' : {
			title:'Article Three',
			heading:'Article Three',
			date:'Jan 31, 2017',
			contents:`
					<p>
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>
					
					<p>
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Three.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>`},
		'article-two': {
			title:'Article TTwo',
			heading:'Article Two',
			date:'May 29, 1991',
			contents:`
					<p>
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>
					<p>
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article One.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>
					<p>
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
						This is Article Two.It is about how to reduce redandancy in your code.It's fun doing this.
					</p>`}					
};
function createTemplate(data)
{
			var title = data.title;
			var heading = data.heading;
			var date = data.date;
			var contents = data.contents;
			var htmlTemplate = `
					<!DOCTYPE html>
					<html>
					<head>
						<title>${title}</title>
						<!-- Latest compiled and minified CSS -->
						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

						<!-- jQuery library -->
						<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

						
					</head>
					<body>
						<nav class="navbar navbar-inverse">
							<div class="container">
								<div class="navbar-header">
									<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynav">
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
									<a class="navbar-brand" href="#">${heading}</a>
								</div>
								<div class="collapse navbar-collapse" id="mynav">
									<ul class="nav navbar-nav">
										<li class="active"><a href="#">Home</a></li>
										<li class="active"><a href="#">${date}</a></li>
									</ul>
								</div>	
									
							</div>
						</nav>
						<div class="container">
							<div class="jumbotron">
								${contents}
							</div>
						</div>
						<!-- Latest compiled JavaScript -->
						<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

					</body>
					</html>
			`;
	return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName',function(req,res){
 var articleName=req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});

app.get('/article-two',function(req,res){
 res.send("Article two will be served here");
});

app.get('/article-three',function(req,res){
 res.send("Article three will be served here");
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
