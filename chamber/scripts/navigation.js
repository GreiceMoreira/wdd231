
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');


export function toggleHamburgerMenu() {
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });
}
