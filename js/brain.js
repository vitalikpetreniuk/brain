$(function(){

    $('.br-compare-item .br-compare-element').each(function () {
        var currentIndex = $(this).index();
        var currentPosition = currentIndex + 1;
        var currentItem = $(this);
        var difItem = $(this).parent().siblings().children('.br-compare-element:nth-child(' + currentPosition + ')');
        var currentCont = currentItem.html().replace(/\s/g, '').split('.').join('');
        var difCont = difItem.html().replace(/\s/g, '').split('.').join('');
        if(currentCont !== difCont)
        {
            currentItem.addClass('difference');
            difItem.addClass('difference');
        }
    });

    var compScroll = $('.br-comp-scroll').owlCarousel({
        nav: true,
        mouseDrag: false,
        mtouchDrag: false,
        responsive:{
            0:{
                items: 1
            },
            480:{
                items: 2
            },
            768:{
                items: 3
            },
            1355:{
                items: 4
            }
        }
    });

    $('.br-comp-items-top .owl-next').on('click', function () {
        $('.br-comp-ch-list .owl-next').trigger('click');
    });

    $('.br-comp-items-top .owl-prev').on('click', function () {
        $('.br-comp-ch-list .owl-prev').trigger('click');
    });

    $('.br-comp-item-top').each(function () {
        var itemId = $(this).attr('data-id');
        $(this).find('.br-comp-delete button').on('click', function () {
            var slideIndex = $(this).closest('.br-comp-item-top').parent().index();
            compScroll.trigger('remove.owl.carousel', slideIndex).trigger('refresh.owl.carousel');
        });
    });

    if($('.br-comp-slider').length)
    {
        $(".br-comp-scroll .owl-nav").stick_in_parent({
            parent: '.br-comp-slider',
            offset_top: 300
        });
    }

    if($('.br-sfixed').length)
    {
        $(".br-sfixed").stick_in_parent({
            parent: '.br-row-main',
            offset_top: 120
        });
    }

    $(window).on('scroll resize load ready', function () {
        if($('.br-sfixed').hasClass('is_stuck')){
            $('.br-sfixed').addClass('on-bottom');
        }else{
            $('.br-sfixed').removeClass('on-bottom');
        }
    });

    if($('.br-pt-lc').length){
        $('.br-pt-lc select').barrating({
            theme: 'fontawesome-stars'
        });
    }

    if($('.br-pr-countdown').length){
        // countdown 1
        clock = $('.br-pr-countdown').FlipClock(9220880, {
            clockFace: 'DailyCounter',
            autoStart: false,
            language:'ru-ru'
        });
        clock.setCountdown(true);
        clock.start();
        // countdown 1 end

        // countdown 2
        clocks = $('.br-pr-countdown-s').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            language:'ru-ru'
        });

        clocks.setTime(220880);
        clocks.setCountdown(true);
        clocks.start();
        // countdown 2 end

        // countdown 3
        clockt = $('.br-pr-countdown-t').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            language:'ru-ru'
        });

        clockt.setTime(220880);
        clockt.setCountdown(true);
        clockt.start();
        // countdown 3 end

        // countdown 4
        clockf = $('.br-pr-countdown-f').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            language:'ru-ru'
        });

        clockf.setTime(220880);
        clockf.setCountdown(true);
        clockf.start();
        // countdown 4 end

        // countdown 5
        clockfv = $('.br-pr-countdown-fv').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            language:'ru-ru'
        });

        clockfv.setTime(220880);
        clockfv.setCountdown(true);
        clockfv.start();
        // countdown 5 end

        // countdown 6
        clocksx = $('.br-pr-countdown-sx').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            language:'ru-ru'
        });

        clocksx.setTime(220880);
        clocksx.setCountdown(true);
        clocksx.start();
        // countdown 6 end

        // countdown 7
        clocksv = $('.br-pr-countdown-sv').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            language:'ru-ru'
        });

        clocksv.setTime(220880);
        clocksv.setCountdown(true);
        clocksv.start();
        // countdown 7 end
    }

    if($('#br-fixed').length)
    {
        var a = document.querySelector('#br-fixed'), b = null, P = 0;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
        function Ascroll() {
            if (b == null) {
                var Sa = getComputedStyle(a, ''), s = '';
                for (var i = 0; i < Sa.length; i++) {
                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                    }
                }
                b = document.createElement('div');
                b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                a.insertBefore(b, a.firstChild);
                var l = a.childNodes.length;
                for (var i = 1; i < l; i++) {
                    b.appendChild(a.childNodes[1]);
                }
                a.style.height = b.getBoundingClientRect().height + 'px';
                a.style.padding = '0';
                a.style.border = '0';
            }
            var Ra = a.getBoundingClientRect(),
                R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.br-pad').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
            if ((Ra.top - P) <= 0) {
                if ((Ra.top - P) <= R) {
                    b.className = 'stop';
                    b.style.top = - R +'px';
                } else {
                    b.className = 'sticky';
                    b.style.top = P + 'px';
                }
            } else {
                b.className = '';
                b.style.top = '';
            }
            window.addEventListener('resize', function() {
                a.children[0].style.width = getComputedStyle(a, '').width
            }, false);
        }
    }

    if($('.br-pt-menu-in').length)
    {
        $(".br-pt-menu .br-pt-menu-in").stick_in_parent({
            parent: 'body'
        });
    }

    if($('.br-team-nav').length)
    {
        $(".br-team-nav").stick_in_parent({
            parent: '.br-body',
            offset_top: 120
        });
    }

    if($('.br-pr-slider').length)
    {
        $('.br-prs-f').slick({
            asNavFor: '.br-prs-s',
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            verticalSwiping: true,
            centerPadding:100,
            centerMode: true,
            focusOnSelect: true
        });
        $('.br-prs-s').slick({
            asNavFor: '.br-prs-f',
            arrows: false,
            fade: true
        });
    }

    // markdown slider fixes
    if($('.br-slider-md').length){
        var nSlider = $('.br-slider-md-nav').slick({
            asNavFor: '.br-slider-md-current',
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            verticalSwiping: true,
            centerPadding:100,
            centerMode: true,
            focusOnSelect: true
        });
        var mSlider = $('.br-slider-md-current').slick({
            asNavFor: '.br-slider-md-nav',
            arrows: false,
            fade: true,
            focusOnSelect: true
        });
        mSlider.find('.slick-slide').on('click', function(){
            mSlider.slick('slickNext');
        });
    }

    if($('.popup-modal').length)
    {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            closeOnBgClick: true,
            preloader: false,
            modal: false,
            callbacks: {
                open: function() {
                    nSlider.slick('reinit');
                    mSlider.slick('reinit');
                    setTimeout(function(){
                        $('.slick-slider').removeClass('br-loading-modal');
                    }, 500);
                    $('.br-modal-md').parent('.mfp-content').addClass('br-slider-outer');
                }
            }
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    }
    // markdown slider fixes end

    // product new modal
    if($('.product-modal-button').length)
    {

        var pSlider = $('.product-modal-slider').owlCarousel({
            nav:true,
            loop: true,
            items: 1
        });

        $('.product-modal-button').magnificPopup({
            type: 'inline',
            closeOnBgClick: true,
            preloader: false,
            modal: false,
            callbacks: {
                open: function() {

                    $('.mfp-close').attr('title', '');

                    pSlider.trigger('refresh.owl.carousel');

                    var modChar = $('.br-body .br-pr-chr');

                    if(modChar.length){
                        if(!$('.product-modal-right .br-pr-chr').length){
                            modChar.clone().appendTo('.product-modal-right .br-pr-scroll');
                        }
                    }else{
                        $('.product-modal-info').addClass('half-width');
                        $('.product-modal-right').remove();
                    }
                }
            }
        });
    }
    // product new modal end

    if($('.br-shop-gallery').length)
    {
        $('.br-shop-gallery').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            focusOnSelect: true,
            asNavFor: '.br-shop-gallery-big'
        });
    }

    if($('.br-shop-gallery-big').length)
    {
        $('.br-shop-gallery-big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            fade: true
        });
    }

    $('.br-modal-p').on('shown.bs.modal', function (e) {
        $('.slick-slider').resize();
        setTimeout(function(){
            $('.slick-slider').removeClass('br-loading-modal');
        }, 500);
    });

    $(window).on('resize', function () {
        if($(window).width() < 680)
        {
            $('.br-modal-p .close').trigger('click');
        }
    });


    if($('.br-tslider').length)
    {
        var $frame = $('.br-tslider');
        var $wrap = $frame.parent();
        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            activateMiddle: 1,
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $wrap.find('.br-ts-scrollbar'),
            scrollBy: 1,
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            prevPage: $wrap.find('.prev'),
            nextPage: $wrap.find('.next')
        });
        $(window).resize(function(e) {
            $frame.sly('reload');
        });
    }

    if($('.br-bhm .dropdown-menu ul').length)
    {
        $('.br-bhm .dropdown-menu ul').slimScroll({
            height: '240px',
            alwaysVisible: true,
            railColor: '#999',
            size: '5px',
            railOpacity: 1
        });
    }

    $('.br-slider-product').owlCarousel({
        margin: 5,
        nav:true,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            766:
                {
                    items:2
                },
            1011:
                {
                    items:3
                },
            1354:
                {
                    items:5
                }
        }
    });

    $('.br-ssilder').owlCarousel({
        margin:30,
        nav:true,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            766:
                {
                    items:2
                },
            1011:
                {
                    items:3
                },
            1354:
                {
                    items:4
                }
        }
    });

    $(".br-checkout-modal").on('show.bs.modal', function () {
        setTimeout(function () {
            $('.br-modal-slider-block').addClass('normal');
            $(".br-modal-slider-block .tab-pane").removeClass('active');
            $(".br-tab-first").addClass('active');
        }, 500);

    });

    $('.br-modal-slider').owlCarousel({
        margin:20,
        nav:true,
        loop: true,
        items: 2
    });


    $('.br-slider-gallery').owlCarousel({
        nav: true,
        loop: true,
        margin: 5,
        responsive:{
            0:{
                items:1
            },
            1354:
                {
                    items:2
                }
        }
    });

    $('.br-slider-video').owlCarousel({
        nav: true,
        loop: true,
        margin: 5,
        items: 1,
        video: true
    });

    $('.br-rslider').owlCarousel({
        margin:30,
        nav:true,
        items: 1
    });

    $('.br-tslider-m').owlCarousel({
        margin:6,
        nav:true,
        items: 1
    });

    // stock about
    $('.br-pr-stock-slider').owlCarousel({
        margin:10,
        nav:true,
        items: 1
    });
    $('.br-pr-stock-slider').on('changed.owl.carousel', function(event) {
        $(this).find('.stock-about-button').removeClass('open');
        $(this).find('.stock-about').slideUp('fast');
    });
    $('.stock-about-button').on('click', function () {
        $(this).toggleClass('open');
        $(this).next('.stock-about').toggle(200);
    });
    // stock about end

    if($('.br-image-links').length)
    {
        $('.br-image-links').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery:{
                enabled:true
            },
            image: {
                titleSrc: function(item) {
                    return '<a class="br-modal-buy" href="#" target="_blank">Купить</a>';
                }
            }

        });
    }

    if($('.br-shops-imgs').length)
    {
        $('.br-shops-imgs').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery:{
                enabled:true
            }

        });
    }

    if($('.br-image-link').length)
    {
        $('.br-image-link').magnificPopup({
            type:'image',
            image: {
                titleSrc: function(item) {
                    return '<a class="br-modal-buy" href="#" target="_blank">Купить</a>';
                }
            }

        });
    }

    // delivery accordion
    $('.br-pr-dt-1').on('click', function () {
        $('.br-dt-modal-m .br-dt1 a').trigger('click');
        $('.br-dt-modal-mm .br-dc1 .panel-heading a').trigger('click');
    });

    $('.br-pr-dt-2').on('click', function () {
        $('.br-dt-modal-m .br-dt2 a').trigger('click');
        $('.br-dt-modal-mm .br-dc2 .panel-heading a').trigger('click');
    });

    $('.br-pr-dt-3').on('click', function () {
        $('.br-dt-modal-m .br-dt3 a').trigger('click');
        $('.br-dt-modal-mm .br-dc3 .panel-heading a').trigger('click');
    });
    // delivery accordion end

    $('.br-sbutton').on('click', function(){
        $('.br-sform').addClass('open');
        $('.br-bh-in').addClass('closed');
    });

    $('.br-sform button').on('click', function(){
        $('.br-sform').removeClass('open');
        $('.br-bh-in').removeClass('closed');
    });

    $('.br-mtoggle').on('click', function(){
        $(this).toggleClass('active');
        $('.bt-tm-m').toggle('fast');
    });

    $('.br-search-form input[type="text"]').on('click', function(){
        $(this).siblings('.br-search-click').slideDown('fast');
    });

    var wrapIndex;
    var wrapPosition;
    var compIndex;
    var compPosition;
    var compHeight;
    var compHeights = [];
    var isCount = false;
    $(window).on("load resize", function () {
        // $('.br-comp-ch-item .br-comp-section').each(function () {
        //     wrapIndex= $(this).index();
        //     wrapPosition = wrapIndex + 1;
        //     $(this).find('li').each(function () {
        //         compIndex = $(this).index();
        //         compPosition = compIndex + 1;
        //         compHeight = $(this).outerHeight();
        //         $(this).closest('.br-comparison').find('.br-comp-sidebar .br-comp-section:nth-child(' + wrapPosition + ')' + ' li:nth-child(' + compPosition + ')').outerHeight(compHeight);
        //     });
        // });
        compHeight = [];
        isCount = true;

        setTimeout(function(){
            $('.br-comp-ch-item').find('li').css('height','');
            $('.br-comp-sidebar .br-comp-list').find('li').css('height','');
            $('.br-comp-ch-item').each(function(){
                for(var i = 0; i < $(this).find('li').length; i++) {
                    if(isCount) {
                        compHeights[i] = $(this).find('li').eq(i).outerHeight();
                    } else {
                        if($(this).find('li').eq(i).outerHeight() > compHeights[i]) {
                            compHeights[i] = $(this).find('li').eq(i).outerHeight();
                        }
                    }
                }
                isCount = false;
            });

            $('.br-comp-ch-item').each(function(){
                for(var i = 0; i < $(this).find('li').length; i++) {
                    $(this).find('li').eq(i).css('height',compHeights[i]);
                    $('.br-comp-sidebar .br-comp-list').find('li').eq(i).css('height',compHeights[i]);
                }
            });
        },200);

        $('.br-comparison').addClass('active');

        $('.br-pr-slider').removeClass('br-fheight');
        $('.br-loading').removeClass('br-loading');

        if($('.br-fb-widget').length)
        {
            setTimeout(function () {
                var container_width = $('.visible-lg .fb-page-wrapper').width();
                $('.visible-lg .fb-page-wrapper').html('<div class="fb-page" ' +
                    'data-href="http://www.facebook.com/facebook"' +
                    ' data-width="' + container_width + '" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="http://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="http://www.facebook.com/facebook">Facebook</a></blockquote></div></div>');
                FB.XFBML.parse();
            }, 100);

            setTimeout(function() {
                var container_width = $('.visible-md .fb-page-wrapper').width();
                $('.visible-md .fb-page-wrapper').html('<div class="fb-page" ' +
                    'data-href="http://www.facebook.com/facebook"' +
                    ' data-width="' + container_width + '" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="http://www.facebook.com/facebook"><a href="http://www.facebook.com/facebook">Facebook</a></blockquote></div></div>');
                FB.XFBML.parse( );
            }, 100);
        }
    });

    if($('.br-ch-select').length)
    {
        $('.br-ch-select').selectmenu({
            open: function() {
                $('div.ui-selectmenu-menu').addClass('br-ch-smi');
            }
        }).on('selectmenuchange', function () {
            if($('.ch-option-form').is(':selected')){
                $('.ch-accept').hide();
                $('.ch-credit-form').show();
                $('.ch-accept-credit').show();
                if($('.br-ch-cr-main').hasClass('super-active')){
                    $('.ch-next-t').on('click', function () {
                        $('#br-ch-6').removeClass('super-active');
                        $('.ch-accept-credit').addClass('super-active');
                    });
                }else{
                    $('.ch-next-t').on('click', function () {
                        $('.ch-accept-credit').removeClass('super-active');
                    });
                }
            }else{
                $('.ch-accept').show();
                $('.ch-credit-form').hide();
                $('.ch-accept-credit').hide();
                if($('.br-ch-cr-main').hasClass('super-active')){
                    $('.ch-next-t').on('click', function () {
                        $('#br-ch-6').addClass('super-active');
                        $('.ch-accept-credit').removeClass('super-active');
                    });
                }else{
                    $('.ch-next-t').on('click', function () {
                        $('#br-ch-6').removeClass('super-active');
                    });
                }
            }
        });
    }

    if ($(window).scrollTop()>='250') $('.br-up').fadeIn('slow');
    $(window).on('scroll', function(){
        if ($(window).scrollTop()<='250') $('.br-up').fadeOut('slow');
        else $('.br-up').fadeIn('slow');
    });
    $('.br-up button').on('click', function(){
        $('html, body').animate({scrollTop:0},'slow');
    });

    if (Modernizr.touch){
        $('.br-h-cart > button').on('click', function(){
            $('.br-dropdown-outer').toggleClass('active');
            $('.br-c-confirm').hide();
            $('.br-checkout').show();
        });
    }
    else
    {
        $('.br-dropdown-outer').mouseenter(function(){
            $(this).addClass('active');
        }).mouseleave(function(){
            $(this).removeClass('active');
            $('.br-c-confirm').hide();
            $('.br-checkout').show();
        });
    }

    if (Modernizr.touch && $(window).width() < 1024){
        $('.br-gc-scale-wrap div').addClass('open');
        $('.br-gc-blocks h3').addClass('open');
    }

    var x = 0;
    $('.br-main-menu').on('mouseenter', function(){
        x = 1;
        setTimeout(function(){
            if(x===1)
            {
                $('.br-bh-menu-top').addClass('active');
                $('.br-bheader').addClass('active');
                $('.br-shadow-in').show();
            }
        },250);
    }).on('mouseleave', function(){
        x = 0;
        $('.br-bh-menu-top').removeClass('active');
        $('.br-bheader').removeClass('active');
        $('.br-shadow-in').hide();
    });

    $('.br-p-cats > button').on('click', function(){
        $('.br-p-cats ul').toggle('fast');
    });

    $('.br-p-cats ul button').on('click', function(){
        var bText = $(this).text();
        $('.br-p-cats > button').text(bText);
        $('.br-p-cats li').removeClass('active');
        $(this).parent().addClass('active');
        $('.br-p-cats ul').toggle('fast');
    });

    $('.br-m-with-i > li:first-child > ul').mouseenter(function () {
        var listClass = $(this).attr('data-id');
        $(this).closest('.br-m-with-i').find('div').removeClass('active');
        $(this).closest('.br-m-with-i').find('div' + '.' + listClass).addClass('active');
    }).mouseleave(function () {
        $(this).closest('.br-m-with-i').find('div').removeClass('active');
    });

    if($('.br-pr-scroll').length)
    {
        $(".br-pr-scroll").scrollbar({
            disableBodyScroll: true
        });
    }

    if($('.category-scroll').length)
    {
        $(".category-scroll").scrollbar({
            disableBodyScroll: true
        });
    }

    if($('.sidebar-scroll').length)
    {
        $(".sidebar-scroll").scrollbar({
            disableBodyScroll: true
        });
    }

    if($('.br-scroll').length)
    {
        $(".br-scroll").scrollbar({
            disableBodyScroll: true
        });
    }

    if($('.br-nscroll').length)
    {
        $(".br-nscroll").scrollbar({
            disableBodyScroll: true
        });
    }

    $(".br-top-header > .container").scrollbar({
        disableBodyScroll: true
    });

    if($('.br-nc-scroll').length)
    {
        $(".br-n-scroll").scrollbar({
            disableBodyScroll: true
        });
    }


    if($('.br-credit-hidden-list').length)
    {
        $('.br-credit-hidden-list').scrollbar({
            disableBodyScroll: true
        });
    }

    if($('.tooltip').length)
    {
        $('.tooltip').tooltipster({
            theme: 'tooltipster-noir',
            side: 'right'
        });
    }

    $('.br-gc-scale-wrap').each(function () {
        var gHeight = $(this).height();
        $(this).siblings('h3').css('top', gHeight);
    });

    $('.br-main-submenu > li:first-child').each(function () {
        var iSize = $(this).children().size();

        if(iSize < 6)
        {
            $(this).siblings('.br-mbm-imgs').hide();
            $(this).addClass('active');
        }
    });

    var imgTime;
    $('.br-psp-in > div').on('mouseenter', function () {
        imgTime =  setInterval(function() {
            var imgActive = $('.br-psp-backs').children('.active');
            var imgNext = ($('.br-psp-backs').children('.active').next().length > 0) ? $('.br-psp-backs').children('.active').next() : $('.br-psp-backs').children('img:first-child');
            imgActive.removeClass('active');
            imgNext.addClass('active');
        }, 200);
    }).on('mouseleave', function () {
        clearInterval(imgTime);
    });

    if($('.br-pcode').length)
    {

        var clipboard = new Clipboard('.br-pcode');
    }

    if($('.br-accordion').length)
    {
        $('.br-accordion > ul').dcAccordion({
            speed: 'fast',
            menuClose: true
        });
    }

    $('.br-accordion-button').on('click', function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('.br-accordion-list').slideUp('fast');
        }else{
            $(this).addClass('active');
            $(this).siblings('.br-accordion-list').slideDown('fast');
        }
    });

    if($('.br-cl-check').length)
    {
        $('.br-cl-check input').iCheck();
    }

    if($('.br-credit-hidden-list').length)
    {
        $('.br-credit-hidden-list input').iCheck();
    }

    if($('.br-check').length)
    {
        $('.br-check').iCheck({
            checkboxClass: 'br-icheck'
        });
    }

    if($('.br-radio').length)
    {
        $('.br-radio').iCheck({
            radioClass: 'br-iradio'
        });
    }

    if($('.br-fsquare').length)
    {
        $('.br-ch-checkbox').iCheck({
            checkboxClass: 'br-csquare'
        });

        $('.br-ch-radio').iCheck({
            radioClass: 'br-rsquare'
        });

        $('.br-pm-list .br-ch-radio').on('ifChecked',function(){
            $(this).closest('.br-fsquare').addClass('active');
            var checkClass = $(this).closest('li').attr('class');
            if($(window).width() < 767)
            {
                $('.br-ch-bps ' + '.' + checkClass + ' input').iCheck('check');
            }
            else
            {
                $('.visible-xs ' + '.' + checkClass + ' input').iCheck('check');
            }
        }).on('ifUnchecked',function(){
            $(this).closest('.br-fsquare').removeClass('active');
        });

        $('.br-ch-oblock .br-ch-checkbox').on('ifChecked',function(){
            if($(window).width() < 767)
            {
                $('#br-ch-5 .br-ch-oblock .br-ch-checkbox').iCheck('check');
            }
            else
            {
                $('#br-ch-6 .br-ch-oblock .br-ch-checkbox').iCheck('check');
            }
        }).on('ifUnchecked',function(){
            if($(window).width() < 767)
            {
                $('#br-ch-5 .br-ch-oblock .br-ch-checkbox').iCheck('uncheck');
            }
            else
            {
                $('#br-ch-6 .br-ch-oblock .br-ch-checkbox').iCheck('uncheck');
            }
        });

        $('.br-pm1 .br-ch-radio').on('ifChecked',function(){
            $('.ch-accept').show();
            $('.ch-credit-form').hide();
            $('.ch-accept-credit').hide();
        });

        $('.br-pm2 .br-ch-radio').on('ifChecked',function(){
            $('.ch-accept').show();
            $('.ch-credit-form').hide();
            $('.ch-accept-credit').hide();
        });

        $('.br-pm4 .br-ch-radio').on('ifChecked',function(){
            $('.ch-hidden-block').show();
            $('.br-chdo-s2').hide();
            $('.br-chdo-s3').hide();
            $('.br-chdo-s4').addClass('hidden');
            $('.ch-next-f').addClass('hidden');
            $('.ch-next-s').removeClass('hidden');
            $('#br-ch-5').addClass('br-ch-changed');
            $('.br-chdo-s1').show();
            $('.br-ch-mspec').show();
            $('.ch-credit-form').hide();
            $('.ch-accept-credit').hide();
            $('.ch-accept').show();
            $('.be-chm5').on('click', function () {
                $('#br-ch-5').addClass('super-active');
            });
            $('.be-chm6').on('click', function () {
                $('#br-ch-6').addClass('super-active');
            });
        }).on('ifUnchecked',function(){
            $('.ch-hidden-block').hide();
            $('.br-chdo-s4').removeClass('hidden');
            $('#br-ch-5').removeClass('br-ch-changed');
            $('.br-chdo-s1').hide();
            $('.br-ch-mspec').hide();
            $('.ch-next-s').addClass('hidden');
            $('.ch-next-f').removeClass('hidden');
            $('.be-chm6').on('click', function () {
                $('#br-ch-6').removeClass('super-active');
            });
        });

        $('.br-pm3 .br-ch-radio').on('ifChecked',function(){
            $('.ch-hidden-block').show();
            $('.br-chdo-s1').hide().addClass('hidden');
            $('.br-chdo-s2').addClass('hidden');
            $('.br-chdo-s3').addClass('hidden');
            $('.ch-next-f').addClass('hidden');
            $('.ch-next-s').addClass('hidden');
            $('.ch-next-t').removeClass('hidden');
            $('#br-ch-5').addClass('br-ch-changed');
            $('.br-chdo-s4').show();
            $('.br-ch-mspec').show();
            $('.be-chm5').on('click', function () {
                $('#br-ch-5').addClass('super-active');
            });
            $('.be-chm6').on('click', function () {
                $('#br-ch-6').addClass('super-active');
            });
            if($('.ch-option-form').is(':selected')){
                $('.ch-accept').hide();
                $('.ch-credit-form').show();
                $('.ch-accept-credit').show();
            }else{
                $('.ch-accept').show();
                $('.ch-credit-form').hide();
                $('.ch-accept-credit').hide();
            }
        }).on('ifUnchecked',function(){
            $('.ch-hidden-block').hide();
            $('.br-chdo-s1').removeClass('hidden');
            $('.br-chdo-s2').removeClass('hidden');
            $('.br-chdo-s3').removeClass('hidden');
            $('#br-ch-5').removeClass('br-ch-changed');
            $('.br-chdo-s4').hide();
            $('.br-ch-mspec').hide();
            $('.ch-next-s').addClass('hidden');
            $('.ch-next-t').addClass('hidden');
            $('.ch-next-f').removeClass('hidden');
            $('.be-chm6').on('click', function () {
                $('#br-ch-6').removeClass('super-active');
            });
        });
    }

    $('.br-fc-chs input').focusin(function () {
        $(this).siblings('.br-search-results').show();
    }).focusout(function () {
        $(this).siblings('.br-search-results').hide();
    });

    $('.br-sslider').owlCarousel({
        margin:4,
        nav:true,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            766:
                {
                    items:2
                },
            1011:
                {
                    items:3
                },
            1354:
                {
                    items:4
                }
        }
    });

    var tabCarousel = $('.br-lt-tabs-head.owl-carousel').owlCarousel({
        nav:true,
        mouseDrag: false,
        responsive:{
            0:{
                items:1
            },
            766:
                {
                    items:2
                }
        }
    });

    $('.br-login-button-switch').on('click', function () {
        $('.br-mod-f').hide();
        $('.br-mod-s').show();
    });

    $('.br-lt-switch-back').on('click', function () {
        $('.br-mod-s').hide();
        $('.br-mod-f').show();
    });

    $('.br-lt-th-item a').on('click', function () {
        $(this).addClass('active');
        $(this).parent().siblings().children().removeClass('active');
        $(this).closest('.owl-item').siblings().find('a').removeClass('active');
    });

    $('.br-loyalty-slider').owlCarousel({
        items: 1,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true
    });

    $('.br-banner-slider').owlCarousel({
        items: 1,
        nav: true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true
    });

    $('.br-act-block .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true
    });

    var owl= $('.br-pr-set-slider');
    owl.owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        responsive:{
            0:{
                autoHeight: true,
                dots: true
            },
            551:{
                margin: 15,
                dots: false
            },
            1355:{
                margin: 30,
                dots: false
            }
        }
    });

    owl.on('changed.owl.carousel', function(event) {
        var productValue = parseInt($(this).closest('.br-pr-set').find('.br-pr-set-product strong').text());
        var setValue = parseInt($(this).find('.owl-item.active .hidden').text());
        $(this).closest('.br-pr-set').find('.br-pr-set-price strong').text(productValue + setValue);
    });

    /*new product page*/
    owl.on('resized.owl.carousel', function(event) {
        var $this = $(this);
        $this.find('.owl-height').css('height', $this.find('.owl-item.active').height());
    });
    $(window).on('load resize', function () {
        if($(window).width() < 1010){
            $('.product-tabs a').on('click', function () {
                setTimeout(function () {
                    $(this).prependTo('.product-tabs ul');
                },300);
                if($(this).parent().hasClass('active')){
                    $('.product-tabs li').show();
                }else{
                    $('.product-tabs li').hide();
                }
            });
        }
    });
    if($('.product-select').length){
        $('.product-select').selectmenu();
    }
    /*new product page end*/

    if($('.br-slider-range').length)
    {
        $('.br-slider-range').slider({
            range: true,
            min: 0,
            max: 10000,
            values: [ 3000, 7000 ],
            slide: function( event, ui ) {
                $('.br-pf-f').val(ui.values[ 0 ]);
                $('.br-pf-l').val(ui.values[ 1 ]);
            }
        });
        $('.br-pf-f').val('от');
        $('.br-pf-l').val('до');

        $('.br-pf-f').on('focus', function(){
            $(this).val('');
        });
        $('.br-pf-l').on('focus', function(){
            $(this).val('');
        });
    }

    /*credits scripts*/
    if($('.br-slider-range-cs').length)
    {
        $('.br-slider-range-credit').slider({
            range: true,
            min: 0,
            max: 24,
            values: [ 1, 12 ],
            slide: function( event, ui ) {
                $('.br-pf-f-cr').val(ui.values[ 0 ]);
                $('.br-pf-l-cr').val(ui.values[ 1 ]);
            }
        });
        $('.br-slider-range-credit').each(function () {
            $(this).find('.br-pf-f-cr').val('от');
            $(this).find('.br-pf-l-cr').val('до');
            $(this).find('.br-pf-f-cr').on('focus', function(){
                $(this).val('');
            });
            $(this).find('.br-pf-l-cr').on('focus', function(){
                $(this).val('');
            });
        });

        $('.br-slider-range-pay').slider({
            range: true,
            min: 0,
            max: 10000,
            values: [ 500, 5000 ],
            slide: function( event, ui ) {
                $('.br-pf-f-p').val(ui.values[ 0 ]);
                $('.br-pf-l-p').val(ui.values[ 1 ]);
            }
        });
        $('.br-slider-range-pay').each(function () {
            $(this).find('.br-pf-f-p').val('от');
            $(this).find('.br-pf-l-p').val('до');
            $(this).find('.br-pf-f-p').on('focus', function(){
                $(this).val('');
            });
            $(this).find('.br-pf-l-p').on('focus', function(){
                $(this).val('');
            });
        });
    }
    /*credits scripts end*/

    if($('.br-credit-length').length)
    {
        $('.br-credit-length').each(function () {
            var cSlider = $(this).find('.br-cl-in');
            var tfSlider = $(this).find('.br-cl-24');
            var twSlider = $(this).find('.br-cl-12');
            var tnSlider = $(this).find('.br-cl-10');
            var cValue = $(this).find('.br-cl-input');

            tfSlider.slider({
                range: "max",
                min: 1,
                max: 24,
                value: 1,
                slide: function( event, ui ) {
                    cValue.val( ui.value );
                }
            });

            twSlider.slider({
                range: "max",
                min: 1,
                max: 12,
                value: 1,
                slide: function( event, ui ) {
                    cValue.val( ui.value );
                }
            });

            tnSlider.slider({
                range: "max",
                min: 1,
                max: 10,
                value: 1,
                slide: function( event, ui ) {
                    cValue.val( ui.value );
                }
            });

            cValue.val(cSlider.slider('value') );

            $(this).find('.ui-slider-handle').append('<span></span>');
            var cHandle = $(this).find('.ui-slider-handle span');
            cValue.appendTo(cHandle);

            cSlider.prepend('<span></span>');
            cSlider.append('<span></span>');
        });
    }

    var bfHeight = $('.br-bl-left > div:first-child .br-p-item').height();
    var bsHeight = $('.br-bl-left > div:nth-child(4) .br-p-item').height();
    $('.br-bl-right .br-sub-form').height(bfHeight);
    $('.br-bl-right .br-fb-widget').height(bsHeight);

    $('.br-ab-cr').on('click', function () {
        $(this).closest('.br-modal-t-block').find('h3').toggleClass('active');
        $(this).toggleClass('active');
        $(this).closest('.br-modal-t-block').find('.br-credit-list').toggle('fast');
        $(this).next('.br-credit-hidden').toggle('fast');
    });

    $('.br-cm-button').each(function () {
        $(this).on('click', function () {
            $(this).toggleClass('active');
            $(this).closest('.br-mcr-csm').find('.br-cl-hidden').toggle('fast');
            $(this).closest('.br-credit-hidden-list > div').find('.br-cl-hidden').toggle('fast');
        });
    });

    $('.br-o-filter').on('click', function(){
        $('.br-sidebar').toggle('fast');
        $('.br-ssend').toggleClass('active');
        $('.br-sib-c').each(function () {
            if($(this).outerHeight() > 27){
                $(this).addClass('high');
                $(this).siblings('.br-show-c').show();
            }
        });
    });

    $('.br-cs-sidebar').on('click', function(){
        $('.br-sidebar').toggle('fast');
        $('.br-ssend').toggleClass('active');
    });

    $('.br-sf-results-sm a').on('click', function(){
        $('.br-sidebar').toggle('fast');
        $('.br-ssend').toggleClass('active');
    });

    $('.br-sb-toggle').on('click', function(){
        $('.br-sidebar').toggleClass('br-sb-hidden').addClass('br-abs');
        setTimeout(function () {
            $('.br-sidebar').removeClass('br-abs');
        },1500);
        $('.br-cont').toggleClass('br-fwidth');
    });

    // short toggle
    $('.br-prs-button').each(function () {
        if($(this).siblings('.br-pr-scroll').find('.scroll-content > div').height() <= 170){
            $(this).hide();
        }
    });
    // short toggle end

    $('.br-prs-button').on('click', function(){
        $(this).toggleClass('open');
        $(this).siblings('.br-pr-scroll').toggleClass('open');
    });

    $('.br-ch-app').on('click', function(){
        $(this).toggleClass('active');
        $('.br-ds-bs').toggle('fast');
    });

    $('.br-ci-set .br-ci-name button').on('click', function(){
        $(this).toggleClass('active');
        $(this).closest('.br-cart-item').find('.br-ci-set-in').toggle('fast');

    });

    $('.br-checkout-modal .br-ci-name button').on('click', function(){
        $(this).toggleClass('active');
        $('.br-ci-set-in').toggle('fast');
    });

    $('.br-order-call > div:first-child button').on('click', function(){
        $('.br-oc-dropdown').addClass('open');
    });

    $('.br-oc-dropdown button').on('click', function(){
        $(this).closest('.br-oc-dropdown').removeClass('open');
    });

    $('.br-shops-head .br-dt-yc > button').on('click', function(){
        $(this).toggleClass('open');
    });

    $('.br-del-in-drop > button').on('click', function(){
        $(this).toggleClass('open');
        $(this).siblings().toggleClass('open');
    });

    $('.br-shops-head .br-dt-yc ul a').on('click', function () {
        var shopArea = $(this).text();
        $(this).closest('.br-dt-yc').children('button.open').trigger('click');
        $(this).closest('.br-dt-yc').children('button').children('span:last-child').text(shopArea);
    });

    $('.br-del-in-drop ul a').on('click', function(){
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        var shopName = $(this).text();
        $(this).closest('.br-del-in-drop').children('button.open').trigger('click');
        $(this).closest('.br-del-in-drop').children('button').children('span:last-child').text(shopName);
    });

    $('.br-del-faq-item > button').on('click', function(){
        $(this).toggleClass('open');
        $(this).next().toggle('fast').addClass('open');
        $(this).parent().siblings().children('button').removeClass('open');
        $(this).parent().siblings().children('div').slideUp('fast');
    });

    $('.br-fback-dropdown > button').on('click', function(){
        $(this).toggleClass('open');
        $(this).next('.br-dropdown').toggle('fast');
    });

    $('.br-fback-dropdown-first > button').on('click', function(){
        $('.br-fback-dropdown-second > button').removeClass('open');
        $('.br-fback-dropdown-second > button').next('.br-dropdown').slideUp('fast');
    });

    $('.br-fback-dropdown-second > button').on('click', function(){
        $('.br-fback-dropdown-first > button').removeClass('open');
        $('.br-fback-dropdown-first > button').next('.br-dropdown').slideUp('fast');
    });

    $('.br-bbb-f').on('click', function(){
        $(this).hide();
        $(this).siblings('.br-bbb-s').show().addClass('active');
    });

    $('.br-bbb-f').on('click', function(){
        $(this).hide();
        $(this).siblings('.br-bbb-s').show().addClass('active');
    });

    $('.br-sib-c').each(function () {
        if($(this).outerHeight() > 27){
            $(this).addClass('high');
            $(this).siblings('.br-show-c').show();
        }
        $(this).siblings('.br-show-c').on('click', function(){
            $(this).siblings('.br-sib-c').toggleClass('active');
            $(this).find('.br-sh-show').toggleClass('active');
            $(this).find('.br-sh-hide').toggleClass('active');
        });
    });

    $('.br-dt-p').on('click', function(){
        $('.br-checkout-modal .br-dt-abs').toggle('fast');
    });

    $('.br-addc-o').on('click', function(){
        $('.br-ch-comment').toggle('fast');
    });

    $('.br-ch-comment button').on('click', function(){
        $(this).closest('.br-ch-comment').slideUp('fast');
    });

    $('.br-ch-ubuc button').on('click', function(){
        $(this).siblings('.br-chb-dd').toggleClass('active');
        $('.br-ch-ihp .br-chb-dd').removeClass('active');
    });

    $('.br-ch-ihp button').on('click', function(){
        $(this).siblings('.br-chb-dd').toggleClass('active');
        $('.br-ch-ubuc .br-chb-dd').removeClass('active');
    });

    $('.br-mc-item > div:first').on('click', function(){
        $(this).siblings('.br-iradio').trigger('click');
    });

    $('.br-o-sort').on('click', function(){
        $('.br-sort-menu-fixed').toggleClass('active');
        $('.br-sidebar').slideUp();
    });

    $('.br-up-cat').on('click', function(){
        $('.br-sidebar').slideUp();
    });

    $('.br-all').on('click', function(){
        $('.br-sidebar').slideUp();
    });

    $('.br-sort-menu-fixed button').on('click', function(){
        $('.br-sort-menu-fixed').toggleClass('active');
    });

    $('.br-reviews-sort button').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.br-ri-read').on('click', function(){
        $(this).toggleClass('open');
        $(this).closest('.br-reviews-item').find('.br-ri-review').toggleClass('open');
    });

    $('.br-th-login button.active').on('click', function(){
        $(this).toggleClass('open');
        $(this).siblings().toggle('fast');
    });

    $('.br-theader-menu .folder button').on('click', function(){
        $(this).parent().toggleClass('active');
        $(this).siblings().toggle('fast');
    });

    $('.br-dropdown-group > button').on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings().toggle('fast');
    });

    $('.br-chc button').on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings().toggle('fast');
    });

    $('.br-modal-login-r .br-login-button-toggle').on('click', function () {
        setTimeout(function () {
            $('.br-modal-login-r .br-login-button-hidden').trigger('click');
        }, 400)
    });

    $('.br-modal-password .br-login-button-toggle').on('click', function () {
        setTimeout(function () {
            $('.br-modal-password .br-login-button-hidden').trigger('click');
        }, 400)
    });

    $('.br-popup-double').on('click', function () {
        setTimeout(function () {
            $('.br-popup-double + .br-popup-hidden').trigger('click');
        }, 400)
    });

    $('.br-toggle-password').on('click', function () {

        $(this).toggleClass('active');
        var input = $($(this).attr('toggle'));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }

    });

    if($('.br-change-email').length)
    {
        $(".br-change-email").validate({
            rules:
                {
                    email:
                        {
                            required: true,
                            minlength: 8
                        },
                    password:
                        {
                            required: true

                        }
                },
            messages:
                {
                    email:
                        {
                            required: "Поле «Новый e-mail» обов’язкове до заповнення",
                            minlength: "Дані не відповідають умовам"
                        },
                    password:
                        {
                            required: "Поле «Пароль» обов’язкове до заповнення"
                        }
                }
        });
    }

    if($('.br-login-form-first').length)
    {
        $(".br-login-form-first").validate({
            rules:
                {
                    email_phone:
                        {
                            required: true,
                            minlength: 8
                        },
                    password:
                        {
                            required: true

                        }
                },
            messages:
                {
                    email_phone:
                        {
                            required: "Поле «E-mail або телефон» обов’язкове до заповнення",
                            minlength: "Дані не відповідають умовам"
                        },
                    password:
                        {
                            required: "Поле «Пароль» обов’язкове до заповнення"
                        }
                }
        });
    }

    if($('.br-login-form-second').length)
    {

        jQuery.validator.addMethod("password_check",
            function(value, element, param) {
                if (this.optional(element)) {
                    return true;
                } else if (!/[A-Z]/.test(value)) {
                    return false;
                } else if (!/[a-z]/.test(value)) {
                    return false;
                } else if (!/[0-9]/.test(value)) {
                    return false;
                }

                return true;
            },
            "Пароль має містити мінімум одну заголовну літеру, цифри 0-9 та літери латинської абетки");

        jQuery.validator.addMethod("alphanumeric", function(value, element) {
            return this.optional(element) || /^\w+$/i.test(value);
        }, "Заборонено використання спеціальнихсимволів (!@#$^&-+=;:,.?|`~<>', а також пробілів");


        $(".br-login-form-second").validate({
            rules:
                {
                    email_phone:
                        {
                            required: true,
                            minlength: 8
                        },
                    password:
                        {
                            required: true,
                            minlength: 6,
                            password_check: true,
                            alphanumeric: true

                        },
                    confirm_password:
                        {
                            equalTo: '#reg-pass'
                        }
                },
            messages:
                {
                    email_phone:
                        {
                            required: "Поле «E-mail або телефон» обов’язкове до заповнення",
                            minlength: "Дані не відповідають умовам"
                        },
                    password:
                        {
                            required: "Поле «Пароль» обов’язкове до заповнення",
                            minlength: "Пароль не може бути коротшим за 6 символів"
                        },
                    confirm_password:
                        {
                            required: "Поле «Повторити пароль» обов’язкове до заповнення",
                            minlength: "Пароль не може бути коротшим за 6 символів",
                            equalTo: "Паролі не співпадають"
                        }
                }
        });
    }

    if($('.br-change-password').length)
    {

        jQuery.validator.addMethod("password_check",
            function(value, element, param) {
                if (this.optional(element)) {
                    return true;
                } else if (!/[A-Z]/.test(value)) {
                    return false;
                } else if (!/[a-z]/.test(value)) {
                    return false;
                } else if (!/[0-9]/.test(value)) {
                    return false;
                }

                return true;
            },
            "Пароль має містити мінімум одну заголовну літеру, цифри 0-9 та літери латинської абетки");

        jQuery.validator.addMethod("alphanumeric", function(value, element) {
            return this.optional(element) || /^\w+$/i.test(value);
        }, "Заборонено використання спеціальнихсимволів (!@#$^&-+=;:,.?|`~<>', а також пробілів");


        $(".br-change-password").validate({
            rules:
                {
                    old_password:
                        {
                            required: true
                        },
                    password:
                        {
                            required: true,
                            minlength: 6,
                            password_check: true,
                            alphanumeric: true

                        },
                    confirm_password:
                        {
                            equalTo: '#ch-pass'
                        }
                },
            messages:
                {
                    old_password:
                        {
                            required: "Поле «Старий пароль» обов’язкове до заповнення"
                        },
                    password:
                        {
                            required: "Поле «Новий пароль» обов’язкове до заповнення",
                            minlength: "Пароль не може бути коротшим за 6 символів"
                        },
                    confirm_password:
                        {
                            required: "Поле «Повторити пароль» обов’язкове до заповнення",
                            minlength: "Пароль не може бути коротшим за 6 символів",
                            equalTo: "Паролі не співпадають"
                        }
                }
        });
    }

    if($('.br-login-form-third').length)
    {

        $(".br-login-form-third").validate({
            rules:
                {
                    email_phone:
                        {
                            required: true,
                            minlength: 8
                        }
                },
            messages:
                {
                    email_phone:
                        {
                            required: "Поле «E-mail або телефон» обов’язкове до заповнення",
                            minlength: "Дані не відповідають умовам"
                        }
                }
        });
    }

    $('.br-ch-ajp button').on('click', function(){
        $('.br-chdo-s1').hide();
        $('.br-chdo-s2').show();
    });

    $('.br-chdo-s2 .text-center button:first-child').on('click', function(){
        $(this).hide();
        $('.br-ch-addj').hide();
        $('.br-chdo-s2 .text-center button:nth-child(2)').show();
        $('.br-ch-addjs').show();
    });

    $('.br-chdo-s2 .text-center button:nth-child(2)').on('click', function(){
        $('.br-chdo-s2').hide();
        $('.br-chdo-s3').show();
    });

    $('.br-chdo-s2 .text-center button:last-child').on('click', function(){
        $('.br-chdo-s2').hide();
        $('.br-ch-addjs').hide();
        $('.br-chdo-s2 .text-center button:nth-child(2)').hide();
        $('.br-chdo-s1').show();
        $('.br-ch-addj').show();
        $('.br-chdo-s2 .text-center button:first-child').show();
    });

    $('.br-ch-dc > div:nth-child(2) button:last-child').on('click', function(){
        $('.br-chdo-s2').show();
        $('.br-chdo-s3').hide();
        $('.br-ch-addj').show();
        $('.br-chdo-s2 .text-center button:nth-child(2)').hide();
        $('.br-chdo-s2 .text-center button:first-child').show();
        $('.br-ch-addjs').hide();
    });

    $('.br-ch-dc > div:nth-child(2) button:first-child').on('click', function(){
        $('.br-ch-success').slideDown('fast');
    });

    $('html').on('mouseup', function (e) {
        var container1 = $(".br-chc"),
            container2 = $(".br-theader-menu .folder"),
            container3 = $(".br-th-login"),
            container4 = $(".br-order-call");
        container5 = $(".br-fback-dropdown");
        container6 = $(".br-shops-head");

        if (container1.has(e.target).length === 0){
            $(".br-chc button.active").trigger('click');
        }

        if (container2.has(e.target).length === 0){
            $(".br-theader-menu .folder.active button").trigger('click');
        }

        if (container3.has(e.target).length === 0){
            $(".br-th-login button.open").trigger('click');
        }

        if (container4.has(e.target).length === 0){
            $(".br-oc-dropdown button").trigger('click');
        }

        if (container5.has(e.target).length === 0){
            $(".br-fback-dropdown > button.open").trigger('click');
        }

        if (container6.has(e.target).length === 0){
            $(".br-shops-head > button.open").trigger('click');
        }

        $(".br-dropdown-group").each(function () {
            dropdownBlock = $(this);
            if (dropdownBlock.has(e.target).length === 0){
                $(this).children("button.active").trigger('click');
            }
        });

        $(".br-category-block").each(function () {
            categoryBlock = $(this);
            if (categoryBlock.has(e.target).length === 0){
                $(this).find(".br-category-block button").trigger('click');
            }
        });

        $(".br-prof-same-change").each(function () {
            profDrop = $(this);
            if (profDrop.has(e.target).length === 0){
                $(this).find('button.open').trigger('click');
            }
        });
    });

    $('.br-blog-menu button').on('click', function () {
        $(this).toggleClass('open');
        $('.br-blog-menu ul').toggle('fast');
    });

    $('.br-search-open').on('click', function () {
        $(this).hide();
        $('.br-bcc-desk').addClass('sopen');
        $('.br-search-wide').addClass('open');
    });

    $('.br-search-wide > button').on('click', function () {
        $('.br-search-wide').removeClass('open');
        $('.br-bcc-desk').removeClass('sopen');
        $('.br-search-open').show();
    });

    $('.br-blog-categories a').on('click', function () {
        $(this).closest('.br-blog-categories ul').children().removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.br-blog-categories-c button').on('click', function () {
        $(this).closest('li').remove();
    });

    $('.br-q-checkout').on('click', function(){
        $(this).parent().toggleClass('active');
        $(this).parent().siblings('.br-c-confirm').toggle('fast');
        $(this).siblings('.br-checkout').toggle('fast');
    });

    $('.br-c-confirm button').on('click', function(){
        $(this).parent('.br-c-confirm').slideUp('fast');
        $(this).closest('.modal').find('.br-checkout').toggle('fast');
        $(this).closest('.modal').find('.br-c-checkouts').toggleClass('active');
    });

    // alert fixes
    $('.br-alert button').on('click', function(){
        $('.br-alert').slideUp('fast');
        $('header').css('top', '0');
    });
    // alert fixes end

    $('.br-nofound button').on('click', function(){
        $('.br-nofound').hide();
    });

    $('.br-prof-same-change > button').on('click', function(){
        $(this).toggleClass('open')
        $(this).siblings('form').toggleClass('open');
    });

    $('.br-prof-form-toggle').on('click', function(){
        $(this).hide();
        $(this).siblings('div').slideDown('fast');
    });

    $('.br-prof-same-change form label').on('click', function(){
        var labelValue = $(this).html();
        $(this).closest('.br-prof-same').find('.br-prof-same-block').html(labelValue);
    });

    $('.br-prof-table-line').on('click', function () {
        $(this).find('.br-prof-table-toggle button').toggleClass('open');
        $(this).parent().siblings().find('.br-prof-table-toggle button').removeClass('open');
        $(this).parent().siblings().find('.br-prof-table-hidden').slideUp('fast');
        $(this).siblings('.br-prof-table-hidden').toggle('fast');
    });

    $('.prof-set-toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.br-prof-th-set').find('.br-prof-set-in').toggle()
    });

    $('.br-prof-red').on('click', function () {
        $(this).closest('.br-prof-form-address').find('.br-prof-fa-hidden').toggle('fast');
    });

    $('.br-prof-delete').on('click', function () {
        $(this).closest('.br-prof-form-address').remove();
    });

    $('.br-order-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.br-order-hidden').toggleClass('hidden');
    });

    $('.br-dropdown-s > button').on('click', function () {
        $(this).parent().toggleClass('open');
        $(this).parent().siblings().removeClass('open');
    });

    $('.modal .close').on('click', function(){
        $(this).closest('.modal').find('.br-c-confirm').hide();
        $(this).closest('.modal').find('.br--cities-ms').hide();
        $(this).closest('.modal').find('.br--cities-m').hide();
        $(this).closest('.modal').find('.br-checkout').show();
        $(this).closest('.br-checkout-modal').find('.br-dt-abs').hide();
        $('.br-c-checkouts').removeClass('active');
    });

    $('.br-pr-del-type button').on('click', function(){
        $('.modal').find('.br-c-confirm').hide();
        $('.modal').find('.br-cities-ms').hide();
        $('.modal').find('.br-cities-m').hide();
        $('.modal').find('.br-checkout').show();
        $('.br-checkout-modal').find('.br-dt-abs').hide();
        $('.br-c-checkouts').removeClass('active');
    });

    $('.br-bbb-s').on('click', function(){
        $('.br-checkout-modal').find('.br-c-confirm').hide();
        $('.br-checkout-modal').find('.br-cities-ms').hide();
        $('.br-checkout-modal').find('.br-checkout').show();
        $('.br-checkout-modal').find('.br-dt-abs').hide();
        $('.br-modal-sp').hide();
        $('.modal-content > .modal-header').removeClass('active');
        $('.modal-content > .modal-body').removeClass('active');
    });

    $('.br-bcart').on('click', function(){
        $('.br-checkout-modal').find('.br-c-confirm').hide();
        $('.br-checkout-modal').find('.br-cities-ms').hide();
        $('.br-checkout-modal').find('.br-checkout').show();
        $('.br-checkout-modal').find('.br-dt-abs').hide();
        $('.br-modal-sp').hide();
        $('.modal-content > .modal-header').removeClass('active');
        $('.modal-content > .modal-body').removeClass('active');
    });

    $('.br-c-dtb button').on('click', function(){
        $('.br-c-confirm').hide();
        $('.br-cities-ms').hide();
        $('.br-cities-m').hide();
        $('.br-checkout').show();
        $('.br-c-checkouts').removeClass('active');
    });

    $('.br-br-msp-open').on('click', function(){
        $(this).closest('.modal').find('.br-modal-sp').toggle('fast');
        $(this).closest('.br-modal-m').find('.modal-content > .modal-header').toggleClass('active');
        $(this).closest('.br-modal-m').find('.modal-content > .modal-body').toggleClass('active');
        $(this).closest('.br-modal-dialog-m').find('.modal-content > .modal-header').toggleClass('active');
        $(this).closest('.br-modal-dialog-m').find('.modal-content > .modal-body').toggleClass('active');
    });

    $('.br-modal-sp .close').on('click', function(){
        $(this).closest('.br-modal-sp').toggle('fast').addClass('active');
        setTimeout(function () {
            $('.br-modal-sp').removeClass('active');
        },500);
        $(this).closest('.br-modal-m').find('.modal-content > .modal-header').toggleClass('active');
        $(this).closest('.br-modal-m').find('.modal-content > .modal-body').toggleClass('active');
        $(this).closest('.br-modal-dialog-m').find('.modal-content > .modal-header').toggleClass('active');
        $(this).closest('.br-modal-dialog-m').find('.modal-content > .modal-body').toggleClass('active');
    });

    $('.br-modal-spu h3 > button').on('click', function(){
        $(this).closest('.br-modal-sp').toggle('fast').addClass('active');
        setTimeout(function () {
            $('.br-modal-sp').removeClass('active');
        },500);
        $(this).closest('.br-modal-m').find('.modal-content > .modal-header').toggleClass('active');
        $(this).closest('.br-modal-m').find('.modal-content > .modal-body').toggleClass('active');
        $(this).closest('.br-modal-dialog-m').find('.modal-content > .modal-header').toggleClass('active');
        $(this).closest('.br-modal-dialog-m').find('.modal-content > .modal-body').toggleClass('active');
    });

    $('.br-m-yc button').on('click', function(){
        $(this).closest('.br-modal').find('.br-cities-ms').toggle('fast');
    });

    $('.br-mmenu-button button').on('click', function(){
        $(this).toggleClass('active');
        $('.br-m-nav').toggle('fast');
        $('.br-shadow').toggle('fast');
    });

    $('.br-sl-tl li button').on('click', function(){
        $(this).closest('.br-sl-tl').find('li').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.br-shadow').on('click', function(){
        $(this).toggle('fast');
        $('.br-m-nav').toggle('fast');
        $('.br-nm-catalog > div').addClass('active');
        setTimeout(function () {
            $('.br-nm-catalog > div').removeClass('active');
        },500);
    });

    $('.br-nm-close').on('click', function(){
        $('.br-m-nav').toggle('fast');
        $('.br-shadow').toggle('fast');
        $('.br-nm-catalog > div').addClass('active');
        setTimeout(function () {
            $('.br-nm-catalog > div').removeClass('active');
        },500);
    });

    $('.br-catalog-button').on('click', function(){
        $('.br-m-nav').toggle('fast');
        $('.br-shadow').toggle('fast');
        $('.br-nm-catalog > div').slideDown('fast');
    });

    $('.br-nm-catalog > button').on('click', function(){
        $('.br-nm-catalog > div').toggle('fast');
    });

    $('.br-nm-back-main').on('click', function(){
        $('.br-nm-catalog > div').toggle('fast');
    });

    $('.br-nm-ca').on('click', function(){
        $('.br-nm-catalog > div').toggle('fast');
        $('.br-nm-in').slideUp('fast');
    });

    $('.br-nmc-in > ul > li button').on('click', function(){
        $(this).siblings('div').toggle('fast');
    });

    $('.br-nm-back').on('click', function(){
        $(this).closest('.br-nm-in').toggle('fast');
    });

    $('.be-hsearch-button').on('click', function(){
        $(this).toggleClass('active');
        $('.br-cheader').toggleClass('active');
        $('.br-hsearch').toggle('fast');
    });

    $('.br-dt-modal .modal-header button').on('click', function(){
        $('.br-cities-m').toggle('fast');
    });

    $('.br-dt-modal-m .modal-header button').on('click', function(){
        $('.br-cities-m').toggle('fast');
    });

    $('.br-dt-modal-mm .modal-header button').on('click', function(){
        $('.br-cities-m').toggle('fast');
    });

    $('.br-dt-yc button').on('click', function(){
        $(this).next('.br-cities-ms').toggle('fast');
    });

    $('.br-dropdown-remove > button').on('click', function(){
        $(this).closest('.br-dropdown-remove').toggle('fast');
        $(this).closest('.br-dropdown-remove').siblings('.br-ci-remove').toggleClass('active');
    });

    $('.br-ci-remove').on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings('.br-dropdown-remove').toggle('fast');
    });

    $('.br-fmenu-button button').on('click', function(){
        $(this).toggleClass('active');
        $('.br-hidden').toggle('fast');
        $('.br-bh-menu-top').toggle('fast');
    });

    $('.br-ch-fixed > button').on('click', function(){
        $('.br-ch-fixed').addClass('active');
        $('.br-ch-menu').addClass('active');
    });

    $('.br-pr-fixed > button:first-child').on('click', function(){
        $('.br-pr-fixed').addClass('active');
        $('.br-pr-menu').addClass('active');
    });

    $('.br-prof-fixed > button').on('click', function(){
        $('.br-prof-fixed').addClass('active');
        $('.br-prof-sidebar-fixed').addClass('active');
    });

    $('.br-fx-open > button').on('click', function(){
        $('.br-fx-open').addClass('active');
        $('.br-fx-sidebar').addClass('active');
    });

    $('.br-lt-button button').on('click', function(){
        $('.br-lt-button').addClass('active');
        $('.br-fx-sidebar').addClass('active');
    });

    $('.br-quick-category-btn').on('click', function () {
        $(this).addClass('active');
        $('.br-quick-category-menu').addClass('active');
    });

    $('.br-quick-category-menu > button').on('click', function () {
        $('.br-quick-category-menu').removeClass('active');
        $('.br-quick-category-btn').removeClass('active');
    });

    $('.br-address-radio label').on('click', function () {
        var radioName = $(this).attr('class');
        $('input' + "." + radioName).trigger('click');
    });

    if($('.br-slist label').length){
        $('.br-slist label').on('click', function () {
            var chName = $(this).attr('class');
            $('input' + "." + chName + " + ins").trigger('click');
        });
    }

    $('.br-category-block-sa button').on('click', function () {
        $(this).closest('.br-category-block-bottom').siblings('.br-category-block').addClass('active');
    });

    $('.br-category-block .br-category-block button').on('click', function () {
        $(this).closest('.br-category-block-right').find('.br-category-block').removeClass('active');
        $(this).parent('div').parent('.br-category-block').parent('.br-category-block').children('.br-category-block').removeClass('active');
    });

    /*new product page*/
    $('.br-pr-menu a').on('click', function(){
        $('.br-pr-fixed').removeClass('active');
        $('.br-pr-menu').removeClass('active');
        prodTab = $(this).attr('href');
        $('.product-tabs a[href="' + prodTab +'"]').trigger('click');
    });
    /*new product page end*/

    $('.br-pr-lpp a').on('click', function(){
        var target = $(this).attr('href');
        $('.br-markdown-hidden').removeClass('br-markdown-hidden');
        $('html, body').animate({scrollTop: $(target).offset().top - 100}, 800);
        return false;
    });
    $('.br-left-nav a').on('click', function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 150}, 800);
        return false;
    });

    $('.br-fixed-ct-menu > button').on('click', function () {
        $(this).parent('.br-fixed-ct-menu').removeClass('open');
    });

    $('.br-all-category-button').on('click', function () {
        $('.br-all-category-menu').toggleClass('open');
    });

    $('.br-btn-fixed').on('click', function () {
        $(this).addClass('open');
        $('.br-fx-menu').addClass('active');
    });

    $('.br-fx-menu-in > div > button, .br-fx-menu a').on('click', function () {
        $('.br-btn-fixed').removeClass('open');
        $('.br-fx-menu').removeClass('active');
        var shopTab = $(this).text();
        $('.br-shops-head').find('button span:last-child').text(shopTab);
    });

    $('.br-ct-popular-category-button').on('click', function () {
        $('.br-popular-category-menu').toggleClass('open');
    });

    $('.br-fixed-ct-menu-in > ul > li > button').on('click', function () {
        $(this).toggleClass('open');
        $(this).next('.br-ct-menu-second').toggle('fast');
        $(this).next('.br-ct-menu-second').children('.br-ct-menu-show-all').toggle('fast');
    });

    $('.br-ct-menu-second > div > button').on('click', function () {
        $(this).toggleClass('open');
        $(this).next('.br-ct-menu-third').toggle('fast');
        $(this).siblings('.br-ct-menu-show-all').toggle('fast');
    });

    $('.br-quick-category-menu a').on('click', function(){
        $('.br-quick-category-menu').removeClass('active');
        $('.br-quick-category-btn').removeClass('active');
        var targetCat = $(this).attr('href');
        $('html, body').animate({scrollTop: $(targetCat).offset().top - 80}, 800);
        return false;
    });

    $(window).on('load resize', function () {


        tabCarousel.on('changed.owl.carousel', function(event) {
            if($(window).width() < 766)
            {
                setTimeout(function(){
                    $('.br-lt-tabs-head .owl-item.active a').trigger('click');
                }, 100);
            }
        });

        $('.br-comment-text').addClass('loaded');
        $('.br-pt-bc-item').each(function () {
            var commentSize = $(this).children('.br-comment-text').children('p').height();
            if(commentSize <= 48)
            {
                $(this).children('.br-comment-bottom').children('.br-rc-button').hide();
            }
            else
            {
                $(this).children('.br-comment-text').addClass('high');
            }
        });
        $('.br-ri-right').each(function () {
            var mcommentSize = $(this).children('.br-ri-review').children('div').height();
            if(mcommentSize <= 80)
            {
                $(this).find('.br-ri-read').hide();
            }
        });
    });

    $('.br-rc-button').on('click', function(){
        $(this).toggleClass('open');
        $(this).parent().siblings('.br-comment-text').toggleClass('high', function () {
            var itemHeight = $(this).parents('.br-ct-bc-item-out').outerHeight();
            $(this).parents('.owl-stage-outer').height(itemHeight);
        });
    });

    $('.br-rc-c').on('click', function(){
        $(this).toggleClass('open');
        $(this).parent().siblings('.br-pr-rcm').toggle('fast', function(){
            var itemHeight = $(this).parents('.br-ct-bc-item-out').outerHeight();
            $(this).parents('.owl-stage-outer').height(itemHeight);
        });
    });

    $('.br-reviews-item .br-rc-c').on('click', function(){
        $(this).closest('.br-wrap-block').find('.br-reviews-item + .br-pr-rcm').toggle('fast');
    });

    $('.br-reviews-show button').on('click', function () {
        $(this).toggleClass('open');
        $(this).parent().siblings('.br-pt-bc-list-in').children('.br-pt-bc-item').toggle();
    });

    $('.br-pr-buy-first').on('click', function () {
        $(this).hide();
        $(this).next('.br-pr-buy-second').addClass('active')
    });

    $('.br-pr-fixed-buy-first').on('click', function () {
        $(this).hide();
        $('.br-pr-fixed-buy-second').addClass('active')
    });

    $('.br-pt-menu-in a').on('click', function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 130}, 800);
        return false;
    });

    $('.visible-lg .br-slist li input').on('ifChecked',function(){
        $(this).closest('.visible-lg').find('.br-sf-results').show().appendTo($(this).closest('li'));
    }).on('ifUnchecked',function(){
        $(this).closest('.visible-lg').find('.br-sf-results').hide();
    });

    $('.br-sidebar-in .br-slist li input').on('ifChecked',function(){
        $(this).closest('.br-sidebar-in').find('.br-sf-results').show().appendTo($(this).closest('li'));
    }).on('ifUnchecked',function(){
        $(this).closest('.br-sidebar-in').find('.br-sf-results').hide();
    });

    $('.br-checkbox-links-d .br-checkbox-link').on('click', function () {
        var boxChain = $(this).attr('data-id');
        if($(window).width() >= 1355){
            $('.br-checkbox-links-m a[data-id="' + boxChain + '"' + ']').trigger('click');
        }
        if($(this).hasClass('active')){
            $(this).closest('.br-checkbox-links-d').find('.br-sf-results').hide();
        }else{
            $(this).closest('.br-checkbox-links-d').find('.br-sf-results').show().appendTo($(this).closest('li'));
        }
    });

    $('.br-checkbox-links-m .br-checkbox-link').on('click', function () {
        var boxChain = $(this).attr('data-id');
        if($(window).width() < 1355){
            $('.br-checkbox-links-d a[data-id="' + boxChain + '"' + ']').trigger('click');
        }
        if($(this).hasClass('active')){
            $(this).closest('.br-checkbox-links-m').find('.br-sf-results').hide();
        }else{
            $(this).closest('.br-checkbox-links-m').find('.br-sf-results').show().appendTo($(this).closest('li'));
        }
    });

    $('.br-checkbox-link').on('click', function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });

    $('.br-slist').each(function () {
        var liLength = $(this).find('ul > li').length;
        if(liLength > 5)
        {
            $(this).find('.br-slist-toggle').show();
        }
    });
    $('.br-slist-toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.br-slist').find('.last').toggleClass('hidden');
    });

    $('.br-ch-agr input').on('ifChecked',function(){
        $('.br-ch-last .br-ch-submit').removeClass('disabled');
    }).on('ifUnchecked',function(){
        $('.br-ch-last .br-ch-submit').addClass('disabled');
    });

    $('.br-cart-item').each(function(){
        $(this).find('.br-ci-q button').on("click", function() {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                if (oldValue > 1) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });
    });

    var hsHeight = $('header').height();

    $(window).on('resize', function () {
        hsHeight = $('header').height();
    });

    // alert fixes
    $(window).on('scroll resize', function(){

        var wHeight = $(window).height();
        var aHeight = $('.br-alert').height();
        var hHeight = $('header').height();

        if ($(window).scrollTop() > 0){
            $('.br-alert').addClass('fixed');
            $('body').removeClass('pillar');
        }else{
            $('.br-alert').removeClass('fixed');
            $('body').addClass('pillar');
        }

        if($('.br-pt-menu .br-pt-menu-in').hasClass('is_stuck'))
        {
            $('.br-bh-menu-bottom').addClass('hidden');
            $('header .br-pt-menu-in').removeClass('hidden');
        }else
        {
            $('.br-bh-menu-bottom').removeClass('hidden');
            $('header .br-pt-menu-in').addClass('hidden');
        }

        if($(window).scrollTop() + wHeight >= $('footer').offset().top) {
            $('.br-o-filter').addClass('hidden');
            $('.br-fixed-buttons').addClass('hidden');
            $('.br-sort-menu').addClass('hidden');
            $('.br-sort-menu-fixed').addClass('hidden');
            $('.br-o-sort').addClass('hidden');
        }
        else
        {
            $('.br-o-filter').removeClass('hidden');
            $('.br-fixed-buttons').removeClass('hidden');
            $('.br-sort-menu').removeClass('hidden');
            $('.br-sort-menu-fixed').removeClass('hidden');
            $('.br-o-sort').removeClass('hidden');
        }

        if($('.br-alert').is(":visible"))
        {
            if ($(window).width() > 1011)
            {
                if ($(window).scrollTop() >= hsHeight - 55)
                {
                    $('.br-theader').hide();
                    $('.br-bh-menu-top').addClass('hiddenm').removeClass('showd');
                    $('.br-fmenu-button').show();
                    $('.br-hidden').removeClass('hidden');
                    $('.br-bheader-in').addClass('active');
                    $('.br-ceader-in').addClass('active');
                    $('.br-alert').addClass('invisible');
                    $('body').css('padding-top', hsHeight + 65 + aHeight);
                    $('.br-body-p').css('padding-top', hsHeight + aHeight);
                    $('header').addClass('fixed').css('top', aHeight);
                }
                else
                {
                    $('.br-theader').show();
                    $('.br-bh-menu-top').removeClass('hiddenm').addClass('showd');
                    $('.br-fmenu-button').hide();
                    $('.br-hidden').addClass('hidden');
                    $('.br-bheader-in').removeClass('active');
                    $('.br-ceader-in').removeClass('active');
                    $('.br-alert').removeClass('invisible');
                    $('body').css('padding-top', aHeight);
                    $('header').removeClass('fixed').css('top', '0');
                }
            }
            else
            {
                if ($(window).scrollTop() > 0)
                {
                    $('.br-theader').hide();
                    $('.br-bh-menu-top').addClass('hiddenm').removeClass('showd');
                    $('.br-fmenu-button').show();
                    $('.br-hidden').removeClass('hidden');
                    $('.br-bheader-in').addClass('active');
                    $('.br-ceader-in').addClass('active');
                    $('.br-alert').addClass('invisible');
                    if($(window).width() > 766){
                        $('body').css('padding-top', aHeight + 114);
                    }
                    else if($(window).width() < 766)
                    {
                        $('body').css('padding-top', aHeight + 91);
                    }
                    $('header').addClass('fixed').css('top', aHeight);
                }
                else
                {
                    $('.br-theader').show();
                    $('.br-bh-menu-top').removeClass('hiddenm').addClass('showd');
                    $('.br-fmenu-button').hide();
                    $('.br-hidden').addClass('hidden');
                    $('.br-bheader-in').removeClass('active');
                    $('.br-ceader-in').removeClass('active');
                    $('.br-alert').removeClass('invisible');
                    $('body').css('padding-top', aHeight);
                    $('header').removeClass('fixed').css('top', '0');
                }
            }
        }
        else
        {
            if ($(window).width() > 1011)
            {
                if ($(window).scrollTop() >= hsHeight - 55)
                {
                    $('.br-theader').hide();
                    $('.br-bh-menu-top').addClass('hiddenm').removeClass('showd');
                    $('.br-fmenu-button').show();
                    $('.br-hidden').removeClass('hidden');
                    $('.br-bheader-in').addClass('active');
                    $('.br-ceader-in').addClass('active');
                    $('.br-alert').addClass('invisible');
                    $('body').css('padding-top', hsHeight + 65);
                    $('.br-body-p').css('padding-top', hsHeight);
                    $('header').addClass('fixed').css('top', '0');
                }
                else
                {
                    $('.br-theader').show();
                    $('.br-bh-menu-top').removeClass('hiddenm').addClass('showd');
                    $('.br-fmenu-button').hide();
                    $('.br-hidden').addClass('hidden');
                    $('.br-bheader-in').removeClass('active');
                    $('.br-ceader-in').removeClass('active');
                    $('.br-alert').removeClass('invisible');
                    $('body').css('padding-top', '0');
                    $('header').removeClass('fixed').css('top', '0');
                }
            }
            else
            {
                if ($(window).scrollTop() > 0)
                {
                    $('.br-theader').hide();
                    $('.br-bh-menu-top').addClass('hiddenm').removeClass('showd');
                    $('.br-fmenu-button').show();
                    $('.br-hidden').removeClass('hidden');
                    $('.br-bheader-in').addClass('active');
                    $('.br-ceader-in').addClass('active');
                    $('.br-alert').addClass('invisible');
                    if($(window).width() > 766){
                        $('body').css('padding-top', '114px');
                    }
                    else if($(window).width() < 766)
                    {
                        $('body').css('padding-top', '91px');
                    }
                    $('header').addClass('fixed');
                }
                else
                {
                    $('.br-theader').show();
                    $('.br-bh-menu-top').removeClass('hiddenm').addClass('showd');
                    $('.br-fmenu-button').hide();
                    $('.br-hidden').addClass('hidden');
                    $('.br-bheader-in').removeClass('active');
                    $('.br-ceader-in').removeClass('active');
                    $('.br-alert').removeClass('invisible');
                    $('body').css('padding-top', '0');
                    $('header').removeClass('fixed');
                }
            }
        }

    });
    // alert fixes end

    $('.panel a').on('click', function () {
        if($(window).width() < 680)
        {
            var tabId = $(this).attr('data-id');
            $('.br-dt-abs a[data-id="' + tabId + '"' + ']').trigger('click');
        }
    });
    $('.br-dt-abs a').on('click', function () {
        if($(window).width() >= 766)
        {
            var tabId = $(this).attr('data-id');
            $('.panel a[data-id="' + tabId + '"' + ']').trigger('click');
        }
    });

    $('.br-ps-block .br-del-in-drop > button').on('click', function () {
        if($(window).width() < 680)
        {
            var dropId = $(this).attr('data-id');
            $('.br-shops-body .br-del-in-drop > button[data-id="' + dropId + '"' + ']').trigger('click');
        }
    });

    $('.br-shops-body .br-del-in-drop > button').on('click', function () {
        if($(window).width() >= 766)
        {
            var dropId = $(this).attr('data-id');
            $('.br-ps-block .br-del-in-drop > button[data-id="' + dropId + '"' + ']').trigger('click');
        }
    });

    $('.br-ps-block .br-del-in-drop a').on('click', function () {
        if($(window).width() < 680)
        {
            var dropId = $(this).attr('data-id');
            $('.br-shops-body .br-del-in-drop a[data-id="' + dropId + '"' + ']').trigger('click');
        }
    });

    $('.br-shops-body .br-del-in-drop a').on('click', function () {
        if($(window).width() >= 766)
        {
            var dropId = $(this).attr('data-id');
            $('.br-ps-block .br-del-in-drop a[data-id="' + dropId + '"' + ']').trigger('click');
        }
    });

    $('.br-ps-block .br-shops-show a').on('click', function () {
        if($(window).width() < 600)
        {
            var dropId = $(this).attr('data-id');
            $('.br-shops-body .br-shops-show a[data-id="' + dropId + '"' + ']').trigger('click');
        }
    });

    $('.br-shops-body .br-shops-show a').on('click', function () {
        if($(window).width() >= 766)
        {
            var dropId = $(this).attr('data-id');
            $('.br-ps-block .br-shops-show a[data-id="' + dropId + '"' + ']').trigger('click');
        }
    });

    $(window).on('scroll resize load', function () {

        var wHeights = $(window).height();

        if($(window).scrollTop() + wHeights >= $('footer').offset().top) {
            $('.br-quick-category-btn').addClass('stuck');
        }
        else
        {
            $('.br-quick-category-btn').removeClass('stuck');
        }
    });


    $('.ch-next-f').on('click', function () {
        $('.br-ch-anchor.active').next().addClass('active');
        $('.br-ch-anchor.active').prev().removeClass('active');
        if($('#br-ch-5').hasClass('active')){
            $('#br-ch-6').addClass('super-active');
            $('.br-ch-alast').addClass('active');
        }else{
            $('.br-ch-alast').removeClass('active');
        }
    });

    $('.ch-next-s').on('click', function () {
        $('.br-ch-anchor.active').next().addClass('active').addClass('super-active');
        $('.br-ch-anchor.active').prev().removeClass('active').removeClass('super-active');
        if($('#br-ch-6').hasClass('active')){
            $('.br-ch-alast').addClass('active');
        }else{
            $('.br-ch-alast').removeClass('active');
        }
    });

    $('.ch-next-t').on('click', function () {
        $('.br-ch-anchor.active').next().addClass('active').addClass('super-active');
        $('.br-ch-anchor.active').prev().removeClass('active').removeClass('super-active');
        if($('#br-ch-6').hasClass('active')){
            $('.br-ch-alast').addClass('active');
        }else{
            $('.br-ch-alast').removeClass('active');
        }
    });

    $('.br-ch-fixed div button').on('click', function () {
        $('html, body').animate({scrollTop:0},'fast');
        if($('.br-ch-alast').hasClass('active')){
            $('.br-ch-fixed div').addClass('hidden');
        }else{
            $('.br-ch-fixed div').removeClass('hidden');
        }
    });

    $('.br-ch-menu ul button').on('click', function () {
        $('html, body').animate({scrollTop:0},'fast');
        $('.br-ch-menu').removeClass('active');
        $('.br-ch-fixed').removeClass('active');
        $('.br-ch-anchor').removeClass('active').removeClass('super-active');
        $('.br-ch-alast').removeClass('active');
    });

    $('.br-ch-menu > div button').on('click', function () {
        $('.br-ch-menu').removeClass('active');
        $('.br-ch-fixed').removeClass('active');
    });

    $('.br-pr-menu > div button').on('click', function () {
        $('.br-pr-menu').removeClass('active');
        $('.br-pr-fixed').removeClass('active');
    });

    $('.br-prof-sf-in > button').on('click', function () {
        $('.br-prof-sidebar-fixed').removeClass('active');
        $('.br-prof-fixed').removeClass('active');
    });

    $('.br-fx-in > button').on('click', function () {
        $('.br-fx-sidebar').removeClass('active');
        $('.br-fx-open').removeClass('active');
        $('.br-lt-button').removeClass('active');
    });

    $('.br-fx-sidebar-links ul a').on('click', function () {
        $('.br-fx-sidebar').removeClass('active');
        $('.br-fx-open').removeClass('active');
    });

    $('.be-chm1').on('click', function () {
        $('#br-ch-1').addClass('active');
        $('.ch-accept-credit').removeClass('super-active');
    });

    $('.be-chm2').on('click', function () {
        $('#br-ch-2').addClass('active');
        $('.ch-accept-credit').removeClass('super-active');
    });

    $('.be-chm3').on('click', function () {
        $('#br-ch-3').addClass('active');
        $('.ch-accept-credit').removeClass('super-active');
    });

    $('.be-chm4').on('click', function () {
        $('#br-ch-4').addClass('active');
        $('.ch-accept-credit').removeClass('super-active');
    });

    $('.be-chm5').on('click', function () {
        $('#br-ch-5').addClass('active');
        $('.ch-accept-credit').removeClass('super-active');
    });

    $('.be-chm6').on('click', function () {
        $('.br-ch-alast').addClass('active');
    });

    $('.br-ch-menu ul button').on('click', function () {
        if($('.br-ch-alast').hasClass('active')){
            $('.br-ch-fixed div').addClass('hidden');
        }else{
            $('.br-ch-fixed div').removeClass('hidden');
        }

        $('.ch-next-t').on('click', function () {
            if($('#br-ch-2').hasClass('super-active') || $('#br-ch-3').hasClass('super-active') || $('#br-ch-4').hasClass('super-active') || $('#br-ch-5').hasClass('super-active')){
                $('#br-ch-6').removeClass('super-active');
                $('.ch-accept-credit').removeClass('super-active');
            }
        });
    });


});