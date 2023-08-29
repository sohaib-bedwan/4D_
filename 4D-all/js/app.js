$(function () {

    "use strict";

        // scroll To section from i 

        $('nav ul li').click(function (e) {
            e.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
            $('html, body').animate({
                scrollTop: $('#' + $(this).data('goto')).offset().top
            }, 1000);
            
        });
        
        // ste small img on slider button
        $('.carousel-item').each(function(){
            var index = $(this).index() - 2;
            var button = $(this).parent().siblings().children('button['+['data-bs-slide-to='+index] +']');
            var content = $(this).children('.sm-copy').html();
            button.html(content);
        });
        $(".wow").each(function() {
            var wowHeight = $(this).height();
            $(this).attr("data-wow-offset", wowHeight);
        });
        // #popup
        $('#popup .popup-close').click(function(){
            $('#popup #player').prop('src', '');
            $('#popup').fadeOut();
        });
        $('.video-container').click(function(){
            var src = $(this).children('video').attr('src');
            $('#popup #player').prop('src', src);
            $('#popup').fadeIn();
        });
        // $('button['+'data-bs-slide-to' +']').click(function(){
        //     var data = $(this).data('bs-slide-to');
        //     var carouselId = $(this).parent().parent().attr('id');
        //     var ul = $('ul['+['data-slide-linked="'+carouselId+"-"+ data] +'"]');
        //     ul.animate({
        //         opacity: 1
        //     }, 200).addClass('active').siblings().animate({
        //         opacity: 0
        //     }, 200).removeClass('active');
        // });

        // .inner-nav .section-nav ul li
        $('.inner-nav .section-nav ul li').click(function (e) { 
            e.preventDefault();
            var sectionId = '#' + $(this).data('section');
            $(sectionId).fadeIn().siblings().fadeOut();
            // $(sectionId).addClass('now').removeClass('restart-wow').fadeIn(function(){
            //     $(this).find('.rwow').removeClass('rwow').addClass('wow');
            //     // Init WOW.js and get instance
            //     var wow = new WOW({boxClass:'rwow'});
            //     wow.init();
            // }).siblings('section').removeClass('now').addClass('restart-wow').fadeOut('fast');
            // $(sectionId).scroll();
            // $('.restart-wow .wow').each(function(){
            //     $(this).css({
            //         'visibility': 'hidden',
            //         'animation-name': 'none'
            //     }).removeClass('wow animated ').addClass('rwow');
            //     wow.addBox(this);
            // });
            $('.inner-nav .section-nav ul li').removeClass('active');
            $(this).addClass('active');
        });


        // wedding_steps
        $('.wedding_steps .step').click(function(){
            var id = $(this).data('id');
            $('.wedding_steps .step_cont').removeClass('active');
            $(this).parent().addClass('active');
            $('html, body').animate({
                scrollTop: $('.steps_details').offset().top
            }, 500);
            $('#' + id).fadeIn().siblings().fadeOut(100);
        });

        // baby_steps
        $('.my_baby .step').click(function(){
            var id = $(this).data('id');
            $(this).parent().addClass('active').siblings().removeClass('active');
            $('#' + id).fadeIn().siblings().fadeOut();
        });
        $('.my_baby .collaps_title').click(function(){
            $(this).parent().toggleClass('active');
            $(this).siblings('.collaps_content').slideToggle( "fast", "linear" );
            $(this).children('i').animate({
                transform: 'rotate(180deg)'
            });
        });


        // start testimonial
        (function startTesti() {
            $('.testimonial .testi .cont-testi .item.active').each(function () {
                if (!$(this).is(':last-child')) {
                    $(this).delay(1500).fadeOut(1000, function () {
                        $(this).removeClass('active').next().addClass('active').fadeIn();
                        startTesti();
                    });
                } else {
                    $(this).delay(1500).fadeOut(1000, function () {
                        $(this).removeClass('active');
                        $('.testimonial .testi .cont-testi .item').eq(0).addClass('active').fadeIn();
                        startTesti();
                    });
                }
            });
        }());


});


