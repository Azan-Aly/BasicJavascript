const inputtext = document.getElementById('inputtext');
const getWeatherbtn = document.getElementById('submitweather');
const locationEl = document.querySelector('.location');
const dateEl = document.querySelector('.date');
const iconEl = document.querySelector('.icon');
const temperatureEl = document.querySelector('.temperature');
const weatherEl = document.querySelector('.weather');
const errorMsg = document.querySelector('.errormsg');
const loadingEl = document.querySelector('.loading');

const API_Key = 'e37ec1984e2206c51c48167d52a7f1c8';

function updateDate() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    dateEl.textContent = now.toLocaleDateString('en-US', options);
}
updateDate();

inputtext.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeatherbtn.click();
    }
});

getWeatherbtn.addEventListener('click', async () => {
    const city = inputtext.value.trim();
    if (!city) return;

    hideError();
    showLoading();

    try {
        const Weatherdata = await Fetchweatherdata(city);
        displayWeatherData(Weatherdata);
        
    } catch (error) {
        showError();
    } finally {
        hideLoading();
    }

});

async function Fetchweatherdata(city) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('City not found');
    }

    const data = await response.json();
    // console.log(data);
    return data;
}

function displayWeatherData(data) {
    const { name, sys, main, weather } = data;

    locationEl.textContent = `${name}, ${sys.country}`;
    temperatureEl.textContent = `${Math.round(main.temp)}°C`;
    weatherEl.textContent = weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1);
    iconEl.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    iconEl.alt = weather[0].description;

    // Clear input
    inputtext.value = '';
}

function showError() {
    errorMsg.style.display = 'block';
}

function hideError() {
    errorMsg.style.display = 'none';
}

function showLoading() {
    loadingEl.style.display = 'block';
    getWeatherbtn.disabled = true;
}

function hideLoading() {
    loadingEl.style.display = 'none';
    getWeatherbtn.disabled = false;
}