// Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// this function used to creat th countUp  animation for business websites
// use the three parameters to customize it 
// call it for every element
// note that may be small diffrance in the count 100 be 99 so chack it 
function numCounter(tagId, maxCount, speed) {
  var initialNumber = 0;
  function counter() {
    document.getElementById(tagId).innerHTML = initialNumber;
    ++initialNumber;
  }
  var counterDelay = setInterval(counter, speed);
  function totalTime() {
    clearInterval(counterDelay);
  }
  var totalPeriod = speed * (maxCount);
  setTimeout(totalTime, totalPeriod);
}

numCounter("clients", 44, 50);
numCounter("proj-done", 70, 50);
numCounter("awards", 30, 50);
numCounter("experience", 20, 50);

// Scroll Animation

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


function hidemenu() {
  let navUl = document.getElementById("nav-ul");
  navUl.classList.remove("mb-menu");
  navUl.classList.add("nav-items");
}

function showmenu(){
  let hmbg  = document.getElementById("hambuurger");
  let navUl = document.getElementById("nav-ul");
  navUl.classList.remove("nav-items");
  navUl.classList.add("mb-menu");
}