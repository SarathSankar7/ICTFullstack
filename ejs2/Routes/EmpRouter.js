var express=require('express')
var router=express.Router();

router.get("/",function(req,res){
    res.render("emphome");
})

router.get("/new",function(req,res){
    res.render("newemp");
})

router.get("/edit",function(req,res){
    res.render("editemp");
})

router.get("/view",function(req,res){
    res.render("viewemp");
})

router.get("/del",function(req,res){
    res.render("delemp");
})
router.get("/new/pe",function(req,res){
    res.render("per");
})
router.get("/new/dp",function(req,res){
    res.render("dwe");
})

module.exports=router;
