/*Menu*/

const menu = document.querySelector('.menu');

function handleWindowScroll() {
    if (window.scrollY >= 60) {
        menu.classList.add('active')
    } else {
        menu.classList.remove('active')
    }
}

/*Login*/

window.addEventListener('scroll', handleWindowScroll);
form.addEventListener('submit', handleFormSubmit);

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

/*Accordion*/
  
var acc = document.getElementsByClassName("accordion");
var i;
  
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }