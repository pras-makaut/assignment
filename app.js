const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
var arr=["jojn","brusli","brishti","jhinson","gayle","virat","rohit","chandan","shivam"];

app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html");
  });
app.get("/chat",function(req,res){
    res.render("chat");
})
app.post("/",function(req,res){
    console.log(req.body);
    arr.push(req.body.email);
    res.redirect("/chat");
});



app.get("/user",function(req,res){
    res.render("User",{userArray:arr});
});




app.listen(3000, function() {
    console.log("Server started on port 3000");
  });