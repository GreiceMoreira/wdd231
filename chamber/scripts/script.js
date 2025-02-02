// Last modification and current Year 
const lastModification = document.getElementById("lastModification");
const d = new Date();

function thisYear() {
    document.getElementById("currentyear").textContentL = "&copy;" + d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
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
const url = "data/members.json";
const cards = document.querySelector('#cards');

async function getCompanyData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        cards.innerHTML = ''; // Limpa o conteúdo antes de adicionar novos elementos

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
    thisYear()
    myFunction()
    getCompanyData();
    activePage()
    setSubTitle()
}
