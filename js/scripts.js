/*
   
    Template Name : Rolling - Freelancer Portfolio Template
    Author : UiPasta Team
    Website : http://www.uipasta.com/
    Support : http://www.uipasta.com/support/
	
	
*/



/*
   
   Table Of Content
   
   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Typed.js
   7. Parallax Background
   8. Portfolio Filtering
   9. Magnific Popup
  10. Testimonial Carousel/Slider
  11. Statistics Counter
  12. Google Map
 

*/


(function ($) {
    'use strict';
	var cDown;

    jQuery(document).ready(function () {

        
       /* Preloader */
		
        $(window).on('load', function() {
          $('body').addClass('loaded');
        });
		
		
		
       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });	


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
		
		
		
		
       /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });
		 
		
		
		
        /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });
		
		
		/* Countdown */
		 function CountDownFrom(mm,dd){
			if(mm <= 12 && mm >0){
				var today = new Date();
				var CountingDate = new Date(today.getFullYear(),mm-1,dd);
				var countDown = Math.ceil((CountingDate-today) / (1000*60*60*24));
				
				cDown = countDown;
				//document.getElementById("remain").innerHTML = (countDown);
				
				var hb = $('body').height();
				var hl = $("#home-lorde").height();
				var hf = $("#footer-lorde").height();
			
			document.getElementById("home-lorde").style.height = hb-(hf+hl) + "px";
				}
			}
			
			var typing_birmingham =  document.getElementById('typing_birmingham');
			var typing_brighton =  document.getElementById('typing_brighton');
			var typing_glasgow =  document.getElementById('typing_glasgow');
			var typing_manchester =  document.getElementById('typing_manchester');
			var typing_london =  document.getElementById('typing_london');
			
			if (typeof(typing_brighton) != 'undefined' && typing_brighton != null)
			{
			  CountDownFrom(9,30);
			} else if (typeof(typing_birmingham) != 'undefined' && typing_birmingham != null)
			{
			  CountDownFrom(10,1);
			} else if (typeof(typing_glasgow) != 'undefined' && typing_glasgow != null)
			{
			  CountDownFrom(10,2);
			} else if (typeof(typing_manchester) != 'undefined' && typing_manchester != null)
			{
			  CountDownFrom(9,26);
			} else if (typeof(typing_london) != 'undefined' && typing_london != null)
			{
			  CountDownFrom(9,27);
			} else 
				CountDownFrom(10, 17);
		
		
        /* Typed.js */		
		$(window).load(function(){
        $(".typing").typed({
            //strings: [cDown + " days to go"],
			strings: ["future's come."],
            typeSpeed: 200
          });
         });
        
		 
        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });

        
		
		
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();


       
        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',
			
            gallery: { enabled: true },
			zoom: { enabled: true,
			        duration: 500
					
          },
		  
         image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<div class="mfp-title"></div>'+
               '<div class="mfp-counter"></div>'+
               '</div>'+
               '</div>',

               titleSrc:function(item){
                return item.el.attr('title');
              }
            }
		  
		  
          });

       
	   
		 
        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: false,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "backSlide"
        });
		
		
		
		
        /* Statistics Counter */
		
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });
		   
		  
         
         /* Google Map */
		 
         $('#my-address').gMap({
            zoom: 5,
            scrollwheel: true,
            maptype: 'ROADMAP',
            markers:[
            {
            address: "New York",  /* You can change your address from here */
            html: "<b>Address</b>: <br> Area-2, Rose Area, New York, U.S.A.",   /* You can change display address text from here */
            popup: true
            }
            ]
            });
              
		   
            });

   })(jQuery);
