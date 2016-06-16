/**
 * Created by admin on 2016/6/16.
 */

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.send('Hello Word');
});
var server = app.listen(8082,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例 访问地址: http://%s:%s',host,port);
});

