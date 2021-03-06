const clock = document.querySelector('.clock'),
        time = clock.querySelector('h1');

getClockTime = ()=>{
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    time.innerText = `${hours <10 ? `0${hours}` : hours} : ${minutes <10 ? `0${minutes}` : minutes}`
}

init = ()=>{
    getClockTime();
    setInterval(getClockTime,  1000)
}

init()