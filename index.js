window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("nav");
var section = document.getElementById("bio");
var sticky = section.offsetTop - 60;
var typewriter = document.getElementById("animation");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("nav");
    navbar.classList.remove("nav-hidden");
    typewriter.classList.add("animation-on");
  } else {
    navbar.classList.add("nav-hidden");
    navbar.classList.remove("nav");
  }
}
