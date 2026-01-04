// Open nav bar in mobile

const menu = document.querySelector(".menu");
menu.addEventListener('click', () => {
    openMenu(menu);
})

function openMenu(menu) {
    if (menu.classList.contains('change')) {
        document.querySelector('nav ul').style.transform = 'translateX(90vw)';
    } else {
        document.querySelector('nav ul').style.transform = 'none';
    }
    menu.classList.toggle("change");
}

// Navigation links

const navigations = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

navigations.forEach(nav => {
    nav.addEventListener('click', () => {
        if (menu.style.display !== '') {
            openMenu(menu);
        }
    })
})

// Change navigation links state when scrolling

function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navigations.forEach(nav => nav.classList.remove('active'));
    navigations[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);