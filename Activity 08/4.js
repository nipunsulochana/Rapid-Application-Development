const express = require("express");
var bodyParser = require("body-parser");

const app = express();

const credentials = {
  username: "testuser",
  password: "test123",
};

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "\\login.html");
});
app.post("/result", urlencodedParser, (req, res) => {
  if (
    req.body.username == credentials.username &&
    req.body.password == credentials.password
  )
    res.send(`Username:${req.body.username}<br/>
  Login Successful!!
  `);
  else {
    res.send(`Invalid credentials<br/>
  Login Failed!!
  `);
  }
});

app.listen("8080");
