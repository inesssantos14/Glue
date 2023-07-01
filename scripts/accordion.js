var acc = document.getElementsByClassName("accordion");
var i;

function accordionAction() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {        
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}
  
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", accordionAction);
}