const containers = document.querySelectorAll('.container');
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        const activeContainer = document.querySelector('.container:not(.hide)');
        if (activeContainer.id == item.dataset.target) {
            return;
        }

        activeContainer.classList.add('hide');
        const target = document.getElementById(item.dataset.target);
        target.classList.remove('hide');        
    })
})
