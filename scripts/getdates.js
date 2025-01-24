

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



function onLoad() {
    thisYear()
    myFunction()
}