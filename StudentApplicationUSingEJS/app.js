const express=require("express")
const app=express()
const path=require("path")

const bodyParser = require("body-parser")
const routes=require("./router/router")

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs") 

app.use(bodyParser.urlencoded({extended:false}))

app.use("/",routes)


app.listen(9000)

module.exports=app

