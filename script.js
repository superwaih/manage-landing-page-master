$(document).ready(function (){
    $('.menu-btn').click(function(){
        $('.nav-links').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })
    $('.carousel').owlCarousel({
        margin: 10,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive: {
         0:{
             items:1,
             nav: false
         },
         600:{
             items:2,
             nav:false
         },
         1000:{
             items:3,
             nav:false
         }
 
        }
     })
    })
