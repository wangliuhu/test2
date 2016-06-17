/**
 * Created by admin on 2016/6/17.
 */

var express = require('express');
var app = express();
var fs = require('fs');

var id = 2;

app.get('/deleteuser',function(req,res){
    fs.readFile(__dirname +"/"+"user.json",'utf8',function(err,data){
        data = JSON.parse(data);
        delete data['user'+2];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

var server = app.listen(8092,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
