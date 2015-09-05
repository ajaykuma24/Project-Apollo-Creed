var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(bodyParser.raw());
app.use(bodyParser.text());


console.log("server starting");
app.post('/',function(req,res){
	//console.log("post recieved");
	processRequest(req.body.name,req.body.block,req.body.punch, req.body.sync);
	res.send("meh");
});
app.set('view engine','jade');
app.use(express.static('static'));

app.get('/',function(req,res){
	res.render('index');
});



var health1 = 1000;
var health2 = 1000;

var reset = function(){
	health1 = 1000;
	health2 = 1000;
}

app.get('/reset',function(req,res){
	res.send("success");
	reset();
});

var p1left = false;
var p1right = false;
var p2left = false;
var p2right = false;

app.get('/status',function(req,res){
	var jsn = '{"health1":"'+ String(health1) + '","health2":"'+String(health2)+'"}';
	res.send(jsn);
})
app.listen(80);


var bool = function(x){
	if(x=="true")
		return true;
	return false;
}

var sync1r = false;
var sync1l = false;
var sync2r = false;
var sync2l = false;


var processRequest = function(name,block,punch,sync){
var p = name.split(".")[0];

	if(health2<0)
		console.log("Player 1 Wins!!!");
	if(health1<0)
		console.log("Player 2 Wins!!!")
	if(!bool(sync))
		console.log("unsynced ",name);
	if(name=="1.left"){
		p1left = bool(block);
		sync1l = bool(sync);
	}
	else if(name=="1.right"){
		p1right = bool(block);
		sync1r = bool(sync);
	}
	else if(name=="2.left"){
		p2left = bool(block);
		sync2l = bool(sync);
		//console.log(name,block,punch);
	}
	else if(name=="2.right"){
		p2right = bool(block);
		sync2r = bool(sync);
	}
	if(punch>0&&sync1l&&sync1r&&sync2l&&sync2r){
		//console.log(p1left,p1right,p2left,p2right);
		if(name=="1.right"&&p2left||name=="1.left"&&p2right||name=="2.right"&&p1left||name=="2.left"&&p1right){
			punch = punch/10;//reduce punch by 90% if blocked
			console.log("punch blocked");
		}
		
		if(p==1){
			health2=health2-punch;
			console.log("Player 2 Health: ",health2);
		}
		if(p==2){
			health1 = health1-punch;
			console.log("Player 1 Health: ",health1);
		}
	}
};