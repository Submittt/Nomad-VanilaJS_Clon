const API_KEY = "9ddad9bcfd46250b208736f4f6bfb9d0";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city_tem = document.querySelector("#weatherBox span:first-child");
        const weather = document.querySelector("#weatherBox span:nth-child(2)");
        let weatherIcon = document.querySelector('.weather-icon');
        const {icon} = data.weather[0];
        city_tem.innerHTML = `${data.name}, <br> Min_tem : ${Math.round(data.main.temp_min)}°C <br> Max_tem : ${Math.round(data.main.temp_max)}°C`;
        weather.innerHTML =`${data.weather[0].main}`;
        weatherIcon.innerHTML = `<img src="icons/${icon}.png">`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
