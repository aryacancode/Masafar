var slideindex = 0;

showSlide();

var timer = setInterval(showSlide, 1800);

var slidecontainer = document.getElementById('slideshow-container')
var slideControl = document.getElementById('slide-control')

slidecontainer.onmouseover = function() {
    clearInterval(timer);
}
slidecontainer.onmouseover = function() {
    clearInterval(timer);
}
slidecontainer.onmouseleave = function() {
    timer = setInterval(showSlide, 1800);
}
slidecontainer.onmouseleave = function() {
    timer = setInterval(showSlide, 1800);
}

function showSlide() {
    var i;
    var slides = document.getElementsByClassName('slide-item');
    var dots = document.getElementsByClassName('dot');

    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(var i = 0; i < dots.length; i++){
       dots[i].className = dots[i].className.replace(" active", "");
    }

    slideindex++;
    if (slideindex > slides.length) slideindex = 1;
    slides[slideindex - 1].style.display = "block";
    dots[slideindex - 1].className += " active";
}

function chooseSlide(n) {
    slideindex = n;
    showSlide();
    clearInterval(timer);
}

function showMenu(){
    var topNav = document.getElementById('topnav');
    if (topNav.className === "navbar") {
        topNav.className += " show";
    } 
    else {
        topNav.className = "navbar"
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }