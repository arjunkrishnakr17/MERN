let fs=require("fs");

function readFile(fn)
{
    fs.readFile("a.txt","utf-8",function(err,data)
    {
       fn(data); 
    }
    )
}

function display(data)
{
    console.log(data);
}

readFile(display);
console.log("hello world")
