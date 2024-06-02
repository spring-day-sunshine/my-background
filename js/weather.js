const API_KEY = "5d491186381a03fd56d4adfa574d4622";

function onGoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.name, data.weather[0].main);
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
        });
}
function onGoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGoOk, onGoError);
//onGoOk({sexyObj});
