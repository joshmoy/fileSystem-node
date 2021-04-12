const http = require("http");
const fs = require("fs");

const url = "http://jsonplaceholder.typicode.com/posts";

http
  .get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      fs.writeFile("./result/posts.json", data, (err) => {
        if (err) throw err;
      });
    });
  })
  .on("error", (err) => {
    console.log(err.message);
  });
