function main(){
let date= new Date()
let s= date.getSeconds()*6
let m= date.getMinutes()*6 + date.getSeconds()*0.1
let h= date.getHours()*30 + date.getMinutes()*0.5
document.querySelector(".sec").style.transform = `rotate(${s}deg)`
document.querySelector(".min").style.transform = `rotate(${m}deg)`
document.querySelector(".hour").style.transform = `rotate(${h}deg)`
}


setInterval(main, 1000)