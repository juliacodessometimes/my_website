//toggle accordian menu
var menutoggle = document.getElementsByClassName("menu-toggle");
var i;

for (i = 0; i < menutoggle.length; i++) {
  menutoggle[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}