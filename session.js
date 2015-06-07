var express = require( "express" );
var app = express();
var port = 1234;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

app.use(cookieParser());

app.use(expressSession({secret:'somesecrettokenhere'}));

app.use(bodyParser());

app.listen(port);

app.get( "/" , function (req, res){

	req.session.cookie.maxAge = 5000;
	req.session.test = "Hello" ;
	req.session.test2 = "Hello2" ;
	if (req.session.test && req.session.test2){
		console.log(req.session);
		console.log(req.session.test2);
	}
	res.redirect( "/logout" );
});

app.get( "/logout" , function (req, res){
	req.session.destroy( function (error){
		res.send( "Delete Session" );
	});
});



console.log( "start express server" );