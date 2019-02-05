// var createError = require('http-errors');
var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var bodyparser=require('body-parser');
var mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;
var url="mongodb://127.0.0.1:27017/book"


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
app.set("view engine","ejs");
app.get("/",function(req,res){
  res.render("index");
})

app.get("/view",function(req,res){
  mongoClient.connect(url,function(err,database)
  {
      if(err){console.log(err)}
      else{
          var dtb=database.db('book');
          var empcol=dtb.collection('bookd');
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
app.listen(8000,function(req,res){
  console.log("server started listening");
})

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(bodyparser.urlencoded({extended:true}));

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
