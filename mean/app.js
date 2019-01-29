var express= require('express')

const app=express(); //calling the variable express
app.get("/",function(req,res){
    res.sendfile("./login.html")
})
app.get("/home",function(req,res){
    res.sendfile("./home.html")
})
app.get("/home/emphome",function(req,res){
    res.sendfile("./emphome.html")
})
app.get("/home/emphome/newemp",function(req,res){
    res.sendfile("./newemp.html")
})
app.get("/home/emphome/delemp",function(req,res){
    res.sendfile("./delemp.html")
})
app.get("/home/prdhome",function(req,res){
    res.sendfile("./prdhome.html")
})
app.get("/home/prdhome/newprd",function(req,res){
    res.sendfile("./newprd.html")
})
app.get("/home/prdhome/delprd",function(req,res){
    res.sendfile("./delprd.html")
})

app.get("/employee",function(req,res){
    res.send("Welcome Employee")
})

app.listen(8000,function(req,res){console.log("server started listening")})