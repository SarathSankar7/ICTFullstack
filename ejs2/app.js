var express=require('express')
var emprouter=require('./Routes/EmpRouter')
var prdrouter=require('./Routes/PrdRouter')
const app=express();
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
})


app.use("/emp",emprouter)
app.use("/prd",prdrouter)



app.listen(8000,function(req,res){
    console.log("server listening");
})


