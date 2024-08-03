let express=require("express");
let app=express();
const bodyparser=require("body-parser");
const port=3000;
app.use(bodyparser.json());
app.get("/",function(req,res)
{
    res.send("Hello world");
})

app.post("/body",function(req,res)
{
    const mesg=req.body;
    console.log(mesg);
    res.send("mesg recieved"+mesg);
})

app.listen(port);