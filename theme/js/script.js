const containers = document.querySelectorAll('.container');
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        const activeContainer = document.querySelector('.container:not(.hide)');
        if (activeContainer.id == item.dataset.target) {
            return;
        }

        const activeMenuItem = document.querySelector('.menu a.active');
        activeMenuItem.classList.remove('active');
        item.classList.add('active');

        activeContainer.classList.add('hide');
        const target = document.getElementById(item.dataset.target);
        target.classList.remove('hide');
    })
})


// Theme
const toggleSwitch = document.querySelector('.app-header__switch-input');
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Check if user has set a theme
let currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// Set dark mode if preferred
if (!currentTheme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    currentTheme = 'dark';
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
