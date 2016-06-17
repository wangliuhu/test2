/**
 * Created by admin on 2016/6/16.
 */

var express = require('express');
var app = express();

 app.use(express.static('public'));
//跳转到页面index.html
 app.get('/index.html',function(req,res){
     console.log('__dirname=='+__dirname);
     res.sendFile(__dirname+"/"+"index.html");
 });
// 发送get请求
app.get('/process_get',function(req,res){
    //输出JSON格式
    response = {
        first_name : req.query.first_name,
        last_name : req.query.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
});

var  server = app.listen(8083,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})