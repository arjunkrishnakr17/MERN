let fs=require("fs").promises;
async function cleanfile(filepath)
{
    let data=await  fs.readFile(filepath,"utf-8",function(err,data)
{
    return data;
});
console.log(data); 
data=data.replace(/\s+/g," ").trim();
console.log(data); 
try
{
await fs.writeFile(filepath,data)
console.log("success");
}
catch(err)
{
     console.log("error");
    
};
}

cleanfile("a.txt")