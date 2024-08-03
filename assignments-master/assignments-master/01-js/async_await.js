function timeout()
{
    return new Promise(function(resolve)
    {
        setTimeout(function()
        {
            resolve("hello world");
        },2000)
    })
}

async function main()
{
    let val=await timeout();
    console.log("main fn");
    console.log(val);
}

main();
console.log("start");