//  بسم الله الرحمن الرحيم 

//start slide landing background
var swiper = new Swiper(".img-lan", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//End slide landing background

// //start landing-page
// let landingpage  = document.querySelector(".landing-page");

// //get Array of images
// let imageArray = ["image-1.jpg","image-2.jpeg","images-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg"];



// setInterval(function(){
//     //Random Number
//     let randomNumber = Math.floor(Math.random()*imageArray.length);
//     //change background image url
//     landingpage.style.backgroundImage = 'url("imgs/'+imageArray[randomNumber]+'")';
//     },10000);

    // Animation for The pragraph
    let myp = 'مرحبا بك انت في المكان الصحيح  طفلك طفلنا ورعايته عندنا';
    i=0;
    window.onload = function () {
        
        'use strict';
       let stop = setInterval(function (){
        
            document.getElementById('type').textContent  += myp[i];
            
            i=i + 1 ;
                if (i > myp.length - 1 ) {

                    
                    clearInterval(stop);
                    
                }
                
                
        }, 100)
    };
    
    
   
// End landing-page

//start swiber card Doctor
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlide:"true",
    fade:'true',
    grabCurser:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        },
       
    }
  });
//End swiber card Doctor
