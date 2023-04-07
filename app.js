import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const url = req.url;
  let filePath = "." + url;

  if (filePath === "./") {
    filePath = "./index.html";
  }

  if (req.url === "/favicon.ico") {
    return;
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

server.listen(3050, () => {
  console.log("Clock is ticking");
});
