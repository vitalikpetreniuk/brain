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
    var buttonChars = $('.card-chars-button');
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

                menuWrap.on('mouseenter', function () {
                    body.addClass('with-shadow');
                    $('.dropdown-button.active').trigger('click');
                    $('.callback-button.in').trigger('click');

                }).on('mouseleave', function () {
                    body.removeClass('with-shadow');
                });
            }
        }
        if (window.matchMedia('(min-width: 1012px)').matches) {
            $('.choose-list .tile button').trigger('click');
            $('.card-chars-button.active').trigger('click');
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
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        autoWidth: true
                    }
                }
            }).on('translated.owl.carousel', function (event) {
                testNum = 0;
                if (window.matchMedia('(max-width: 766px)').matches) {
                    if (testNum == 0) {
                        $(this).find('.owl-item.active .tabs-nav-item').trigger('click');
                        var tabItemId = $(this).find('.owl-item.active .tabs-nav-item').attr('data-href');
                        $('.choose-list button[data-href="' + tabItemId + '"]').parent().addClass('active').siblings().removeClass('active');
                    }
                }
            });
            $('.tabs-nav-item').on('click', function () {
                $(this).addClass('active');
                $(this).closest('.owl-item').siblings().find('.tabs-nav-item').removeClass('active');
                var thisItemId = $(this).attr('data-href');
                $('.choose-list button[data-href="' + thisItemId + '"]').parent().addClass('active').siblings().removeClass('active');
            });
            buttonChoose.on('click', function () {
                $(this).parent().addClass('active').siblings().removeClass('active');
                var navButton = $(this).attr('data-href');
                var tabItem = $('.tabs-nav-item[data-href="' + navButton + '"]').trigger('click');
                var tabItemIndex = tabItem.parent().index();
                $('.modal-min-close').trigger('click');
                $('.tabs-nav').trigger('to.owl.carousel', tabItemIndex);
                if ($(this).parent().hasClass('tile')) {
                    $('.tabs-view-button').removeClass('list').addClass('tile');
                    $('.products-list').removeClass('products-list-tile');
                } else if ($(this).parent().hasClass('list')) {
                    $('.tabs-view-button').removeClass('tile').addClass('list');
                    $('.products-list').addClass('products-list-tile');
                }
            });
        } else {
            $('.tabs-nav-item').on('click', function () {
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
            });
            $('.tabs-nav').removeClass('owl-carousel').owlCarousel('destroy');
        }
        if (window.matchMedia('(max-width: 766px)').matches) {
            if (buttonMenuMob.hasClass('active')) {
                buttonMenuMob.trigger('click');
            }
        }
        if (window.matchMedia('(max-width: 1011px)').matches) {
            buttonWrap.removeClass('disabled');
            buttonDisabled.hide();
            cardsList.addClass('owl-carousel').owlCarousel({
                items: 2,
                margin: 2,
                nav: false,
                dots: true
            });
            cardsList.find('.hidden-xs').parent().hide();
        } else {
            cardsList.removeClass('owl-carousel').owlCarousel('destroy');
            if (cardsList.hasClass('owl-carousel')) {
                cardsList.find('.hidden-xs').parent().show();
            }
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

    productCard.each(function () {
        var productColors = $(this).find('.product-card-colors');
        if (productColors.length) {
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

    buttonChars.on('click', function () {
        $(this).closest('.product-card').toggleClass('focused-extra');
        $(this).toggleClass('active').siblings('.product-card-chars').toggleClass('open');
        if ($(this).hasClass('active')) {
            $('.shadow').fadeIn();
            $(this).closest('.product-card').append('<div class="product-shadow-extra"></div>');
            var productHeight = $(this).closest('.product-card').outerHeight();
            var charsHeight = $(this).closest('.product-card').find('.product-card-chars').outerHeight();
            var productAllHeight = productHeight + charsHeight;
            $('.product-shadow-extra').css({
                'height': productAllHeight
            });
        } else {
            $('.shadow').fadeOut();
            $(this).closest('.product-card').find('.product-shadow-extra').remove();
        }
    });


    buttonChoose.on('click', function () {
        var productCard = $('.products-list .product-card');
        if ($(this).parent().hasClass('list')) {
            productCard.each(function () {
                if (!$(this).find('.product-card-left').length || !$(this).find('.product-card-right').length) {
                    productCard.addClass('horizontal');
                    productCard.prepend('<div class="product-card-right"></div>');
                    productCard.prepend('<div class="product-card-left"></div>');
                    $('.product-card-colors').each(function () {
                        $(this).appendTo($(this).siblings('.product-card-left'));
                    });
                    $('.product-card-img').each(function () {
                        $(this).appendTo($(this).siblings('.product-card-left'));
                    });
                    $('.bonus-wrap').each(function () {
                        $(this).appendTo($(this).parent().siblings('.product-card-left'));
                    });
                    $('.buy-terms-labels').each(function () {
                        $(this).appendTo($(this).parent().siblings('.product-card-left'));
                    });
                    $('.product-card-labels').each(function () {
                        $(this).appendTo($(this).siblings('.product-card-right'));
                    });
                    $('.product-card-title').each(function () {
                        $(this).appendTo($(this).siblings('.product-card-right'));
                    });
                    $('.product-price-panel').each(function () {
                        $(this).appendTo($(this).siblings('.product-card-right'));
                    });
                    $('.product-card-panel').each(function () {
                        $(this).appendTo($(this).siblings('.product-card-right'));
                    });
                    $('.card-chars-button').each(function () {
                        $(this).appendTo($(this).siblings('.product-card-right'));
                    });
                    $('.product-card-chars').each(function () {
                        $(this).appendTo($(this).siblings('.product-card-right'));
                    });
                }
            });
        } else if ($(this).parent().hasClass('tile')) {
            productCard.each(function () {
                if ($(this).find('.product-card-left').length || $(this).find('.product-card-right').length) {
                    productCard.removeClass('horizontal');
                    $('.product-card-colors').each(function () {
                        $(this).appendTo($(this).closest('.product-card'));
                    });
                    $('.product-card-labels').each(function () {
                        $(this).appendTo($(this).closest('.product-card'));
                    });
                    $('.product-card-img').each(function () {
                        $(this).appendTo($(this).closest('.product-card'));
                    });
                    $('.product-cart-title').each(function () {
                        $(this).appendTo($(this).closest('.product-card'));
                    });
                    $('.product-price-panel').each(function () {
                        $(this).appendTo($(this).closest('.product-card'));
                    });
                    $('.product-card-panel').each(function () {
                        $(this).appendTo($(this).closest('.product-card'));
                    });
                    $('.bonus-wrap').each(function () {
                        $(this).prependTo($(this).closest('.product-card').find('.product-card-panel'));
                    });
                    $('.buy-terms-labels').each(function () {
                        $(this).appendTo($(this).closest('.product-card').find('.product-card-panel'));
                    });
                    $('.card-chars-button').each(function () {
                        $(this).appendTo($(this).closest('.product-card'));
                    });
                    $('.product-card-chars').each(function () {
                        $(this).appendTo($(this).closest('.product-card'));
                    });
                    $(this).find('.product-card-left').remove();
                    $(this).find('.product-card-right').remove();
                }
            });
        }
    });

    $('.top-menu-drop-button').on('click', function () {
        $(this).toggleClass('active').siblings('.dropdown-cont').toggle('fast');
    });

});