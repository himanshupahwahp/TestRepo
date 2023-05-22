var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("cherry-temp-1:commit 1");
});

app.listen(3000);