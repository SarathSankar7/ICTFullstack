var express=require('express');
var bodyparser=require('body-parser');

const app=express();
app.use(bodyparser.urlencoded({extended:true}))
var mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;
var url="mongodb://127.0.0.1:27017/sample"
app.set("view engine","ejs");

    app.get("/",function(req,res){
        res.render("home");
    })

    app.post("/insert",function(req,res){

        mongoClient.connect(url,function(err,database){
            var db=database.db('sample');
            var collections=db.collection('emp');
            var data={"Name":req.body.name,"Empid":req.body.empid}
            collections.insert(data,function(err,rslt){
                if(err){
                    res.send("something went wrong");
                }
                else{
                    res.send("data inserted successfully");
                }
            })
        })
    })
app.listen(8000,function(req,res){
    console.log("server started listening");
})

