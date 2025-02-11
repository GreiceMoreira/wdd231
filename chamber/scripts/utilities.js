
export function thisYear() {
    const d = new Date();
    document.getElementById("currentyear").innerHTML = "&copy;" + d.getFullYear() + " | 👩🏼‍💻 Greice Moreira | Rio Grande do Sul, Brazil";
}


export function lastModification() {
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModification").textContent = `Last modification: ${lastModified.toLocaleString()}`;
}

export function setSubTitle() {
    let subTitle = document.querySelector(".active-page");
    if (subTitle) {
        document.querySelector("#subTitle").innerHTML = subTitle.outerText;
    }
}


export function activePage() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        if (link.href === location.href) {
            link.classList.toggle("active-page");
        }
    });
}
