      function testWebP(callback) {

         var webP = new Image();
         webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
         };
         webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
         }
         
         testWebP(function (support) {
         
         if (support == true) {
         document.querySelector('body').classList.add('webp');
         }else{
         document.querySelector('body').classList.add('no-webp');
         }
      });

   $(document).ready(function(){
      $(".header__burger").click(function(){
         $(".header__burger, body, .header__menu").toggleClass("active");
      });
   })
   $(document).ready(function(){
      $(".block-item").hover(function(){
         $(this).toggleClass("active")
      })
   })
   $('.block').packery({
      // options
      itemSelector: '.block-item',
      gutter: 25
    });

   setTimeout( function(){
      var typed = new Typed('.title__anim', {
         strings: ['show case ',
                  'show case ',
                  'projects ',
         ],
         typeSpeed: 100,
         backDelay: 1000,
         backSpeed: 50,
         loop: false,
         contentType: 'html',
         loopCount: false,
      });
   }, 3000);
    
      document.body.onload = function(){
         let timerId = setTimeout(function(){
            let header = document.getElementById('header')
            if(!header.classList.contains('visib')){
               header.classList.add('visib');
            }
         }, 1000);
         setTimeout(function(){
            let preloader = document.getElementById('page-preloader')
            let done = document.querySelector('.preloader')
            if(!preloader.classList.contains('done')){
               preloader.classList.add('done');
               done.classList.add('done');
            }
         }, 2500)
         let body = document.body,
             startX = -50,
             startY = -30,
             w = document.documentElement.offsetWidth,
             h = document.documentElement.offsetHeight;
            let circles = document.querySelector('.circles__images1');
            let circles_2 = document.querySelector('.circles__images2'); 
       
            body.addEventListener('mousemove', function(evt){
           var posX = (-300 - evt.clientX / w * startX)
           var posY = (-550 - evt.clientY / h * startY)
           circles.style.position = 'relative';
           circles.style.left = posX + 'px';
           circles.style.top = posY + 'px';
           circles_2.style.position = 'absolute';
           circles_2.style.left = posX + 'px';
           circles_2.style.top = posY + 'px';
         })
      }

      $(document).ready(function(){
         $('#input').focus(function(){
            $('#input').toggleClass('message')
         })
         $('#input').blur(function(){
            $('#input').toggleClass('message')
         })
      })

      $(window).on('scroll', function() {
         var scrollCoef = 0.0013;
      
         $('.circles').css({
            opacity: 1 - $(window).scrollTop() * scrollCoef
         })
      });