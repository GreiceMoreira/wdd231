document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.querySelector("#visit-message");
    const overlay = document.getElementById("overlay");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = new Date().getTime();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10)
        const timeDiff = currentTime - lastVisitTime;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysDiff} day${daysDiff > 1 ? "s" : ""} ago.`;
        }
    }
    localStorage.setItem("lastVisit", currentTime);
})
function closeSidebar() {
    document.getElementById("overlay").style.display = "none";
}


// Last modification and current Year 

function thisYear() {
    const d = new Date();
    document.getElementById("currentyear").innerHTML = "&copy;" + d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
}
function lastModification() {
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModification").textContent = `Last modification: ${lastModified.toLocaleString()}`;
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
    if (subTitle) {
        document.querySelector("#subTitle").innerHTML = subTitle.outerText;
    }
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

        const filteredMembers = selectMembership(data.companies);
        const randomCompanies = getRandomCompanies(filteredMembers);


        if (cards.classList.contains('grid')) {
            displayCompaniesGrid(randomCompanies);
        } else {
            displayCompaniesList(randomCompanies);
        }
    } catch (error) {
        console.error("ERROR", error);
    }
}

function selectMembership(companies) {
    const filteredMembers = companies.filter(company =>
        company.membershipLevel === "Golden" || company.membershipLevel === "Silver"
    );
    return filteredMembers;
}
function getRandomCompanies(filteredMembers, count = 3) {
    return filteredMembers
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
}

function displayCompaniesGrid(companies) {
    companies.forEach(company => {
        let card = document.createElement('section');
        card.classList.toggle('own');
        let companyNames = document.createElement('h2');
        let image = document.createElement('img');
        let website = document.createElement('h3');
        let phone = document.createElement('p');
        let membership = document.createElement('p');
        let addresse = document.createElement('h4');

        companyNames.textContent = `${company.companyName}`;
        website.textContent = `${company.website}`;
        addresse.textContent = `${company.addresse}`;
        phone.textContent = `${company.phoneNumber}`;
        membership.textContent = `${company.membershipLevel}`;

        image.setAttribute('src', company.imageurl);
        image.setAttribute('alt', `image of ${company.companyName} company`);
        image.setAttribute('loading', 'lazy');

        card.appendChild(companyNames)
        card.appendChild(image)
        card.appendChild(website)
        card.appendChild(phone)
        card.appendChild(membership)
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
        let phone = document.createElement('p');
        let membership = document.createElement('p');
        let addresse = document.createElement('h4');


        companyNames.textContent = `${company.companyName}`;
        phone.textContent = `${company.phoneNumber}`;
        membership.textContent = `${company.membershipLevel}`;

        website.textContent = `${company.website}`;
        addresse.textContent = `${company.addresse}`;

        card.appendChild(companyNames)
        card.appendChild(website)
        card.appendChild(phone)
        card.appendChild(membership)
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


// City lat and lon 
const apiKey = "550eb64eec59386942f21cc388074a12";
const lat = "-30.03";
const lon = "-51.18";

// Current Weather 
const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
async function getWeatherData() {
    const data = await fetch(urlWeather);
    const result = await data.json();

    displayCurrentWeather(result);
}

const currentW = document.querySelector('#current-weather');
const displayCurrentWeather = (result) => {
    let card = document.createElement('section');
    card.classList.toggle('myWeather');

    let title = document.createElement('h2')
    title.textContent = `Current Weather`

    let weatherIcon = document.createElement('img');
    weatherIcon.classList.toggle('weatherIcon')
    let temperature = document.createElement('h3');
    let defWeather = document.createElement('p');
    let sunrise1 = document.createElement('p');
    let sunset1 = document.createElement('p');
    let temp_max = document.createElement('p');
    let temp_min = document.createElement('p');
    let humidity = document.createElement('p')

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

    currentW.appendChild(card)
}

// Forecast Weather 
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

async function getForecastWeather() {
    const data = await fetch(urlForecast);
    const result = await data.json();

    console.log(result);

    displayWeatherForecast(result);
}

const forecastW = document.querySelector('#weather-forecast')
const displayWeatherForecast = (result) => {
    let card = document.createElement('section');
    card.classList.toggle('myForecastWeather');

    let title = document.createElement('h2')
    title.textContent = `Forecast Weather`
    let today = document.createElement('p');
    let tomorrow = document.createElement('p');
    let afterTomorrow = document.createElement('p');

    today.textContent = `Today: ${result.list[0].main.temp} °C`;
    console.log(today);
    tomorrow.textContent = `Tomorrow: ${result.list[3].main.temp} °C`
    console.log(tomorrow);
    afterTomorrow.textContent = `After Tomorrow ${result.list[11].main.temp} °C`
    console.log(afterTomorrow);

    card.appendChild(title);
    card.appendChild(today);
    card.appendChild(tomorrow);
    card.appendChild(afterTomorrow);

    forecastW.appendChild(card)
}

const membershipData = {
    np: {
        title: "NP Membership",
        description: "Free membership for non-profits, access to networking events."
    },
    bronze: {
        title: "Bronze Membership",
        description: "Discounted event fees, training access, and promotional opportunities."
    },
    silver: {
        title: "Silver Membership",
        description: "Priority event seating, training, and advertising discounts."
    },
    gold: {
        title: "Gold Membership",
        description: "Exclusive networking, free training, top-tier advertising placement."
    }
};

function showMembershipInfo(membershipId) {
    const membership = membershipData[membershipId];
    if (membership) {
        document.getElementById("membershipDescription").textContent = membership.description;
        document.getElementById("membershipModal").showModal();
    }
}




thisYear();
lastModification();
getCompanyData();
activePage();
setSubTitle();
getWeatherData();
getForecastWeather();

