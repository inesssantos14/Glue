const menu = document.querySelector('.menu');

const emailInput = document.querySelector('input[name="email"]');

const form = document.querySelector('form');
const errorsList = document.querySelector('ul.errors');

function handleWindowScroll() {
    if (window.scrollY >= 60) {
        menu.classList.add('active')
    } else {
        menu.classList.remove('active')
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    errorsList.innerHTML = '';
    const errors = [];

      if (emailInput.value === '' || !emailInput.value.includes('@')) {
        errors.push('Insira um e-mail válido');
    }


    if (errors.length > 0) {
        errors.forEach(error => {
            const li = document.createElement('li');
            li.textContent = error;
            errorsList.appendChild(li);
        });
    } else {
        form.submit();
    }
}

window.addEventListener('scroll', handleWindowScroll);
form.addEventListener('submit', handleFormSubmit);