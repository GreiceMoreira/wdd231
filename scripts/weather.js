const currentTemp = document.querySelector("#current-temp");
const watherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&appid=550eb64eec59386942f21cc388074a12';

async function apiFetch(response) {
    try {
           const response = await fetch(url);
           if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);  
           }

    } catch(error) {
        console.log(error);
    }    
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconstc = `https://openweathermap.org/img/w/${watherIcon}.icon`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('width' , '340');
    weatherIcon.setAttribute( 'heigth' , '440');
    captionDesc.textContent = `${desc}`;
}

apiFetch();


