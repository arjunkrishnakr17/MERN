let express=require("express");
let app=new express();
app.use(express.json());

let users=[{
    "name":"arjun",
    "kidneys":[
        {"healthy":true},
        {"healthy":false}
    ]
}]

console.log(users[0]);

app.get("/",function(req,res)
{
    let user=users[0].name;
    console.log(user);
    let count=0;
    console.log(users[0].kidneys[0])
    for (let i=0;i<users[0].kidneys.length;i++)
    {
        if (users[0].kidneys[i].healthy==true)
        {   
            count++;
            console.log(users[0].kidneys[i].healthy)
        }
    }
    let unhealthy_count=users[0].kidneys.length-count;
    console.log(count);
    res.send("name="+user+" no of healthy kidneys="+count+"  no of unhealthy kiddneys= "+unhealthy_count);
})

app.post("/",function(req,res)
{
    const isHealthyy=req.body.isHealthy;
    users[0].kidneys.push({"healthy":isHealthyy});
    res.send("succesfully added");
})

app.put("/",function(req,res)
{
    for (let i=0;i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy=true;
    }
    res.send("succsfully reseted all kidneys to true");
})

app.delete("/",function(req,res)
{
    kidney=[]
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        if (users[0].kidneys[i].healthy)
        {
            kidney.push({"healthy":true})
        }    
    }
    users[0].kidneys=kidney;
    res.send("deleted");
})
app.listen(3000);
