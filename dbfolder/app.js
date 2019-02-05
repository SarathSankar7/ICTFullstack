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

    app.get("/view",function(req,res){
       mongoClient.connect(url,function(err,database)
       {
           if(err){console.log(err)}
           else{
               var dtb=database.db('sample');
               var empcol=dtb.collection('emp');
               empcol.find().toArray(function(err,result){
                   if(err){res.send("something went wrong")
                       
                   }
                   else{
                      res.render("empview",{data:result});
                   }

               })
           }
       })
    })
    app.get("/del",function(req,res){
        mongoClient.connect(url,function(err,database){
            if(err){
                console.log(err);
            }
            else{
                var dbs=database.db('sample');
                var coll=dbs.collection('emp');
                coll.find({},{Empid:1,_id:0}).toArray(function(err,result)
                {
                    if(err){res.send("something wrong")}
                    else{
                        console.log(result)
                        res.render("empdelete",{data:result})
                    }
                })
            }
        })
    })

    app.post("/delete",function(req,res){
        console.log(req.body.Empid)
        mongoClient.connect(url,function(err,database){
            var db=database.db('sample');
            var collections=db.collection('emp');
            collections.deleteOne({Empid:req.body.empid},function(err,result){
                if(err){
                    res.send("something went wrong");
                }
                else{
                    res.send("Deleted");
                }
            })
        })
    })
    app.get("/update",function(req,res){
       mongoClient.connect(url,function(err,database){
           if(err){console.log(err)}
           else
           {
            var dbs=database.db('sample');
            var coll=dbs.collection('emp');
            coll.find({}).toArray(function(err,result){
                if(err){
                    console.log(err);
                }
                else
                {
                    res.render("empupdate",{data:result});
                }
            })
           }
       })
    })
    app.post("/upd",function(req,res){
      data={"Empid":req.body.empid}
      mongoClient.connect(url,function(err,database){
          if(err)
          {
              console.log(err)
          }
          else{
              var dbs=database.db('sample');
              var coll=dbs.collection('emp');
              coll.find(data).toArray(function(err,result)
              {
                  if(err)
                  {
                      console.log(err);
                  }
                  else{
                      res.render("empupdnew.ejs",{data:result})
                  }
              })
          }
      })
    })
    app.post("/upn",function(req,res){
        mongoClient.connect(url,function(err,database){
            var db=database.db('sample');
            var collections=db.collection('emp');
            var eid={"Empid":req.body.empid}
            var name={"Name":req.body.empname}
            collections.updateOne({ Empid: req.body.empid }, {$set: { Name: req.body.empname }},function(err,result){
                if(err){console.log("err")}
                else
                {
                    res.redirect("/");
                }
            })
           
        })
    })
      
    app.get("/new",function(req,res){
        res.render("empinsert")
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

