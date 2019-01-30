var express=require('express')
const app=express();
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))

var sc=require('./sample');
var nw=sc.nw;

app.set("view engine","ejs")
app.listen(8000,function(req,res){
    console.log("server listening")
})

app.get("/login",function(req,res){
    res.render("login")
    sc.getweb();
    console.log(nw);
})
app.get("/",function(req,res){
    res.render("home",{data:books})
})
app.post("/login",function(req,res){
    res.render("home",{user:req.body.txtuser,password:req.body.pwd})
})
app.get("/register-show",function(req,res){
    res.render("register")
})
app.post("/register",function(req,res){
    res.render("home",{name:req.body.name1,email:req.body.email1,passw:req.body.password1,usern:req.body.username1})
})

var books=[{Bid:"B1",Bname:"harry",Bauthor:"potter",price:100},{Bid:"B2",Bname:"JK",Bauthor:"rowling",price:150}
,{Bid:"B3",Bname:"prince",Bauthor:"king",price:200}]