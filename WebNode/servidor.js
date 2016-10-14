var express = require("express");

var app = express();

function loadimagenes(){
  app.get('/imagen.jpg',function(req,res){
    res.sendfile('./web/static/img/imagen.jpg');
  });
}
function loadjs(){
  app.get('/jquery-3.1.1.js',function(req,res){
    res.sendfile('./web/static/js/jquery-3.1.1.js');
  });
}
app.get('/',function(req,res){
  loadjs();
  loadimagenes();
  res.sendfile('./web/index.html');
});
app.listen(80,function(){
  console.log("El servidor esta funcionando");
});
