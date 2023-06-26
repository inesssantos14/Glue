const menu = document.querySelector('.menu');
const mobileMenuButton = document.querySelector('button.mobile-button');

function handleWindowScroll() {
    if (window.innerWidth >= 600) {
      if (window.scrollY >= 60) {
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
      }
    } else {
      menu.classList.remove('active');
    }
  }

function handleMobileMenuClick() {
    menu.classList.toggle('show');
}

window.addEventListener('scroll', handleWindowScroll);
mobileMenuButton.addEventListener('click', handleMobileMenuClick);