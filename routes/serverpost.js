/**
 * Created by admin on 2016/6/16.
 */

var express = require('express');
var app = new express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodeParser = bodyParser.urlencoded({extended:false});
app.use(express.static('public'));
app.get('/indexpost.html',function(req,res){
    res.sendFile(__dirname+"/indexpost.html");
});

app.post('/process_post',urlencodeParser,function(req,res){
    //输出json格式
    response = {
        first_name : req.body.fitst_name,
        last_name :req.body.last_name
    }
    res.end(JSON.stringify(response));
});

var server = app.listen(8084,function(){
    var host = server.address().address;
    var port = server.address().port;
});
