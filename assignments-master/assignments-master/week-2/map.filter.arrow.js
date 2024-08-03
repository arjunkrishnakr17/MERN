arr=[1,2,3,4,5,6]
//map
console.log(arr.map((i)=>{
    return i*2;
}))

//custom map fn
function transform(i)
{
    return i*2;
}

function map(array,cb)
{
    for(let i=0;i<array.length;i++)
    {
        array[i]=cb(array[i]);
    }
    return array;
}

new_array=map(arr,transform);
console.log(new_array);

//filter
array=[1,2,3,4,5];
console.log(array.filter((i)=>
{
    if(i%2===0)
    {
        return true
    }
    else{
        return false;
    }
}))

