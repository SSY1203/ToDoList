const API = "431217dfd6b9d3f06814f172b9f14668";

function geoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}&units=metric`;

    fetch(url).then(response => response.json())
    .then((data)=>{
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");

        city.innerText = `${data.name}`;
        weather.innerText = ` / ${data.weather[0].main} / ${data.main.temp}`;
    });
}

function geoFail(){
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);