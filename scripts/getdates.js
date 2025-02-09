

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


const courseData = {
    "cse110": {
        title: "CSE 110",
        content: "Introdução à Computação e Algoritmos."
    },
    "wdd130": {
        title: "WDD 130",
        content: "Desenvolvimento Web Básico com HTML e CSS."
    },
    "cse111": {
        title: "CSE 111",
        content: "Estruturas de Dados e Algoritmos Intermediários."
    },
    "cse210": {
        title: "CSE 210",
        content: "Programação Orientada a Objetos."
    },
    "wdd131": {
        title: "WDD 131",
        content: "Desenvolvimento Web Responsivo e Acessibilidade."
    },
    "wdd231": {
        title: "WDD 231",
        content: "Desenvolvimento Web Avançado com JavaScript."
    }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

document.querySelectorAll(".course-module").forEach(button => {
    button.addEventListener("click", () => {
        const courseKey = button.getAttribute("data-modal");
        const course = courseData[courseKey];

        if (course) {
            modalTitle.textContent = course.title;
            modalContent.textContent = course.content;
            modal.showModal();
        }
    });
});

function closeModal() {
    modal.close();
}

