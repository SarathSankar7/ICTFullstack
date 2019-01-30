var express= require('express')
const app=express();
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
app.listen(8000,function(req,res){
    console.log("started")
})

app.get("/home",function(req,res){
    res.sendFile(__dirname+"/home.html")
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/login.html")
})

app.post("/home",function(req,res){
    console.log(req.body.username)
    console.log(req.body.password)
    if(req.body.password=="sankar")
    {
       
        res.sendFile(__dirname+"/home.html")
     
    }
    else{
        res.redirect("/")
    }
})

app.post("/register",function(req,res){
    res.send("Name =" + req.body.name1 +"<br>Email = "+ req.body.email1+"<br>Username="+ req.body.username1+"<br>Password="+req.body.password1+"<br><a href=/home>Home</a>")

})
