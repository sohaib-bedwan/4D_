$(function () {

    "use strict";
    // load screen
    $(window).on('load', function () {
        $('#load-screen').delay(3000).fadeOut(500);
        $('.app-container').delay(3000).fadeIn().offset(0);
    });

    $('#show-search').on('click', function(){
        $(this).animate({
            'opacity': 0
        });
        $('#search-input').fadeIn();
        $('#search-input input').focus();
    });

    $('#search-input input').focusout(function () { 
        $('#show-search').animate({
            'opacity': 1
        });
        $('#search-input').fadeOut();
    });
    
    $('.nav-item').click(function (e) { 
        e.preventDefault();
        
        var sectionId = '#' + $(this).data('id');
        $(sectionId).addClass('now').removeClass('restart-wow').fadeIn(function(){
            $(this).find('.rwow').removeClass('rwow').addClass('wow');
            // Init WOW.js and get instance
            var wow = new WOW({boxClass:'rwow'});
            wow.init();
        }).siblings('section').removeClass('now').addClass('restart-wow').fadeOut('fast');

        $('.restart-wow .wow').each(function(){
            // var wow = $(this).children('wow');
            // console.log($(this));
            $(this).css({
                'visibility': 'hidden',
                'animation-name': 'none'
            }).removeClass('wow animated ').addClass('rwow');
            wow.addBox(this);
        });
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Go To next or prev section on scroll
    var wheel = 0;
    $('.app-container').bind('mousewheel', function(e) {
        // console.log(e.originalEvent.wheelDelta);
        if(wheel == 0){
            if(e.originalEvent.wheelDelta/120 > 0){
                // console.log('scrolling up !');
                // $('#prev').click();
                var navItemNow = $('.nav-item.active');
                navItemNow.prev().click();
            }else{
                // $('#next').click();
                var navItemNow = $('.nav-item.active');
                navItemNow.next().click();
            }
        }
        wheel++
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            wheel = 0;
        }, 250));
    });


    // hover color
    $('.rotate-plus').mouseover(function(){
        var color = $(this).data('color');
        $(this).css({
            'background': color
        });
    }).mouseleave(function(){
        $(this).css({
            'background': '#DD2E41'
        });
    });

    // popup fading
        //Esc on click popup fade Out
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            var logo = $('#mainLogo');
            $('.popup').fadeOut();
            $('.navbar-brand g svg path').css({
                'fill': 'var(--bink)'
            });
            var showSection = '#' + $('li.active').data('id');
            $(showSection).fadeIn();

            $('#charStyle').remove();
            logo.removeClass('logo-animate').css({
                visibility: 'visible'
            });
            $('.brand-hidden').fadeOut();
            $('#logo-tringle').css({
                animation: 'tringle 1s infinite ease-out alternate'
            });
        }
    });
    $('.popup .popup-close').click(function(){
        var esc = $.Event("keydown", { keyCode: 27 });
        $(document).trigger(esc);
    });
    $('.rotate-plus').click(function(){
        var logo = $('#mainLogo');
        var color = $(this).data('color');
        var popup = '#' + $(this).data('popup');        
        $('.navbar-brand g svg path,' +popup +' .x-bg .svg-for-bg svg').css({
            'fill': color
        });
        $('section').fadeOut();
        $(popup + ' .changeBgColor').css({
            'background-color': color + '63',
        });
        $(popup + ' .more,' + popup + ' .rotated-dev').css({
            'border-color': color
        });
        
        $(popup + ' .img_slider .play').css({
            'color': color
        });
        $(popup).append('<style id="charStyle">.popup ul li::before{background-color:' 
        + color +
        '} .popup .more:hover{ background-color:'+ color +'}</style>');
        if($( window ).width() > 1024){
            logo.addClass('logo-animate').css({
                visibility: 'hidden',
            });
            $('.brand-hidden').delay(500).fadeIn();
            $('#logo-tringle').css({
                animation: 'none'
            });
            $(popup).delay(500).fadeIn();
        }else{
            $(popup).fadeIn();
        }
        
    });

});