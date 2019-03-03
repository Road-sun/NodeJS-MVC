var express = require('express');
var app= express.Router();

var  HideVideoService = require('../models/HideVideoService');


app.get('/', async function(req, res, next) {
    let id=req.query.id;
    let data=await HideVideoService(id);
    res.json(data);
});


module.exports=app;