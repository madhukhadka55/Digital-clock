/*

function clock() {
    const fulldate= new Date();
const hours = fulldate.getHours();
const mins = fulldate.getMinutes();

const secs = fulldate.getSeconds();

document.getElementById('hour').innerHTML=hours;
document.getElementById('minute').innerHTML=mins;
document.getElementById('second').innerHTML=secs;
}

setInterval(clock,1000);*/


function showTime(){

    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
     var am_pm = "AM";





    if (hr>12)
    {
        hr-=12;
        am_pm = "PM";

    }
    if(hr==0)
    {

        hr=12;

    }
    hr=(hr<10) ?"0" + hr :hr;
    min=(min<10)? "0" + min :min; 
    sec=(sec<10)? "0" + sec :sec;










var currentTime = hr +":"+ min + ":" +sec +"  " + am_pm ;
document.getElementById("clock").innerHTML = currentTime;

setTimeout (showTime,1000);


}

showTime();