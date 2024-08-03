    function mycounter(count,duration)
    {
        setTimeout(function()
            {
                console.log(count);
            }
        ,1000*duration)
    }

    for(let i=0;i<10;i++)
    {
        mycounter(i,i+1);
    }
