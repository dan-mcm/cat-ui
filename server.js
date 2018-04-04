const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const btoa = require("btoa");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/cat", function(req, res) {
  axios
    .get("http://thecatapi.com/api/images/get")
    .then(data => res.send(data.request.res.responseUrl))
    .catch(err => console.log(err));
});

// potential replacement - need to handle response correctly...

// app.get("/cat", function(req, res) {
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//   axios
//     .get("https://cataas.com/cat")
//     .then(data => {
//       res.send(data.data) // type of response: image/jpeg potentially a buffer...
//     })
//     .catch(err => console.log(err));
// });

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
