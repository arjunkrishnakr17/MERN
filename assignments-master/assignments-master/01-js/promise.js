//pretty way to do callbacks
let fs=require("fs");
function readfile()
{
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data)
    {
        resolve(data);
    })
}
    );
}

function display(data)
{
    console.log("display fn");
    console.log(data);
}

readfile().then(display);

function asyncjs()
{
    return new Promise(function(resolve)
{
    resolve("hello woerld");
})
}

function dummy(data)
{
    console.log(data);
}

asyncjs().then(dummy);
console.log("start");