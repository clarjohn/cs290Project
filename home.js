



//Home Page slide deck
var slideIndex = 1;
Slides(slideIndex);

// Next/previous controls
function changeSlides(n) {
  Slides(slideIndex += n);
}

function Slides(n) {
    var i;
    var slides = document.getElementsByClassName("SlidePhoto");
    if (n > slides.length) {slideIndex = 1}; //go back to 1st photo if we move pass the last photo
    if (n < 1) {slideIndex = slides.length}; //if already on 1st photo and backhit move to next slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    slides[slideIndex-1].style.display = "block";
 
  }
  
  window.addEventListener("load",function() {
    myTimer = setInterval(function(){changeSlides(1)}, 4000);
})