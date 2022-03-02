let menuBar=document.querySelector('#menuBar');
let navbar=document.querySelector('.navbar');

menuBar.onclick=()=>{
   navbar.classList.toggle('active');
   menuBar.classList.toggle('fa-times');
}

var swiper = new Swiper(".home-slider", {
    loop:true,
    spaceBetween: 30,
    autoplay:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });

  var swiper = new Swiper(".serive-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay:true,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
  });
  var swiper = new Swiper(".clint-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
});
  yBox('yBox');

