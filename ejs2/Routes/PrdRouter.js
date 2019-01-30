var express=require('express')
var router=express.Router();
router.get("/",function(req,res){
    res.render("prdhome");
})
router.get("/scanner",function(req,res){
    res.render("newscanner");
})

router.get("/printer",function(req,res){
    res.render("editprd");
})
router.get("/newp/pep",function(req,res){
    res.render("perprd");
})
router.get("/newp/dpd",function(req,res){
    res.render("tempprd");
})
router.get("/newp/views",function(req,res){
    res.render("viewscanner")
})

module.exports=router