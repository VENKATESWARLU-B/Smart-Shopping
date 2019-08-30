var mongoClient=require("mongodb").MongoClient;
var express=require("express");
var bodyparser=require("body-parser");
var app=express();
var url="mongodb://127.0.0.1:27017";
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
//API request 
app.get("/getCategories",function (req,res){
    mongoClient.connect(url,function(err,db){
        if(!err){
            var dob=db.db("Ishopdb");
            dob.collection("tblcategory").find({}).toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})
//API request 
app.get("/getProducts",function (req,res){
    mongoClient.connect(url,function(err,db){
        if(!err){
            var dob=db.db("Ishopdb");
            dob.collection("tblproducts").find({}).toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})
//API request 
app.get("/getShoppingCart",function (req,res){
    mongoClient.connect(url,function(err,db){
        if(!err){
            var dob=db.db("Ishopdb");
            dob.collection("tblshoppingcart").find({}).toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})
app.listen(8080);
console.log("serverstarted:http://127.0.0.1:8080");
