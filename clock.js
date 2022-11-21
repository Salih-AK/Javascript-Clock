let Name=prompt("İsminizi Giriniz:")
let myName=document.querySelector("#myName")
myName.innerHTML=Name;


function showTime(){
    let dt=new Date()
    let hour=dt.getHours()
    let minute=dt.getMinutes()
    let second=dt.getSeconds()
    let totalclock=hour+":"+minute+":"+second
    let clock=document.querySelector("#myClock")
    clock.innerHTML=totalclock
    console.log(totalclock)
}
showTime()