const express = require('express');
var timestamp = require('unix-timestamp');
var moment = require('moment');
var unixTime = require('unix-time');
const app = express();

app.use(express.static('public'));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/:time', function(req, res){
  var data = req.params.time;
  if (!isNaN(data)){
  var result = timestamp.toDate(parseInt(data, 10));
  var data2 = moment(result).format('LL'); 
  var data3 = {unix: data, natural: data2};
  }
  else {
     var unix = unixTime(new Date(data)); 
     if (!isNaN(unix)){
     var data3 = {unix: unix, natural: data};
    }
  else 
  {var data3 = {unix: unix, natural: data};}
  }
  res.json(data3); 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

