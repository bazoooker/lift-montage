

var canScroll = true;

function nextSection() {
    console.log(canScroll);

    var curActiveSlide = $('.section_active').index();
    var curActiveNumber = $('.nav__number_active').index();
        
    if ( curActiveSlide != 0 && canScroll ) {
        canScroll=false;
        // console.log('not first');
        $('.section_active').prev().addClass('section_active');
        $('.section').eq(curActiveSlide).removeClass('section_active');

        $('.nav__number_active').prev().addClass('nav__number_active');
        $('.nav__number').eq(curActiveNumber).removeClass('nav__number_active');

        // в меню выделяем текущий активный пункт
            $('.menu__link').removeClass('menu__link_active');
            $('.menu__link').eq(curActiveSlide-1).addClass('menu__link_active');

        setTimeout(function() {
            canScroll=true;
            console.log('can scroll');
        }, 1100);

    } else {
        console.log('first');
    }
}
function prevSection() {
    var curActiveSlide = $('.section_active').index();
    var curActiveNumber = $('.nav__number_active').index();
    var lastSlide = $('.section').length;

    if ( curActiveSlide != lastSlide-1 && canScroll ) {
        canScroll=false;

        $('.section_active').next().addClass('section_active');
        $('.section').eq(curActiveSlide).removeClass('section_active');

        $('.nav__number_active').next().addClass('nav__number_active');
        $('.nav__number').eq(curActiveNumber).removeClass('nav__number_active');

        // в меню выделяем текущий активный пункт
            $('.menu__link').removeClass('menu__link_active');
            $('.menu__link').eq(curActiveSlide+1).addClass('menu__link_active');

        setTimeout(function() {
            canScroll=true;
            console.log('can scroll');
        }, 1100);

    } else {
        console.log('last');
        
    }
}

function moveProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
};






$(window).bind('mousewheel DOMMouseScroll', function(event){
    if($( window ).width() >= 1366) {
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 ) {
            nextSection();
        }else {
            prevSection();
        }
    }
});




