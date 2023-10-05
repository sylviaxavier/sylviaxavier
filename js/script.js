window.addEventListener('scroll',reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal')
  
  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    } else{
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', navFluid)
function navFluid(){
  var header = document.querySelector("header")
  header.classList.toggle('sticky', window.scrollY > 600)
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