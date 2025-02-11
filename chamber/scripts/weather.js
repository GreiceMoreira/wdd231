
const apiKey = "550eb64eec59386942f21cc388074a12";
const lat = "-30.03";
const lon = "-51.18";


export async function getWeatherData() {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const result = await data.json();
    displayCurrentWeather(result);
}


function displayCurrentWeather(result) {
    const currentW = document.querySelector('#current-weather');
    let card = document.createElement('section');
    card.classList.toggle('myWeather');

    let title = document.createElement('h2')
    title.textContent = `Current Weather`;

    let weatherIcon = document.createElement('img');
    weatherIcon.classList.toggle('weatherIcon');
    let temperature = document.createElement('h3');
    let defWeather = document.createElement('p');
    let sunrise1 = document.createElement('p');
    let sunset1 = document.createElement('p');
    let temp_max = document.createElement('p');
    let temp_min = document.createElement('p');
    let humidity = document.createElement('p');

    const sunrise = new Date(result.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(result.sys.sunset * 1000).toLocaleTimeString();

    temperature.textContent = `${result.main.temp} °C`;
    defWeather.textContent = `${result.weather[0].main}`;
    temp_max.textContent = `High ${result.main.temp_max} °C `;
    temp_min.textContent = `Low: ${result.main.temp_min} °C `;
    sunrise1.textContent = `Sunrise: ${sunrise}`;
    sunset1.textContent = `Sunset: ${sunset}`;
    humidity.textContent = `Humidity: ${result.main.humidity}%`;

    weatherIcon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    weatherIcon.alt = result.weather[0].description;

    card.appendChild(title);
    card.appendChild(weatherIcon);
    card.appendChild(temperature);
    card.appendChild(defWeather);
    card.appendChild(temp_max);
    card.appendChild(temp_min);
    card.appendChild(humidity);
    card.appendChild(sunrise1);
    card.appendChild(sunset1);

    currentW.appendChild(card);
}

// obtain the forecast weather
export async function getForecastWeather() {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const result = await data.json();
    displayWeatherForecast(result);
}


function displayWeatherForecast(result) {
    const forecastW = document.querySelector('#weather-forecast');
    let card = document.createElement('section');
    card.classList.toggle('myForecastWeather');

    let title = document.createElement('h2')
    title.textContent = `Forecast Weather`;
    let today = document.createElement('p');
    let tomorrow = document.createElement('p');
    let afterTomorrow = document.createElement('p');

    today.textContent = `Today: ${result.list[0].main.temp} °C`;
    tomorrow.textContent = `Tomorrow: ${result.list[3].main.temp} °C`;
    afterTomorrow.textContent = `After Tomorrow ${result.list[11].main.temp} °C`;

    card.appendChild(title);
    card.appendChild(today);
    card.appendChild(tomorrow);
    card.appendChild(afterTomorrow);

    forecastW.appendChild(card);
}
