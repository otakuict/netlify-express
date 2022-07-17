var express = require('express');  
var app = express();  
const serverless = require('serverless-http')

const router = express.Router();
app.use('/api',router);
router.get('/test', function (req, res) {  
  res.send('Test Page');  
});  



router.get('/', function (req, res) {  
  res.send('Welcome to JavaTpoint!');  
});  




// var server = app.listen(8000, function () {  
//   var host = server.address().address;  
//   var port = server.address().port;  
//   console.log('Example app listening at http://%s:%s', host, port);  
// });  

module.exports.handler = serverless(app);