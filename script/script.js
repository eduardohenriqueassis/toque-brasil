// btn mobile

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') {
    event.preventDefault();
  }
  const nav = document.querySelector('.menu');
  nav.classList.toggle('visible');
  const visible = nav.classList.contains('visible');
  event.currentTarget.setAttribute('aria-expanded', visible);
  if (visible) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Set div slider´s height
let sliderHeight = document.querySelector('.slider');
let imgSlide = document.querySelector('.img-slide');
let carouselUm = document.querySelector('.carousel-1');

function resizeSlider() {
  sliderHeight.style.height = `${imgSlide.clientHeight}px`;
  carouselUm.style.height = `${50 + imgSlide.clientHeight}px`;
  // console.log(carouselUm);
}
resizeSlider();

document.addEventListener('scroll', resizeSlider);
window.addEventListener('resize', resizeSlider);

// ------------ Slider ------------
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');

let currentSlide = 1;

// Javascript for image slider manual navigation.
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active2');

    btns.forEach((btn) => {
      btn.classList.remove('active2');
    });
  });
  slides[manual].classList.add('active2');
  btns[manual].classList.add('active2');
};

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    manualNav(i);
    currentSlide = i;
  });
});

//  Javascript for slide image autoplay

var repeat = function (activeClass) {
  let active = document.getElementsByClassName('active2');
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active2');
      });

      slides[i].classList.add('active2');
      btns[i].classList.add('active2');
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

// Main section - owl carousel

// Carousel products

const prev = document.querySelector('.prev');

const next = document.querySelector('.next');

const track = document.querySelector('.track');

const card = document.querySelector('.card');

const bodyColor = document.querySelector('body');

let carouselWidth = document.querySelector('.carousel-inner').clientWidth;

let index = 0;

window.addEventListener('resize', adjustItemsOnResize);
window.addEventListener('resize', showBtnOnResize);

// adjustItemsOnResize();
function adjustItemsOnResize() {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
  track.style.transform = `translateX(-${index * carouselWidth}px)`;

  if (carouselWidth >= 789 && carouselWidth < 1000 && index > 3) {
    index = 3;
  } else if (carouselWidth >= 1000 && index > 2) {
    index = 2;
  }
  console.log(carouselWidth, window.innerWidth);
}

// showBtnOnResize();

function showBtnOnResize() {
  if (carouselWidth < 790 && index === 5) {
    next.classList.add('hide');
  } else if (carouselWidth < 790 && index < 5) {
    next.classList.remove('hide');
  } else if (carouselWidth < 1000 && index === 3) {
    next.classList.add('hide');
  } else if (carouselWidth < 1000 && index === 2) {
    next.classList.remove('hide');
  } else if (carouselWidth >= 1000 && index === 2) {
    next.classList.add('hide');
  }
  console.log('oi ' + index);
}

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  if (carouselWidth > 1002 && index === 2) {
    next.classList.add('hide');
  } else if (carouselWidth < 790 && index >= 5) {
    next.classList.add('hide');
  } else if (carouselWidth < 790 && index < 5) {
    next.classList.remove('hide');
  } else if (carouselWidth <= 1002 && index === 3) {
    next.classList.add('hide');
  }
  // console.log(index)
});

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  // console.log(index);
});
