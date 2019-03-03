var express = require('express');

//导入Controller
var HideVideoController=require('../controllers/HideVideoController');

module.exports = function (app) {
    //一个get请求的路由  http://localhost:3000
    app.get("/", function (req, res) {
        res.render("index", {title:"NodeTest"})
    });

    //注册Controller
    //删除动态
    app.use("/HideVideo",HideVideoController)
}
