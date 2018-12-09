  var slideIndex;
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("featured-item");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slides[slideIndex-1].style.display = "grid"; 
  }
  var slideIndex = 1;
  showSlides(slideIndex);
$(document).ready(function(){
    $('#menu').click(function(){
      $('nav ul').toggleClass('active');
    });

});

