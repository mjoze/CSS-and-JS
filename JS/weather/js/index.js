const key = '01e7f240750c5a8291f158cce532809d';

const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const cityName = 'London'

const weather = {};
const cityWeather = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
fetch(cityWeather)
    .then(response => response.json())
    .then(data => {
        weather['name'] = (data['name']);
        weather['temp'] = (data.main['temp']);
    });

console.log(weather);