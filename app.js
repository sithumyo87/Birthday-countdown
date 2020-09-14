const dayEL = document.getElementById("day");
const hourEL = document.getElementById("hour");
const minEL = document.getElementById("min");
const secEL = document.getElementById("sec");



const newYear = "14 Nov 2020";
function countdown(){
    const today = new Date();
    const newCountYear = new Date(newYear)
    const totalSec = (newCountYear-today) / 1000;
    const day = Math.floor(totalSec / 3600 / 24)
    const hour = Math.floor(totalSec / 3600 ) % 24;
    const min = Math.floor(totalSec / 60)%60;
    const sec = Math.floor(totalSec % 60);
    dayEL.innerHTML = day;
    hourEL.innerHTML = format(hour);
    minEL.innerHTML = format(min);
    secEL.innerHTML = format(sec);
}
setInterval(countdown,1000)

function format(time){
    return time < 10 ? `0${time}` : time;
}