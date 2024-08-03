
function padding(num)
{
    return num.toString().padStart(2,"0");
}

setInterval(function()
{
let date=new Date();
let hour=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
let flag= hour>=12? "PM":"AM"
hour=hour%12;
hour=hour? hour:12;
hour=padding(hour);
min=padding(min);
sec=padding(sec);
console.log(hour+":"+min+":"+sec+" "+flag);
},1000);

