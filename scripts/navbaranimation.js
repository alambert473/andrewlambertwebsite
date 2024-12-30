const button = document.querySelector('.navbar-button');
const navbar = document.querySelector('nav');

const isPlayed = false;

button.addEventListener('click', () => {
    if (navbar.classList.contains('navtobottom')) {
        navbar.classList.remove('navtobottom');
        navbar.classList.add('navtoUp');

        setTimeout(() => {
            navbar.classList.remove('navtoUp');
        }, 500);

    } else {
        navbar.classList.remove('navtobUp');
        navbar.classList.add('navtobottom');

        setTimeout(() => {
            navbar.classList.remove('navtoBottom');
        }, 500);
    }
});