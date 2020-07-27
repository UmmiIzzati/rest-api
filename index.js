var express = require ('express');
//import express module
var app = express();
// create a server express assigned it to app
var bodyParser = require('body-parser');
//import bosy parsermodule

//middleware

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//use bodyParser (configuration to configure that my API will encode the URL)

var port = process.env.PORT || 8080;
// Routing

var router = express.Router();
router.get('/', (req,res)=>{
	res.json({message:"Yahoooo yeayyy! my API works!!!"})
})
router.get('/hello', (req,res)=>{
	res.json({message:'Hello Ummi!'});
})

router.get('/goodbye/:name', (req,res)=>{
	res.json({message:'Goodbye'+req.params.name});
})

router.post('/sum', (req,res)=>{
	var sum = req.body.num1 + req.body.num2
	res.json({message:"The sum is "+sum});
})
app.use('/api',router);

app.listen(port);

console.log("Magic heppened at port "+port);