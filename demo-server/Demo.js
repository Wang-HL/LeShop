let http = require("http");
let url = require("url");
let util = require("util");

let server = http.createServer((req,res) => {
  res.statusCode = 200;

  res.setHeader("Content-Type","text/plain;charset = utf-8");

  console.log("url:" + req.url);

  console.log("parse:" + url.parse(req.url));

  console.log("inspect:" + util.inspect(url.parse(req.url)));

  res.end(util.inspect(url.parse(req.url)));
});
server.listen(3000,"127.0.0.1",()=>{
  console.log("服务器已经启动！")
});
