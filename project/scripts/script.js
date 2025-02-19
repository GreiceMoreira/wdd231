
// Hamburguer menu 

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('open');
});


const url = "data/receips.json";
const cards = document.querySelector('#cards');

async function getReceipsData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.table(data.crochets);
        displayCrochets(data.crochets);
    } catch (error) {
        console.error("Error fetching or parsing data:", error);
    }
}


const displayCrochets = (crochets) => {
    cards.innerHTML = "";

    crochets.forEach(crochet => {
        let card = document.createElement('section');
        card.classList.toggle('own');
        let name = document.createElement('h2');
        let yearn = document.createElement('h4');
        let hook = document.createElement('h4');
        let level = document.createElement('h4');
        let image = document.createElement('img');


        name.textContent = `${crochet.name} square`;
        yearn.textContent = `Yean: ${crochet.yearn}`;
        hook.textContent = `Hook: ${crochet.hook}`;
        level.textContent = `Level: ${crochet.level}`;


        image.setAttribute('src', crochet.imageurl);
        image.setAttribute('alt', 'image of ${crochet.name} square');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
    

        card.appendChild(name)
        card.appendChild(yearn)
        card.appendChild(hook)
        card.appendChild(level)
        card.appendChild(image)

        cards.appendChild(card)
    });
}

getReceipsData();


document.addEventListener("DOMContentLoaded", async () => {
    await getReceipsData();

    document.querySelector("#All").addEventListener("click", async () => {
        await getReceipsData();
    });

    document.querySelector("#child").addEventListener("click", async () => filterCrochets("Child"));
    document.querySelector("#adult").addEventListener("click", async () => filterCrochets("Adult"));
    document.querySelector("#granny").addEventListener("click", async () => filterCrochets("Granny"));
});


async function filterCrochets(level) {
    const response = await fetch(url);
    const data = await response.json();
    const filteredCrochets = data.crochets.filter(crochet => crochet.level.toLowerCase() === level.toLowerCase());
    displayCrochets(filteredCrochets);
}



// const homeButton = document.querySelector("#home");
//  homeButton.addEventListener("click", () => {
//     crochetCards(crochets);
//  });


// const childButton = document.querySelector("#child");
// childButton.addEventListener("click", () => {
//     const childCrochet = crochets.filter(crochet => crochet.level == "child");
//     crochetCards(childCrochet);
// });

// const adultButton = document.querySelector("#adult");
//  adultButton.addEventListener("click", () => {
//     const adultCrochets = crochets.filter(crochet => crochet.level == "adult");
//     crochetCards(adultCrochets);
// });


// const grannyButton = document.querySelector("#granny");
// grannyButton.addEventListener('click', () => {
//     const grannyCrochet = crochets.filter(crochet => crochet.level == "granny");
//     crochetCards(grannyCrochet);
// });










const membershipData = {
    child: {
        title: "Beginner Crochet Membership",
        description: "Perfect for those new to crochet. Includes access to beginner tutorials, basic patterns, and a supportive community."
    },
    adult: {
        title: "Intermediate Crochet Membership",
        description: "Designed for those with some experience. Gain access to advanced patterns, exclusive workshops, and skill-building exercises."
    },
    granny: {
        title: "Advanced Crochet Membership",
        description: "For experienced crocheters. Enjoy masterclasses, complex patterns, personalized feedback, and professional networking opportunities."
    }
};

function showMembershipInfo(membershipId) {
    const membership = membershipData[membershipId];
    if (membership) {
        document.getElementById("membershipTitle").textContent = membership.title;
        document.getElementById("membershipDescription").textContent = membership.description;
        document.getElementById("membershipModal").showModal();
    }
}

// footer 

// Last modification and current Year 

function thisYear() {
    const d = new Date();
    document.getElementById("currentyear").innerHTML = "&copy;" + d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil"
}
function lastModification() {
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModification").textContent = `Last modification: ${lastModified.toLocaleString()}`;
}

thisYear();
lastModification(); 