$(document).ready(function(){


    $('.section-about__description').on('mouseenter', function() {
        $(window).unbind('mousewheel DOMMouseScroll');
    });


    $('.section-about__description').on('mouseleave', function() {
        $(window).bind('mousewheel DOMMouseScroll', function(event){
            if($( window ).width() >= 1366) {
                if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 ) {
                    nextSection();
                }else {
                    prevSection();
                }
            }
        });
    });

    // $.stellar();

    $('#section1').addClass('section_active');
    $('.signup-form__masked-tel').mask('+7(999) 999-99-99');



        // нажатие на навигационную цифру слева =========================

        $('.js-goto-section').on('click', function(){
            var sectionID = $(this).data('section');

            // активируем нужную секцию
            $('.section').removeClass('section_active');
            $('.section#'+sectionID).addClass('section_active');

            // в навигации выделяем цифру текущей активной секции
            $('.nav__number').removeClass('nav__number_active');
            $(this).addClass('nav__number_active');

            var curActiveSlide = $('.section_active').index();

            // в меню выделяем текущий активный пункт
            $('.menu__link').removeClass('menu__link_active');
            $('.menu__link').eq(curActiveSlide).addClass('menu__link_active');


        });





        // нажатие на ссылку в раскрывающемся меню =========================

        $('.js-menu-goto-section').on('click', function(){

            var sectionID = $(this).data('section');

            if ($( window ).width() > 1366) { //на декстопе активируем нужную секцию

                // активируем нужную секцию
                $('.section').removeClass('section_active');
                $('.section#'+sectionID).addClass('section_active');

                // в меню выделяем текущий активный пункт
                $('.menu__link').removeClass('menu__link_active');
                $(this).addClass('menu__link_active');

                // в навигации выделяем цифру текущей активной секции
                var curActiveSlide = $('.section_active').index();
                $('.nav__number_active').removeClass('nav__number_active');
                $('.nav__number').eq(curActiveSlide).addClass('nav__number_active');

                if ( curActiveSlide == 6 ) {
                    $('.nav__number').eq(6).addClass('nav__number_clicked');
                    setTimeout(function(){
                        $('.nav__number').eq(6).removeClass('nav__number_clicked');
                    }, 1400);
                }


                // закрываем меню
                $('.menu__close.js-open-mobile-menu').click();


            } else { //на мобилке скролим до нужной секции

                var navLinkNumber = $(this).index();

                $('html, body').animate({
                    scrollTop: $("#"+sectionID).offset().top-120
                }, 700);
                $('#mobile-menu').removeClass('active');
                $('.overlay').fadeOut(300);
                $('.page-wrapper').removeClass('no-scroll');


                // в меню выделяем текущий активный пункт
                $('.menu__link').removeClass('menu__link_active');
                $('.menu__link').eq(navLinkNumber).addClass('menu__link_active');

            }



        });


        $('.js-section-next').on('click', function(){
            nextSection();
        });

        $('.js-section-prev').on('click', function(){
            prevSection();
        });



        $('.js-section-contacts').on('click', function() {
            event.preventDefault();

            if ($( window ).width() > 1366) {
                $('.section').removeClass('section_active');
                $('.section#section7').addClass('section_active');
                $('.nav__number').removeClass('nav__number_active');
                $('.nav__number').eq(6).addClass('nav__number_active');

                $('.nav__number').eq(6).addClass('nav__number_active nav__number_clicked');
                setTimeout(function(){
                    $('.nav__number').eq(6).removeClass('nav__number_clicked');
                }, 1400);

                // в меню выделяем текущий активный пункт
                $('.menu__link').removeClass('menu__link_active');
                $('.menu__link').eq(6).addClass('menu__link_active');
            } else {

                $('html, body').animate({
                    scrollTop: $('#section7').offset().top
                }, 700);
                // в меню выделяем текущий активный пункт
                $('.menu__link').removeClass('menu__link_active');
                $('.menu__link').eq(6).addClass('menu__link_active');
                
            }

        });


        // отправить форму
        $('.js-send-form').on('click', function() {

        }); 



        var swiperHero = new Swiper('.swiper-lead_hero', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.hero-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.js-hero-next',
                prevEl: '.js-hero-prev',
            },
        });

        var swiperServices = new Swiper('.swiper-lead_services', {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.js-services-next',
                prevEl: '.js-services-prev',
            },
            // mySwiper.activeIndex

            on: {
                slideChange: function () {
                  $('.js-get-big-num').text('0'+(swiperServices.activeIndex+1));
                },
              },
        });

        // swiperServices.on(event, handler)



        var swiperSertificates = new Swiper('.swiper-sertificates', {
            slidesPerView: 2,
            spaceBetween: 20,
            pagination: {
                el: '.sertificates-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.js-sertificates-next',
                prevEl: '.js-sertificates-prev',
            },
            breakpoints: {
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                700: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                568: {
                  slidesPerView: 1,
                  spaceBetween: 10
                }
            }
        });










        var swiperTeam = new Swiper('.swiper-team-slider', {
            // autoplay: {
            //     delay: 5000,
            // },
            pagination: {
                el: '.swiper-team-track',
                clickable: true,

                renderBullet: function (index, className) {              
                  return '<div class="team-thumbnail ' + className + '"' + '></div> ';
                },            
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            speed: 600,
            // loop: true,
            fadeEffect: {
                crossFade: true
            },
             navigation: {
                nextEl: '.js-team-slider-next',
                prevEl: '.js-team-slider-prev',
            },

        });






        var swiperObjects = new Swiper('.swiper-objects', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.js-objects-next',
                prevEl: '.js-objects-prev',
            },
            breakpoints: {
                992: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                568: {
                  slidesPerView: 1,
                  spaceBetween: 20  
                }
            }
        });
        



        // var feedbackSwiper = new Swiper('.swiper-feedback', {
        //   speed: 800,
        //     navigation: {
        //         nextEl: '.swiper-feedback__btn-next',
        //         prevEl: '.swiper-feedback__btn-prev',
        //     },
        // });



        // var teachingSwiper = new Swiper('.swiper-teaching', {
        //   speed: 300,
        //   pagination: {
        //     clickable: true,
        //     el: '.teaching-pagination',
        //   },
        // });



        // $('select').niceSelect();




// мобильное меню
$('.js-open-mobile-menu').on('click', function() {

    if( !$('#mobile-menu').hasClass('active') ) {
        $('#mobile-menu').addClass('active');
        $('.page-wrapper').addClass('no-scroll');
        
        $('.overlay').fadeIn(300);
    } else {
        $('#mobile-menu').removeClass('active');
        $('.page-wrapper').removeClass('no-scroll');
        $('.overlay').fadeOut(300);
    }
});










// 4. форма
// ==============


    $('.js-floating-label').blur();

    $('.js-floating-label').on('focus', function() {
        $(this).parent().find('.signup-form__floating-placeholder').addClass('float');
        $(this).parent().addClass('active');
    });

    $('.js-floating-label').on('blur', function() {
        if($(this).val()!=""){} else {
            $(this).parent().find('.signup-form__floating-placeholder').removeClass('float');
            $(this).parent().removeClass('active');
        };
    });






    function showStickyHeader() {
        if ( window.pageYOffset > 293 ) {
           $('.sticky-header').addClass('visible');
        }
        else {
            $('.sticky-header').removeClass('visible');
        }
    };





    function showToTopButton() {
        if ( window.pageYOffset > 500 ) {
           $('.to-top').addClass('to-top_visible')
        }
        else {
            $('.to-top').removeClass('to-top_visible')
        }
    }; 

    function scrollToTop() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $('.menu__link').removeClass('menu__link_active');
      $('.menu__link').eq(0).addClass('menu__link_active');
      
      return false;
    }; 

    $('.js-scroll-to-top').click(scrollToTop);
    $(window).scroll(function() {
            showToTopButton();
            moveProgress();
        }
    );    

});

