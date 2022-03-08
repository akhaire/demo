var express = require("express")
var routes = express.Router()
var database = require("../config/database")
var collName = "user"
var monogodb = require("mongodb")
var sha1 = require('sha1')
var MongoClient = monogodb.MongoClient




routes.post("/", (req, res)=>{
     
    // var docDefinition = {
    //   content: [
    //     { text : "Profile", style : "header"},
    //         {
    //             style : "tableExample",
    //             table : {
    //                 body :
    //                 [
    //                 ['Name', 'Email', 'Address','city','contact','gender'],
    //                 [req.body.fullname,req.body.email,req.body.address,req.body.city,req.body.contact,req.body.gender ]
    //                 ]
    //             }
    //         }
    //   ]
    // };
  
    //  var pdf = pdfmake.createPdf(docDefinition);
    //  pdf.write('files/basics.pdf').then(() => {
    //    console.log("success");
    //  }, err => {
    //    console.error(err);
    //  });
        // console.log(req.body)
          req.body.status = 0
          req.body.password= sha1(req.body.password)
          delete req.body.re_password

        MongoClient.connect(database.dbUrl, (err, con)=>{
          var db = con.db(database.dbName);
          db.collection(collName).insertOne(req.body, ()=>{
              res.send({ success : true });
          })
      })
   
  })


  module.exports=routes;