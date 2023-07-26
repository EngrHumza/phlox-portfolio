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

var windowHeight =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    lastTop;

// window.addEventListener('scroll', function(event) {
//   var train = document.getElementById("trainMotion"),
//       top = train.getBoundingClientRect().top,
//       offset = top - windowHeight;
      
//     // console.group(offset, top, train);


//       if (offset > 0) {
//       	train.classList.remove('choochoo');
//       	return;
//       }
      
//       if (top < windowHeight / 2 && top > lastTop) {
//       	train.classList.remove('choochoo');
//       }
      
//       if (train.className.indexOf('choocho') === -1 && top < lastTop) {
//       	train.classList.add('choochoo');
//       }
      
//       lastTop = top;
     
// });


// window.addEventListener('scroll', function(event) {
  // var windowHeight =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
  //   lastTop;
  // var train = document.getElementById('trainMotion');
      // top = train.getBoundingClientRect().top,
      // console.log(offset);
      
      // var windowHeight = window.innerHeight;
      // var elementTop = train.getBoundingClientRect().top;
      // var elementVisible = 150;
// 
      // var offset = elementTop - windowHeight;
     
      // if (elementTop < windowHeight - elementVisible) {
        // train.classList.add("choochoo");
      // } else {
        // train.classList.remove("choochoo");
      // }


      // if (offset > 0) {
      // 	train.classList.remove('choochoo');
      // 	return;
      // }

      // console.log(offset);

      // if(offset<0){
      // 	train.classList.add('choochoo');
      // }
      
      // if (top < windowHeight / 2 && top > lastTop) {
      // 	train.classList.remove('choochoo');
      // }
      
      // if (train.className.indexOf('choocho') === -1 && top < lastTop) {
      // 	train.classList.add('choochoo');
      // }
      
      // lastTop = top;
    
// });


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


// Chatgpt  animation

document.addEventListener('DOMContentLoaded', function() {
  let previousScroll = window.pageYOffset || document.documentElement.scrollTop;
  const icons = document.querySelectorAll('.trainMotion svg');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > previousScroll) {
      // Scrolling down, move icons left with animation delay
      icons.forEach((icon, index) => {
        icon.style.transition = `transform 0.5s ease-out ${index * 100}ms`; /* Adding animation delay */
        icon.style.transform = 'translateX(50px)';
      });
    } else {
      // Scrolling up, move icons right with animation duration and timing function
      icons.forEach((icon, index) => {
        icon.style.transition = 'transform 0.8s ease-in-out'; /* Adding animation duration and timing function */
        icon.style.transform = 'translateX(-80px)';
      });
    }

    previousScroll = currentScroll;
  });
});


document.addEventListener('DOMContentLoaded', function() {
  let previousScroll = window.pageYOffset || document.documentElement.scrollTop;
  const icons = document.querySelectorAll('.icons');

  // Convert NodeList to an array
  const iconsArray = [...icons];

  // Array to store animation properties for each icon
  const animationProperties = iconsArray.map((icon, index) => ({
    element: icon,
    direction: index % 2 === 0 ? 'left' : 'right',
    delay: `${0.1 * index}s`,
  }));

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > previousScroll) {
      // Scrolling down
      animationProperties.forEach((anim) => {
        anim.element.style.transition = `transform 1s ease-out ${anim.delay}`;
        anim.element.style.transform = anim.direction === 'left' ? 'translateX(-25px)' : 'translateX(25px)';
      });
    } else {
      // Scrolling up
      animationProperties.forEach((anim) => {
        anim.element.style.transition = `transform 1s ease-out ${anim.delay}`;
        anim.element.style.transform = anim.direction === 'left' ? 'translateX(25px)' : 'translateX(-25px)';
      });
    }

    previousScroll = currentScroll;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let previousScroll = window.pageYOffset || document.documentElement.scrollTop;
  const icons = document.querySelectorAll('.icons1');

  // Convert NodeList to an array
  const iconsArray = [...icons];

  // Array to store animation properties for each icon
  const animationProperties = iconsArray.map((icon, index) => ({
    element: icon,
    direction: index % 2 === 0 ? 'left' : 'right',
    delay: `${0.1 * index}s`,
  }));

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > previousScroll) {
      // Scrolling down
      animationProperties.forEach((anim) => {
        anim.element.style.transition = `transform 1s ease-out ${anim.delay}`;
        anim.element.style.transform = anim.direction === 'left' ? 'translateX(-50px)' : 'translateX(50px)';
      });
    } else {
      // Scrolling up
      animationProperties.forEach((anim) => {
        anim.element.style.transition = `transform 1s ease-out ${anim.delay}`;
        anim.element.style.transform = anim.direction === 'left' ? 'translateX(50px)' : 'translateX(-50px)';
      });
    }

    previousScroll = currentScroll;
  });
});



// project Images


document.addEventListener('DOMContentLoaded', function() {
  let previousScroll = window.pageYOffset || document.documentElement.scrollTop;
  const icons = document.querySelectorAll('.auxImg img');

  // Convert NodeList to an array
  const iconsArray = [...icons];

  // Array to store animation properties for each icon
  const animationProperties = iconsArray.map((icon, index) => ({
    element: icon,
    direction: index % 2 === 0 ? 'left' : 'right',
    delay: `${0.1 * index}s`,
    rotation: 0, // Initial rotation angle
  }));

  const maxRotation = 5; // Maximum rotation in degrees

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > previousScroll) {
      // Scrolling down
      animationProperties.forEach((anim) => {
        anim.element.style.transition = `transform 1s ease-out ${anim.delay}`; /* Increase animation duration to 1s */
        anim.rotation = Math.min(anim.rotation + 1, maxRotation); // Increment rotation (max 1 degree at a time)
        applyRotation(anim);
      });
    } else {
      // Scrolling up
      animationProperties.forEach((anim) => {
        anim.element.style.transition = `transform 1s ease-out ${anim.delay}`; /* Increase animation duration to 1s */
        anim.rotation = Math.max(anim.rotation - 1, -maxRotation); // Decrement rotation (max 1 degree at a time)
        applyRotation(anim);
      });
    }

    previousScroll = currentScroll;
  });

  // Function to apply rotation to an element
  function applyRotation(anim) {
    const rotationString = `translateX(${anim.direction === 'left' ? '-5px' : '5px'}) rotate(${anim.rotation}deg)`;
    anim.element.style.transform = rotationString;
  }
});
















