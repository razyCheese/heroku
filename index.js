const express=require("express")
const app=express()

app.get("/",function(res,req){
    res.send("workingg");
})

app.listen(process.env.PORT||3000)