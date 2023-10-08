window.addEventListener('scroll', navFluid)
function navFluid(){
  var header = document.querySelector("header")
  header.classList.toggle('sticky', window.scrollY > 600)
}
/*-- */
function openProjectOne() {
  var x = document.getElementById("Project-one");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function openProjectTwo() {
  var x = document.getElementById("Project-two");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function openProjectThree() {
  var x = document.getElementById("Project-three");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Swiper Script
let swiperCards = new Swiper('.card-content', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
    spaceBetween:32,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      600:{
        slidesPerView:2,
      },
      968:{
        slidesPerView:3,
      },
    },

});