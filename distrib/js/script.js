

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






$(window).bind('mousewheel DOMMouseScroll', function(event){

    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0 ) {
        nextSection();
    }

    else {
        prevSection();
    }
});




$(document).ready(function(){

    $('#section1').addClass('section_active');



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

            if ($( window ).width() > 768) { //на декстопе активируем нужную секцию

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

                // закрываем меню
                $('.menu__close.js-open-mobile-menu').click();


            } else { //на мобилке скролим до нужной секции

                $('html, body').animate({
                    scrollTop: $("#"+sectionID).offset().top-120
                }, 700);
                $('#mobile-menu').removeClass('active');
                $('.overlay').fadeOut(300);
                $('.page-wrapper').removeClass('no-scroll');

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
            $('.section').removeClass('section_active');
            $('.section#section7').addClass('section_active');
            $('.nav__number').removeClass('nav__number_active');
            $('.nav__number').eq(6).addClass('nav__number_active');

            // в меню выделяем текущий активный пункт
            $('.menu__link').removeClass('menu__link_active');
            $('.menu__link').eq(6).addClass('menu__link_active');
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

        });






        var swiperObjects = new Swiper('.swiper-objects', {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                992: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20  
                }
            }
        });
        



        var feedbackSwiper = new Swiper('.swiper-feedback', {
          speed: 800,
            navigation: {
                nextEl: '.swiper-feedback__btn-next',
                prevEl: '.swiper-feedback__btn-prev',
            },
        });



        var teachingSwiper = new Swiper('.swiper-teaching', {
          speed: 300,
          pagination: {
            clickable: true,
            el: '.teaching-pagination',
          },
        });






        // range slider in filters
        // сайт плагина: 
        // ionden.com/a/plugins/ion.rangeSlider/api.html

        $(".js-range-slider").ionRangeSlider({
            skin: "round",
            type: "double",
            min: 1000,
            max: 50000,
            from: 10000,
            to: 40000,
            hide_min_max: true,
            onChange: function(data) {
                $('.filter-price__min').val(data.from);
                $('.filter-price__max').val(data.to);
            }
        });





        $('select').niceSelect();





        // анимация стрелок в карточке товара
        $('.product-controls__arrow-up, .product-controls__arrow-down').on('mousedown', function() {
            $(this).addClass('pressed');
        });
        $('.product-controls__arrow-up, .product-controls__arrow-down').on('mouseup', function() {
            $(this).removeClass('pressed');
        });








        // функционал внутри меню каталога

        $('.js-show-product-category-list').on('click', function() {

            if ($( window ).width() > 768) { // Если десктоп, показываем соответствующую подкатегорию справа
                var categoryID = $(this).attr('id');
                var categoryProdList = $('.product-category-list[data-id="'+categoryID+'"]');

                $('.product-category-list').removeClass('active');
                $(categoryProdList).addClass('active');

                $('.catalog-link__label').removeClass('active');
                $(this).addClass('active');
            } else { // Если мобилка, раскрываем аккордеон

                if( !$(this).hasClass('active') ) {
                    $('.catalog-link__label').removeClass('active');
                    $(this).addClass('active');

                    $('.catalog-link .catalog-link__accordeon').slideUp(300);
                    $(this).parent().find('.catalog-link__accordeon').slideDown(300);
                }
            }

        });










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








// / 2. появления
// ==============

    // функция, которая "собирает" первый слайд. Запускается после прелоадера. См. прелоадер



    // function lookMa() {
    //     $('.hero').removeClass('up');
    //     $('.swiper-slide').find('.hero__slide-number, .hero__info h1, .hero__info p, .hero__info a, .hero__img').removeClass('up');
    // }

    // // шторки
    // $(window).scroll(function() {
    //     $('.trigger').each(function() {
    //         if( $(this).visible(true) ) {  
    //             $(this).find('.hideme').addClass('hideme_visible');
    //             $(this).find('.zero').removeClass('zero_hidden');
    //             $(this).find('.bg-square').removeClass('bg-square_anim');
    //         }        
    //     });
    // });












        // function openMenu() {
        //     if ( !$('.menu').hasClass('menu_active') ) {
        //         $('.menu').addClass('menu_active');
        //         $('.menu .col-4').addClass('visible'); //анимации появления колонок
        //         $('body').addClass('no-scroll');
        //     } else {
        //         $('.menu').removeClass('menu_active');
        //         $('.menu .col-4').removeClass('visible');
        //         $('body').removeClass('no-scroll');
        //     }
        // }

        // $('.js-menu-controls').click(openMenu);


        // $(document).on( 'keydown', function ( e ) {
        //     if ( e.keyCode === 27 ) {
        //         if ( $('.menu').hasClass('menu_active') ) {
        //          openMenu();
        //         }
        //     }
        // });










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

    // $(window).scroll(showStickyHeader); 




    // $(document).ready(function(){   


        $(".js-open-modal").on('click', function(){
                                             

            var modalName = $(this).data('target');                        
            var modal = $('#' + modalName);

            
            $(modal).addClass('modal_active');
            setTimeout(function() {
                $(modal).removeClass('modal_active')
            },2200);
            
        });

        // $(".js-close-modal").on('click', function(){
        //     $('.modal').removeClass('modal_active');
        //     $('.overlay_modal').fadeOut(400);                          
        // });

    // });


    // отправка колбека
    $(".modal form").on('submit', function(e){
            e.preventDefault();
            var modal = $(this).parents('.modal');
            var form = $(this);         
            $(this).ajaxSubmit({  
                url: "/ajax.php?file="+$(form).data('file'),
                data: $(form).serialize(),
                dataType: "JSON",
                type: "POST",
                success: function(data){
                    if(data.done) {
          $(modal).find('.modal-result').html(data.message);
          $(modal).find('.modal-result').show('fast')
          setTimeout("$('.modal-result').hide('fast')",1500);

          setTimeout("$('.modal').hide()",2000);
                      setTimeout("$('#overlay').hide()",2000);
          var f=$(modal).find('.modal-content-copy');
          var t=$(modal).find('.modal-content');
                      setTimeout("$('.modal').find('input, textarea').val('')",3000);
          
                    } else {
                        $(modal).find('.modal-errors').html(data.message);
        $(modal).find('.modal-errors').show('fast')
        setTimeout("$('.modal-errors').hide('fast')",1000);
                        $(modal).children(".spinner").hide();
                    }
                },
                complete: function(){
                    $(modal).children(".spinner").hide();                     
                }
            });
            return false;
        });



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
      return false;
    }; 

    $('.js-scroll-to-top').click(scrollToTop);
    $(window).scroll(showToTopButton);    

});

