const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        card.classList.toggle('own');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('h3');
        let birthPlace = document.createElement('h4');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} prophet`;

        birthDate.textContent = `${prophet.birthdate}`;
        birthPlace.textContent = `${prophet.birthplace}`;


        portrait.setAttribute('src' , prophet.imageurl);
        portrait.setAttribute('alt' , 'Portrait of ${prophet.name} prophet');
        portrait.setAttribute('loading' , 'lazy');
        portrait.setAttribute('width' , '340');
        portrait.setAttribute( 'heigth' , '440');

        card.appendChild(fullName)
        card.appendChild(birthDate)
        card.appendChild(birthPlace)
        card.appendChild(portrait)

        cards.appendChild(card)
    });
}

getProphetData();


