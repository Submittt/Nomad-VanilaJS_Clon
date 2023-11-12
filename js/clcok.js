const clock = document.querySelector("#clockBox");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0"); //시계 (초) 변수
    //clock.innerText = `${hours}:${minutes}:${seconds}`; 시계 (시:분:초)
    clock.innerText = `${hours}:${minutes}:${seconds}`;
} 

getClock();
setInterval(getClock, 1000);