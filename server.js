var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.send('index.html')
}).listen(port);

// var express = require('express');
// var bodyParser = require('body-parser')

// var app = express();
// app.set('port', process.env.PORT || 80);

// app.use( bodyParser.json() );       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// }));
// app.use(bodyParser.raw());
// app.use(bodyParser.text());


// console.log("server starting");
// app.post('/',function(req,res){
// 	//console.log("post recieved");
// 	processRequest(req.body.name,req.body.block,req.body.punch, req.body.sync);
// 	// if(req.body.name == "1.left")
// 	// 	console.log(req.body.name,req.body.block,req.body.punch,req.body.sync )
// 	res.send("meh");
// });

// var health1 = 1000;
// var health2 = 1000;

// var p1left = false;
// var p1right = false;
// var p2left = false;
// var p2right = false;

// var bool = function(x){
// 	if(x=="true")
// 		return true
// 	return false
// }


// var sync1 = true

// var sync2 = true


// var processRequest = function(name,block,punch,sync){
// 	var p = name.split(".")[0];
// 	if(bool(sync)==false){
// 		if(p == 1&&sync1 == true){
// 			console.log("Player ",p," is unsynced")
// 			sync1 = false
// 		}
// 		else if(p == 2 && sync2 == true){
// 			console.log("Player ",p," is unsynced")
// 			sync2 = false
// 		}
// 	}
// 	if(bool(sync) == true)
// 	{
		
// 		if(p == 1 && sync1 == false){
// 			sync1 = true
// 			console.log("Player ",p," is synced")
// 		}
// 		if(p == 2 && sync2 == false){
// 			sync2 = true
// 			console.log("Player ",p," is synced")
// 		}
// 	}

// 	if(health2<0)
// 		console.log("Player 1 Wins!!!");
// 	if(health1<0)
// 		console.log("Player 2 Wins!!!")
// 	if(name=="1.left")
// 		p1left = bool(block);
// 	else if(name=="1.right"){
// 		p1right = bool(block);
// 	}
// 	else if(name=="2.left")
// 		p2left = bool(block);
// 	else if(name=="2.right")
// 		p2right = bool(block);
// 	if(punch>0&&sync1&&sync2){
// 		if(name=="1.right"&&p2left||name=="1.left"&&p2right||name=="2.right"&&p1left||name=="2.left"&&p1right){
// 			punch = punch/10;//reduce punch by 90% if blocked
// 			console.log("punch blocked")
// 		}
		
// 		if(p==1){
// 			health2=health2-punch;
// 			console.log("Player 2 Health: ",health2)
// 		}
// 		if(p==2){
// 			health1 = health1-punch;
// 			console.log("Player 1 Health: ",health1)
// 		}
// 	}
// };