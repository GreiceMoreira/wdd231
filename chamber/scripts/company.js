
const urlMembers = "data/members.json";
const cards = document.querySelector('#cards');


export async function getCompanyData() {
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
    return companies.filter(company =>
        company.membershipLevel === "Golden" || company.membershipLevel === "Silver"
    );
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

        card.appendChild(companyNames);
        card.appendChild(image);
        card.appendChild(website);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(addresse);

        cards.appendChild(card);
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

        card.appendChild(companyNames);
        card.appendChild(website);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(addresse);

        cards.appendChild(card);
    });
}
