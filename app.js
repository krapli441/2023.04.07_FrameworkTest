import http from "http";
import fs from "fs";

// const server = http.createServer(function (request, response) {
//   if ((request.method = "GET")) {
//     var css = fs.readFileSync("/CSS/style.css" + request.url);
//     response.writeHead(200, { "Content-Type": "text/css" });
//     response.write(css);
//     response.end();
//     return;
//   }
//   var html = fs.readFileSync("../index.html");
//   response.writeHead(200, { "Content-Type": "text/html" });
//   response.write(html);
//   response.end();
// });

// server.listen(2080, function () {
//   console.log("Clock is Ticking...");
// });

// const http = require('http');
// const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  let filePath = "." + url;

  if (filePath === "./") {
    filePath = "./index.html"; // 기본 파일
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    } else {
      if (url.endsWith(".html")) {
        res.writeHead(200, { "Content-Type": "text/html" });
      } else if (url.endsWith(".css")) {
        res.writeHead(200, { "Content-Type": "text/css" });
      } else if (url.endsWith(".js")) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
      }

      res.end(data);
    }
  });
});

server.listen(2080, () => {
  console.log("Server is running on port 2080");
});
