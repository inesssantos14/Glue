var acc = document.getElementsByClassName("accordion");
var i;

function accordionAction() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {          /*se variavel j existir ao clique fecha*/ 
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px"; /*se variavel nao existe ao clique abre e atribui altura scrollheight em*/ 
  }
}
  
for (i = 0; i < acc.lenght; i++) {
  acc[i].addEventListener("click", accordionAction);
}