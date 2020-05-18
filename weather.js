const API_KEY = "9a8de0bc1768dd8cbe8daa901586f680";
const COORDS = 'coords'
const weather = document.querySelector('.js_weather')
 
getWeather=(lat,lon)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then((res)=>{
        return res.json()
    }).then((res)=>{
        const temperature = res.main.temp
        const weatherState = res.weather[0].main
        const place = res.name
        
        weather.innerText = `${temperature}˚ @ ${weatherState} @ ${place}`
    })
}

saveCoords=(coords)=>{
    localStorage.setItem(COORDS, JSON.stringify(coords))
}

handleGeoSucces=(position)=>{
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj)
}


handleGeoErro=(error)=>{
    console.error(error)
}

askForCoords = ()=>{
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErro)
}

init =()=>{
    const loadedCords = localStorage.getItem(COORDS)
    if(loadedCords === null){
        askForCoords();
    }else{
        //getweather
        const parseCords = JSON.parse(loadedCords)
        getWeather(parseCords.latitude, parseCords.longitude) 
    }
}

init()
