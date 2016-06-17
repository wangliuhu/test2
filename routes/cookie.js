/**
 * Created by admin on 2016/6/17.
 */
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/',function(req,res){
    console.log('cookies:' ,req.cookies);
});

app.listen(8086);

