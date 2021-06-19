console.log('Hello World');

const city = 'Manhattan Beach';

const key = 'bd54b8f9736f266e782c32ce446f882a';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key;

const weatherImg = document.getElementById('weatherImg');
const icon = document.getElementById('icon');
const parallaxText = document.getElementById('parallaxText');

const weatherSrc = [
    "./image stock/DEFAULT.jpeg",
    "./image stock/Clearsky.jpeg",
    "./image stock/rain.jpeg",
    "./image stock/Snow.jpeg",
    "./image stock/Wind.jpeg",
    "./image stock/Clouds.jpeg",
];

fetch(url).then(function(response){
    console.log(response);
    return response.json();
}).then(function(data){
    console.log(data);

    if (data.weather[0].main === "Clouds") {
console.log(weatherSrc[5]);
icon.innerText = 'cloud_queue';
weatherImg.setAttribute('src', weatherSrc[5]);
    } else if (data.weather[0].main === "Clear") {
        console.log(weatherSrc[1]);

        icon.innerText = 'brightness_5';
parallaxText.innerText = 'Looks like a beautiful day! You should check out our honey lavender essential oil!'
        weatherImg.setAttribute('src', weatherSrc[1]);

    }  else if (data.weather[0].main === "Snow") {
        console.log(weatherSrc[3]);
        icon.innerText = 'ac_unit';
        parallaxText.innerText = 'Brrr! On a chilly day like today... you should treat yourself to Susans Seasonal Chamomile Essential oil!';
        weatherImg.setAttribute('src', weatherSrc[3]);
    }  
    else if (data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
        console.log(weatherSrc[2]);
        icon.innerText = 'more_vert';
        weatherImg.setAttribute('src', weatherSrc[2]);
    } else{
        weatherImg.setAttribute('src', weatherSrc[0]);
        console.log(weatherSrc[0]);
        icon.innerText = 'looks';
    }

})
.catch(function(error){
    console.log(error);
}); 



