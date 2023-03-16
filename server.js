const express = require("express");
const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello, Olukunmi</h1>")
});

app.get("/contact", function(req, res){
  res.send("Contact me on: omikunleqomorudeen@gmail.com");
});

app.get("/about", function(req, res){
  res.send("<h1>My name is: Omikunle Olukunmi Qumarudeen<h1> <h3>Graduate of Computer Engineering from Federal Polytechnic Ede Osun State. Nigeria</h3>");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coding</li><li>Eating</li><li>Reading</></ul>")
});

app.listen(3000, function(){
  console.log("server started at port 3000")
});
