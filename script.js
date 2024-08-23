let hour=document.getElementById("hour")
let sec=document.getElementById("sec")
let min=document.getElementById("min")
setInterval(()=>{
    let d=new Date()
    let h=d.getHours()
    let m=d.getMinutes()
    let s=d.getSeconds()
    let hr=30*h+m/2
    let sr=6*s
    let mr=6*m
    hour.style.transform=`rotate(${hr-90}deg)`
    sec.style.transform=`rotate(${sr-90}deg)`
    min.style.transform=`rotate(${mr-90}deg)`
},1000)