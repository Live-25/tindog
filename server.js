const express= require("express");
const bodyParser= require("body-parser");
const request= require("request");

const app=express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.render("index.ejs");
});

app.get("/index.ejs", function(req,res){
    res.render("index.ejs");
});

app.get("/pricing.ejs", function(req,res){
    res.render("pricing.ejs");
});

app.get("/contact.ejs", function(req,res){
    res.render("contact.ejs");
});

app.get("/dog-care.ejs", function(req,res){
    res.render("dog-care.ejs");
});

app.listen(PORT, function(){
    console.log("server is running");
});