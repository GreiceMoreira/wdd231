// Last modification and current Year 
const lastModification = document.getElementById("lastModification");
const d = new Date();

function thisYear() {
    document.getElementById("currentyear").innerHTML = "&copy;" + d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
}

function myFunction() {
    lastModification.innerHTML = "Last modification: " + document.lastModified
}

// Hamburguer menu 

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

//subtitle


function setSubTitle() {
    let subTitle = document.querySelector(".active-page");
    console.log(subTitle.outerText)

    document.querySelector("#subTitle").innerHTML = subTitle.outerText

}

function activePage() {
    const links = document.querySelectorAll("nav li a");
    
    links.forEach(link => {
        if (link.href === location.href) {
            link.classList.toggle("active-page");
        }
    });
}

// Companies Cards 
const url = "https://raw.githubusercontent.com/GreiceMoreira/wdd231/main/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();

    displayCompanies(data.companies);
}

function displayCompanies(companies) {
    companies.forEach(company => {
        let card = document.createElement('section');
        card.classList.toggle('own');
        let companyNames = document.createElement('h2');
        let website = document.createElement('h3');
        let addresse = document.createElement('h4');
        let image = document.createElement('img');

        companyNames.textContent = `${company.companyName} Company`;

        website.textContent = `${company.website}`;
        addresse.textContent = `${company.addresse}`;


        image.setAttribute('src', company.imageurl);
        image.setAttribute('alt', `image of ${companyNames.companyName} company`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(companyNames)
        card.appendChild(website)
        card.appendChild(addresse)
        card.appendChild(image)

        cards.appendChild(card)
    });
}


function onLoad() {
    thisYear()
    myFunction()
    getCompanyData();
    activePage()
    setSubTitle()
}
