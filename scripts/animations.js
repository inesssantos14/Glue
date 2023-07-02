/*fade animation*/
const fade = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('opaque');
        } else {
            entry.target.classList.remove('opaque');
        }
    });
});

const fadeElements = document.querySelectorAll('.fade');
fadeElements.forEach((el) => fade.observe(el));

/*slide animation */

const slide = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('fixed');
        } else {
            entry.target.classList.remove('fixed');
        }
    });
});

const slideElements = document.querySelectorAll('.slide');
slideElements.forEach((el) => slide.observe(el));
