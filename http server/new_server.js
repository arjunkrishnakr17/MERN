const express= require("express");
let app=new express();

function sum(a,b)
{
    return a+b;
}

app.get("/",function(req,res)
{
    // res.send("hello world");
    console.log(req.query);
    let a=req.query.a;
    a=parseInt(a)
    console.log(a)
    let b=req.query.b;
    b=parseInt(b)
    console.log(req.query.b)
    let ans=sum(a,b);
    res.send("sum of"+a+"+"+b+"="+ans);

})

app.listen(3000);
