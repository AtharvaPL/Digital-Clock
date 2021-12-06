function currentTime(){
    const date = new Date()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds(2)

function updateTime(){
    if(hour<10){
        hour="0" + hour
    }
    if(minute<10){
        minute="0" + minute
    }
    if(second<10){
        second="0" + second
    }
}
updateTime()

function AMPM(){
    if(hour>12){
        hour=hour-12
        time = `${hour}:${minute}:${second}`
        time=time+" PM"
    } 
    else{
        time = `${hour}:${minute}:${second}`
        time=time+" AM"
    }
}
AMPM()

document.getElementById("clock").innerHTML = time
}
currentTime()
setInterval(currentTime,1000)



// setInterval( 
//     () => {
//         function currentTime(){
//             const date = new Date()
//         let hour = date.getHours()
//         let minute = date.getMinutes()
//         let second = date.getSeconds(2)
        
//         function updateTime(){
//             if(hour<10){
//                 hour="0" + hour
//             }
//             if(minute<10){
//                 minute="0" + minute
//             }
//             if(second<10){
//                 second="0" + second
//             }
//         }
//         updateTime()
        
//         function AMPM(){
//             if(hour>12){
//                 hour=hour-12
//                 time = `${hour}:${minute}:${second}`
//                 time=time+" PM"
//             } 
//             else{
//                 time = `${hour}:${minute}:${second}`
//                 time=time+" AM"
//             }
//         }
//         AMPM()
        
//         document.getElementById("clock").innerHTML = time
//         }
//         currentTime()
//     }
//     ,1000
// )