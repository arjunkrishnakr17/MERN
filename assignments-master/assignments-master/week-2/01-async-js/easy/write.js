let fs=require("fs");
fs.writeFile("a.txt","learning javascript",function(err,data)
{
    if(err)
    {
        console.log("error");
    }
    else{
        console.log("writting succsfull");
    }
})

fs.readFile("a.txt","utf-8",function(err,data)
{
    console.log(data);
})