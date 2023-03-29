

//Change le style du nav
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);

    var top = document.getElementById("scrollUp");
    top.classList.toggle("top", window.scrollY < 300);
})

// Mode sombre
var mode = document.getElementById("mode");

mode.addEventListener("click", function() {
  document.body.classList.toggle("dark");
})

//Affiche le menu de navigation
var menu = document.getElementById("menu");
var window

function closenav() {
    menu.style.left = "-120vw";
    document.querySelector("body").style.overflow = "";
}

function opennav() {
    menu.style.left = "0";
    document.querySelector("body").style.overflow = "hidden";
}


//Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}