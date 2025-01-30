const lastModification = document.getElementById("lastModification");
const d = new Date();

function thisYear() {
    document.getElementById("currentyear").innerHTML = "&copy;" + d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
}

function myFunction() {
    lastModification.innerHTML = "Last modification: " + document.lastModified
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

async function getData(){
    const company = await fetch()

}

const url = "https://raw.githubusercontent.com/GreiceMoreira/wdd231/main/chamber/data/members.json";

const cards = document.querySelector('#cards');

async function getCompanyData(){
    const response = await fetch(url);
    const data = await response.json();

    displayCompany(data.companyName);
}

const displayCompany = (companys) => {
    companys.forEach(company => {
        let card = document.createElement('section');
        card.classList.toggle('own');
        let companyNames = document.createElement('h2');
        let website = document.createElement('h3');
        let addresse = document.createElement('h4');
        let image = document.createElement('img');

        companyNames.textContent = `${company.companyName} Company`;

        website.textContent = `${company.website}`;
        addresse.textContent = `${company.addresse}`;


        image.setAttribute('src' , company.imageurl);
        image.setAttribute('alt' , `image of ${companyNames.companyName} company`);
        image.setAttribute('loading' , 'lazy');
        image.setAttribute('width' , '340');
        image.setAttribute( 'heigth' , '440');

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
}
