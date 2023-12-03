const express=require('express')
var myrouter=express.Router()
var connection=require("../db/myconnection")

myrouter.get("/employee",(req,res)=>
{
          connection.query("select * from employee",(err,data,fields)=>
          {
            if(err)
            {
                res.status(500).send("no data found")
            }
            else{
                res.render("index",{empdata:data})
            }
          })
})

myrouter.get("/insert",(req,res)=>
{
  if(req.query.add=="add")
  {
      res.render("insert")
  }
  
  else if(req.query.add=="show")
  {
    res.redirect("/employee")
  }
  else
  {
    res.render("find")
  }

})

myrouter.get("/add",(req,res)=>

{
          connection.query("insert into employee values(?,?,?,?)",[req.query.empid,req.query.ename,req.query.age,req.query.salary],(err,results)=>
          {
            if(err)
            {
                res.status(500).send("no data found")
            }
            else{
                res.redirect("/employee")
            }
          })
})


myrouter.get("/deletemp/:empid",(req,res)=>
{
  connection.query("delete from employee where empid=?",[req.params.empid],(err,result)=>
  {
    if(err)
    {
      console.log("error")
    }
    else ;
    {
      res.redirect("/employee")
    }
  })


})


myrouter.get("/findit",(req,res)=>
{

  connection.query("select * from employee where empid=?",[req.query.f],(err,data,fields)=>
          {
            if(err)
            {
                res.status(500).send("no data found")
            }
            else{
              console.log("test it"+data);
                res.render("index",{empdata:data})
            }
          })
})

module.exports=myrouter