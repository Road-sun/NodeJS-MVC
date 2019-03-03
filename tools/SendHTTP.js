var http = require("http");
var https=require("https");

/*
callback(is_success, data/erro)
*/
function httpsGet(host,url, params){
    return new Promise((resolve, reject) =>{
        var options = {
            host:host,
            port: 443,
            path : url+"?"+params,
            method : "GET",
            rejectUnauthorized:false
        };
        var sendmsg='';
        var request = https.request(options,function(res){
            console.log("get respones");
            res.on("data", function(chunk) {               //监听data,接受数据
                sendmsg += chunk;                         //把接受的数据存入定放的sendmsg
            });
            res.on("end", function(d) {                     //监听end事件，请求结束后调用
                var list=JSON.parse(sendmsg);            //对接受到的数据流进行编码
                console.log(list)  ;
                resolve(list)//打印出结果

            });
        });
        request.end();
    } )

}

module.exports=httpsGet;

