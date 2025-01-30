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
    const response = await fetch(url);
    const data = await response.json();

    displayCompanies(data.companies);
}

function displayCompanies(companies) {
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
        image.setAttribute('alt', `image of ${companyNames.companyName} company`);
        image.setAttribute('loading', 'lazy');

        card.appendChild(companyNames)
        card.appendChild(image)
        card.appendChild(website)
        card.appendChild(addresse)
        

        cards.appendChild(card)
    });
}

// grid or list 

function setView(view) {
    const container = document.getElementById('membersContainer');
    if (view === 'grid') {
        container.classList.remove('list');
        container.classList.add('grid');
    } else {
        container.classList.remove('grid');
        container.classList.add('list');
    }
}


function onLoad() {
    thisYear()
    myFunction()
    getCompanyData();
    activePage()
    setSubTitle()
}
