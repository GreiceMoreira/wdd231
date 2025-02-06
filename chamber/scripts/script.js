// Last modification and current Year 

function thisYear() {
    const d = new Date();
    document.getElementById("currentyear").textContentL = "&copy;" + d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
}
function lastModification() {
    const lastModification = document.getElementById("lastModification");
    lastModification.innerHTML = "Last modification: " + document.lastModified
}

// Hamburguer menu 

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

//subtitle

function setSubTitle() {
    let subTitle = document.querySelector(".active-page");
    console.log(subTitle.outerText)

    document.querySelector("#subTitle").innerHTML = subTitle.outerText

}

function activePage() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        if (link.href === location.href) {
            link.classList.toggle("active-page");
        }
    });
}

// Companies Cards 
const urlMembers = "data/members.json";
const cards = document.querySelector('#cards');

async function getCompanyData() {
    try {
        const response = await fetch(urlMembers);
        const data = await response.json();

        cards.innerHTML = ''; 

        if (cards.classList.contains('grid')) {
            displayCompaniesGrid(data.companies);
        } else {
            displayCompaniesList(data.companies);
        }
    } catch (error) {
        console.error("ERROR", error);
    }
}

function displayCompaniesGrid(companies) {
    companies.forEach(company => {
        let card = document.createElement('section');
        card.classList.toggle('own');
        let companyNames = document.createElement('h2');
        let image = document.createElement('img');
        let website = document.createElement('h3');
        let addresse = document.createElement('h4');

        companyNames.textContent = `${company.companyName}`;
        website.textContent = `${company.website}`;
        addresse.textContent = `${company.addresse}`;

        image.setAttribute('src', company.imageurl);
        image.setAttribute('alt', `image of ${company.companyName} company`);
        image.setAttribute('loading', 'lazy');

        card.appendChild(companyNames)
        card.appendChild(image)
        card.appendChild(website)
        card.appendChild(addresse)

        cards.appendChild(card)
    });
}

function displayCompaniesList(companies) {
    companies.forEach(company => {
        let card = document.createElement('section');
        card.classList.toggle('ownList');
        let companyNames = document.createElement('h2');
        let website = document.createElement('h3');
        let addresse = document.createElement('h4');


        companyNames.textContent = `${company.companyName}`;

        website.textContent = `${company.website}`;
        addresse.textContent = `${company.addresse}`;

        card.appendChild(companyNames)
        card.appendChild(website)
        card.appendChild(addresse)


        cards.appendChild(card)
    });
}

// grid or list 

function setView(view) {
    cards.classList.remove('grid', 'list'); 
    cards.classList.add(view);
    getCompanyData();
}

function onLoad() {
    // thisYear()
    // lastModification()
    // getCompanyData();
    // activePage()
    // setSubTitle()
    getWeatherData()
}


async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayCurrentWeather(data.prophets);
}

const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=-30.03&lon=-51.18&appid=550eb64eec59386942f21cc388074a12';

async function getWeatherData(){
    const data = await fetch(urlWeather);
    const result= await data.json();

    displayCurrentWeather(result); 

}

const currentW = document.querySelector('#current-weather');

const displayCurrentWeather = (result) => {
    let card = document.createElement('section');
    card.classList.toggle('myWeather');


    let weatherIcon = document.createElement('img');
    let temperature = document.createElement('h3');
    let defWeather = document.createElement('p');
    let extraWeather = document.createElement('p');


    const tempCelsius = (result.main.temp - 273.15).toFixed(2);
    const tempMaxCelsius = (result.main.temp_max - 273.15).toFixed(2);
    const tempMinCelsius = (result.main.temp_min - 273.15).toFixed(2);

    temperature.textContent = `${tempCelsius} °C`;

    defWeather.textContent = `${result.weather[0].main}`;

    extraWeather.textContent = `High ${tempMaxCelsius} °C | Low: ${tempMinCelsius} | Humidity: ${result.main.humidity}% |Sunrise: ${result.sys.sunrise} | Sunset: ${result.sys.sunset}`;

    weatherIcon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    weatherIcon.alt = result.weather[0].description;


    card.appendChild(weatherIcon);
    card.appendChild(temperature);
    card.appendChild(defWeather);
    card.appendChild(extraWeather);


    currentW.appendChild(card)
}

