

import { getWeatherData, getForecastWeather } from './weather.js';
import { getCompanyData } from './company.js';
import { toggleHamburgerMenu } from './navigation.js';
import { thisYear, lastModification, setSubTitle } from './utilities.js';



document.addEventListener("DOMContentLoaded", () => {
    getWeatherData();
    getForecastWeather();
    getCompanyData();
    toggleHamburgerMenu();
    thisYear();
    lastModification();
    setSubTitle();
});
