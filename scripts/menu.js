const menu = document.querySelector('.menu');

function handleWindowScroll() {
    if (window.scrollY >= 60) {
        menu.classList.add('active')
    } else {
        menu.classList.remove('active')
    }
}