$(function () {

    $('.menu-inner > li').on('mouseenter', function () {
        var itemIcon = $(this).find('img').clone().appendTo($(this).closest('.menu-inner-wrap').find('.menu-inner-icon'));
    }).on('mouseleave', function () {
        $('.menu-inner-icon').html('');
    });

    var buttonWrap = $('.with-disabled');
    var buttonDisabled = buttonWrap.find('.cover');
    var buttonMenu = $('.main-menu-button-lg');
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
            $('body').addClass('shadow-hidden');
            buttonMenu.removeClass('active');
        } else {
            $('body').removeClass('shadow-hidden');
            if(buttonWrap.length){
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

                    menuWrap.on('mouseenter', function () {
                        body.addClass('with-shadow');
                        $('.dropdown-button.active').trigger('click');
                        $('.callback-in').removeClass('open');

                    }).on('mouseleave', function () {
                        body.removeClass('with-shadow');
                    });
                }
            }else{
                if ($(this).scrollTop() > 0) {
                    header.addClass('fixed');
                    body.css('padding-top', headerHeight);
                    if (menuWrap.is(':visible')) {
                        $('body').addClass('with-shadow');
                    }
                } else {
                    header.removeClass('fixed');
                    body.css('padding-top', '');
                    if (!menuWrap.is(':visible')) {
                        $('body').removeClass('with-shadow');
                    }
                }
            }
        }
    }).on('load resize', function () {
        if (window.matchMedia('(max-width: 1011px)').matches) {
            buttonWrap.removeClass('disabled');
            buttonDisabled.hide();
        }

        $('.br-slider-fa').each(function () {
            $(this).height(0);
        });
        $('.br-row-top .br-slider-outer .br-banner-slider').height(0);
        $('.br-bsliders-s').height(0);
        $('.br-bsliders-s .br-banner-slider').height(0);
        setTimeout(function () {
            $('.br-slider-fa').each(function () {
                $(this).height($(this).parent().height());
            });
            $('.br-row-top .br-slider-outer .br-banner-slider').height($('.br-row-top .br-slider-outer').height());
            $('.br-bsliders-s').height($('.br-bsliders-s').parent().height());
            $('.br-bsliders-s .br-banner-slider').height($('.br-bsliders-s .br-banner-slider').parent().height());
        },500);
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


    $('.catalog-back-save').on('click', function () {
        $('.side-panel').addClass('with-catalog-back');
        $('.catalog-back').show();
        var menuCategoryName = $(this).closest('.br-nmc-in').find('.br-nm-back').html();
        $('.catalog-back-name').html(menuCategoryName);
        $('.br-nm-in').removeClass('saved').slideUp();
        $(this).closest('.br-nm-in').addClass('saved');
        $('.side-catalog-cont').slideUp();
    });
    $('.catalog-back-button').on('click', function () {
        $('.side-catalog-cont').slideDown();
        var catalogSaved = $('.br-nm-in.saved');
        catalogSaved.parents('.br-nm-in').slideDown();
        catalogSaved.slideDown();

    });
    $(window).on('load resize', function(){
        var panelWidth = $('.side-panel').outerWidth();
        $('.side-catalog-cont .br-nmc-in').attr('style', 'width:' + panelWidth + 'px' + '!important');
    });

});