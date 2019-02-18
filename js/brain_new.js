$(function () {

    $('.menu-inner > li').on('mouseenter', function () {
        var itemIcon = $(this).find('img').clone().appendTo($(this).closest('.menu-inner-wrap').find('.menu-inner-icon'));
    }).on('mouseleave', function () {
        $('.menu-inner-icon').html('');
    });

    var buttonWrap = $('.with-disabled');
    var buttonDisabled = buttonWrap.find('.cover');
    var buttonMenu = $('.main-menu-button-lg');
    var buttonMenuMob = $('.main-menu-button-md');
    var buttonDrop = $('.dropdown-button');
    var buttonCallback = $('.callback-button');
    var buttonCatalor = $('.catalog-button');
    var buttonCatalogClose = $('.catalog-close');
    var buttonMenuDrop = $('.top-menu-drop-button');
    var buttonMenuMore = $('.top-menu-more button');
    var sidePanelButton = $('.side-panel-button');
    var sideMenuButton = $('.side-menu-button');
    var sidePanelClose = $('.side-close');
    var menuWrap = $('.menu-outer');
    var shadow = $('.shadow');
    var header = $('.header-main');
    var body = $('body');

    $(window).on('load scroll resize', function () {
        var wHeight = $(window).outerHeight();
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

                if($('.with-disabled').length){
                    menuWrap.on('mouseenter', function () {
                        body.addClass('with-shadow');
                        $('.dropdown-button.active').trigger('click');
                        $('.callback-button.in').trigger('click');

                    }).on('mouseleave', function () {
                        body.removeClass('with-shadow');
                    });
                }
            }
        }
    }).on('load resize', function () {
        if (window.matchMedia('(max-width: 766px)').matches) {
            if (buttonMenuMob.hasClass('active')) {
                buttonMenuMob.trigger('click');
            }
        }
        if (window.matchMedia('(max-width: 1011px)').matches) {
            buttonWrap.removeClass('disabled');
            buttonDisabled.hide();
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
        if ($(this).hasClass('in')) {
            $(this).closest('.callback-wrap').find('.callback-in').removeClass('open');
        } else {
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
        $('.card-chars-button.active').trigger('click');
    });

    $('html').on('mouseup', function (e) {
        var dropWrap = $('.dropdown-wrap');
        var callbackWrap = $('.callback-wrap');
        dropWrap.each(function () {
            if ($(this).has(e.target).length === 0) {
                $(this).find('button.active').trigger('click');
            }
        });
        callbackWrap.each(function () {
            if ($(this).has(e.target).length === 0) {
                $(this).find('button.in').trigger('click');
            }
        });
    });

    buttonMenuDrop.on('click', function () {
        $(this).toggleClass('active').siblings('.dropdown-cont').toggle('fast');
    });

    buttonMenuMore.on('click', function () {
        $(this).toggleClass('active').siblings('ul').toggle('fast');
    });


    $('.top-alert-close').on('click', function () {
        if(header.hasClass('fixed')){
            var headerHeight = header.outerHeight();
            body.css('padding-top', headerHeight);
        }
        $('.top-alert').hide();
    });

});