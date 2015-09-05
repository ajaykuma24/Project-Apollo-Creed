var express = require('express');
var app = express();

<<<<<<< HEAD
//Specify a port
var port = process.env.port || 8080;
=======
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(bodyParser.raw());
app.use(bodyParser.text());


console.log("server starting");
app.post('/',function(req,res){
	//console.log("post recieved");
	res.send("meh");
	processRequest(req.body.name,req.body.block,req.body.punch, req.body.sync);
});
app.set('view engine','jade');
app.use(express.static('static'));

app.get('/',function(req,res){
	res.render('index');
});



var health1 = 1000;
var health2 = 1000;
var gover = false;

var reset = function(){
	health1 = 1000;
	health2 = 1000;
	gover = false;
}

app.get('/reset',function(req,res){
	res.send("success");
	reset();
});

var p1left = false;
var p1right = false;
var p2left = false;
var p2right = false;

var sync1r = false;
var sync1l = false;
var sync2r = false;
var sync2l = false;

app.get('/status',function(req,res){
	var jsn = '{'
	+'"health1":"'+ String(health1)
	+ '","health2":"'+String(health2)
	+ '","sync1r":"'+String(sync1r)
	+ '","sync1l":"'+String(sync1l)
	+ '","sync2r":"'+String(sync2r)
	+ '","sync2l":"'+String(sync2l)
	 +'"}';
	res.send(jsn);
})
app.listen(80);


var bool = function(x){
	if(x=="true")
		return true;
	return false;
}


>>>>>>> parent of 37c57be... Port Change

//Serve up files in public folder
app.use('/', express.static(__dirname + '/public'));

//Start up the website
app.listen(port);
console.log('Listening on port: ', port);
