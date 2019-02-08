$(function () {

    $('.menu-inner > li').on('mouseenter', function () {
        var itemIcon = $(this).find('img').clone().appendTo($(this).closest('.menu-inner-wrap').find('.menu-inner-icon'));
    }).on('mouseleave', function () {
        $('.menu-inner-icon').html('');
    });

    $('.tabs-nav-item').on('click', function () {
        var target = $(this).attr('data-href');
        $(target).addClass('active');
        $(target).siblings().removeClass('active');

        $('.tabs-list .br-slider-fa').each(function () {
            $(this).height(0);
        });
        setTimeout(function () {
            $('.tabs-list .br-slider-fa').each(function () {
                $(this).height($(this).parent().height());
            });
        }, 100);
    });

    var buttonWrap = $('.with-disabled');
    var buttonDisabled = buttonWrap.find('.cover');
    var buttonMenu = $('.main-menu-button-lg');
    var buttonMenuMob = $('.main-menu-button-md');
    var buttonDrop = $('.dropdown-button');
    var buttonCallback = $('.callback-button');
    var buttonCatalor = $('.catalog-button');
    var buttonCatalogClose = $('.catalog-close');
    var buttonChoose = $('.choose-list button');
    var sidePanelButton = $('.side-panel-button');
    var sideMenuButton = $('.side-menu-button');
    var sidePanelClose = $('.side-close');
    var menuWrap = $('.menu-outer');
    var shadow = $('.shadow');
    var header = $('.header-main');
    var body = $('body');
    var smartLink = $('.smart-links a');
    var cardsList = $('.products-slider');
    var productCard = $('.product-card');

    $(window).on('load scroll resize', function () {
        var headerHeight = header.outerHeight();
        if (window.matchMedia('(max-width: 1011px)').matches) {
            if ($(this).scrollTop() >= header.offset().top) {
                header.addClass('fixed');
                body.css('padding-top', headerHeight).removeClass('pillar');
            } else {
                header.removeClass('fixed');
                body.css('padding-top', '');
            }
        } else {
            if ($(this).scrollTop() >= $('.top-edge').offset().top) {
                header.addClass('fixed');
                body.css('padding-top', headerHeight);
                buttonWrap.removeClass('disabled');
                buttonDisabled.hide();
                if (menuWrap.is(':visible')) {
                    $('body').addClass('with-shadow');
                }
                menuWrap.on('mouseleave', function () {
                    $('body').addClass('with-shadow');
                });
            } else {
                header.removeClass('fixed');
                body.css('padding-top', '').removeClass('with-shadow');
                buttonWrap.addClass('disabled');
                buttonDisabled.show();
            }
        }
    }).on('load resize', function () {
        var linksWidth = smartLink.outerWidth();
        smartLink.css('height', linksWidth);
        var testNum = 1;
        if (window.matchMedia('(max-width: 1354px)').matches) {
            $('.tabs-nav').addClass('owl-carousel').owlCarousel({
                nav: true,
                dots: false,
                mouseDrag: false,
                touchDrag: false,
                responsive:{
                    0:{
                        items: 1
                    },
                    767:{
                        autoWidth: true
                    }
                }
            }).on('translated.owl.carousel', function(event) {
                testNum = 0;
                if (window.matchMedia('(max-width: 766px)').matches) {
                    if(testNum == 0){
                        $(this).find('.owl-item.active .tabs-nav-item').trigger('click');
                        var tabItemId = $(this).find('.owl-item.active .tabs-nav-item').attr('data-href');
                        $('.choose-list button[data-href="' + tabItemId +'"]').parent().addClass('active').siblings().removeClass('active');
                    }
                }
            });
            $('.tabs-nav-item').on('click', function () {
                $(this).addClass('active');
                $(this).closest('.owl-item').siblings().find('.tabs-nav-item').removeClass('active');
                var thisItemId = $(this).attr('data-href');
                $('.choose-list button[data-href="' + thisItemId +'"]').parent().addClass('active').siblings().removeClass('active');
            });
            buttonChoose.on('click', function () {
                $(this).parent().addClass('active').siblings().removeClass('active');
                var navButton = $(this).attr('data-href');
                var tabItem = $('.tabs-nav-item[data-href="' + navButton +'"]').trigger('click');
                var tabItemIndex = tabItem.parent().index();
                $('.modal-min-close').trigger('click');
                $('.tabs-nav').trigger('to.owl.carousel', tabItemIndex);
            });
        } else {
            $('.tabs-nav-item').on('click', function () {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            });
            $('.tabs-nav').removeClass('owl-carousel').owlCarousel('destroy');
        }
        if (window.matchMedia('(max-width: 766px)').matches){
            if(buttonMenuMob.hasClass('active')){
                buttonMenuMob.trigger('click');
            }
        }
        if (window.matchMedia('(max-width: 1011px)').matches){
            buttonWrap.removeClass('disabled');
            buttonDisabled.hide();
            cardsList.addClass('owl-carousel').owlCarousel({
                items: 2,
                margin: 2,
                nav: false,
                dots: true
            });
            cardsList.find('.hidden-xs').parent().hide();
        }else{
            cardsList.removeClass('owl-carousel').owlCarousel('destroy');
            if(cardsList.hasClass('owl-carousel')){
                cardsList.find('.hidden-xs').parent().show();
            }
        }
    }).on('load scroll', function () {
        if (window.matchMedia('(min-width: 1012px)').matches){
            menuWrap.on('mouseenter', function () {
                body.addClass('with-shadow');
                $('.dropdown-button.active').trigger('click');
                $('.callback-button.in').trigger('click');

            }).on('mouseleave', function () {
                body.removeClass('with-shadow');
            });
        }
    });

    buttonDisabled.on('click', function () {
        menuWrap.addClass('light');
    });

    menuWrap.on('mouseenter', function () {
        $(this).removeClass('light');
    });

    buttonMenu.on('click', function () {
        $(this).toggleClass('active');
        $('body').toggleClass('with-shadow');
        menuWrap.toggle();
    });

    buttonMenuMob.on('click', function () {
        $(this).toggleClass('active');
        $('.menu-inner-wrap-single').toggle();
        body.toggleClass('with-shadow');
    });

    sidePanelButton.on('click', function () {
        $('.side-panel').toggleClass('open');
        shadow.fadeToggle();
    });

    sidePanelClose.on('click', function () {
        $('.side-panel').removeClass('open');
        shadow.fadeOut();
    });

    sideMenuButton.on('click', function () {
        $(this).toggleClass('open');
        $(this).siblings('ul').toggle('fast');
    });

    buttonDrop.on('click', function () {
        $(this).toggleClass('active').siblings('.dropdown-cont').toggle('fast');
        $('.header-top').toggleClass('z-higher');
    });

    buttonCallback.on('click', function () {
        if($(this).hasClass('in')){
            $(this).closest('.callback-wrap').find('.callback-in').removeClass('open');
        }else{
            $(this).closest('.callback-wrap').find('.callback-in').addClass('open');
        }
    });

    buttonCatalor.on('click', function () {
        $('.side-catalog-cont').slideDown('fast');
        $('.side-panel').addClass('open');
        shadow.fadeIn();
    });

    buttonCatalogClose.on('click', function () {
        $('.side-catalog-cont').slideUp('fast');
    });

    shadow.on('click', function () {
        $(this).fadeOut();
        $('.side-catalog-cont').slideUp('fast');
        $('.side-panel').removeClass('open');
    });

    $('html').on('mouseup', function (e) {
        var dropWrap = $('.dropdown-wrap');
        var callbackWrap = $('.callback-wrap');
        dropWrap.each(function () {
            if ($(this).has(e.target).length === 0){
                $(this).find('button.active').trigger('click');
            }
        });
        callbackWrap.each(function () {
            if ($(this).has(e.target).length === 0){
                $(this).find('button.in').trigger('click');
            }
        });
    });

    productCard.each(function () {
        var productColors = $(this).find('.product-card-colors');
        if(productColors.length){
            $(this).addClass('with-colors');
        }
    });

    productCard.on('mouseenter', function () {
        var productHeight = $(this).outerHeight();
        var charsHeight = $(this).find('.product-card-chars').outerHeight();
        var colorsHeight = $(this).find('.product-card-colors').outerHeight();
        var productAllHeight = productHeight + charsHeight + colorsHeight;
        $(this).addClass('focused');
        $(this).append('<div class="product-shadow"></div>');
        $('.product-shadow').css({
            'height': productAllHeight,
            'top': -colorsHeight
        });
    }).on('mouseleave', function () {
        $(this).removeClass('focused');
        $(this).find('.product-shadow').remove();
    });

});