/**
 * Created by admin on 2016/6/16.
 */

var express = require('express');
 var app = new express();

 app.get('/',function(req,res){
     res.send('Hello word');
 });

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，访问地址为: http：//%s:%s',host,port);
})