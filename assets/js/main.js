
(function ($) {
  'use strict';

    $(document).on('ready', function(){

      var progressbars       = $('#progressbars');
      var progress           = $('#progress');
      var progress2          = $('#progress2');
      var progress3          = $('#progress3');
      var progress4          = $('#progress4');
      var nav_menu           = $('#nav_menu');
      var play_btn           = $('.play_btn');
      var testi_carousel     = $('.testi_carousel');
      var scrollers          = $('.scroll a[href*="#"], a.up_btn');
      var testimonial2       = $('.testimonial2');
      var portfolio_carousel = $('.portfolio_carousel');
      var testimonial3 = $('.testimonial3');

      testimonial3.owlCarousel({
        loop:true,
        nav:true,
        margin:15,
        navText:["<i class=\'fas fa-caret-left\'></i>", "<i class=\'fas fa-caret-right\'></i>"],
        items:1,
        margin:30

      })


      portfolio_carousel.owlCarousel({
        loop:true,
        nav:true,
        margin:15,
        navText:["<i class=\'fas fa-caret-left\'></i>", "<i class=\'fas fa-caret-right\'></i>"],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:2
          },
          1000:{
            items:3
          }
        }

      })

      testimonial2.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        items:1,
        autoplay:false,
        margin:30
      })


      if (progressbars.length > 0) {

        progress.LineProgressbar({
          percentage: 50
        });

        setTimeout(() => {
          progress.LineProgressbar({
            percentage: 20
        });

        setTimeout(() => {
          progress.LineProgressbar({
              percentage: 70
            });
        }, 2000);
        }, 2000);

        progress2.LineProgressbar({
          percentage: 50
        });
          setTimeout(() => {
          progress2.LineProgressbar({
            percentage: 20
        });

        setTimeout(() => {
          progress2.LineProgressbar({
              percentage: 90
          });
        }, 2000);
        }, 2000);
        

        progress3.LineProgressbar({
          percentage: 50
        });
          setTimeout(() => {
          progress3.LineProgressbar({
              percentage: 20
        });

        setTimeout(() => {
          progress3.LineProgressbar({
              percentage: 80
            });
        }, 2000);
        }, 2000);
      
       progress4.LineProgressbar({
          percentage: 50
        });


        setTimeout(() => {
         progress4.LineProgressbar({
            percentage: 20
        });

        setTimeout(() => {
          progress4.LineProgressbar({
              percentage: 60
            });
        }, 2000);
        }, 2000);
        
      }

    	testi_carousel.owlCarousel({
    		items:1,
    		loop:true,
    		nav:false,
    		dots:true,
    		margin:30
    	})

    	
    	nav_menu.slicknav({
    		prependTo:'.mobile_menu',
    	});

    	play_btn.modalVideo();


    if ($('.scroll').length > 0) {

      scrollers.on('click', function(e) {
        e.preventDefault()

        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top
          },
          1000,
          'linear'
        )
      })
    }

     function fixed_nav(){
      window.onscroll = function() {myFunction()};

      var header = document.getElementById("header");
      var sticky = header.offsetTop;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };
    fixed_nav();

    new WOW().init();

    if ($('.counter').length > 0) {
      $('.counter').counterUp({
          delay: 10,
          time: 1000
      });

    }





    })


   


    jQuery(window).on("load", function() {
        function preloadr() {
          var preloader = $('.preloader');
          if(preloader.length){
          preloader.delay(200).fadeOut(500);
          }
      }
      preloadr(); 
    });


}(jQuery));



 



//End js main file......