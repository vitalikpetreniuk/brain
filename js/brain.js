$(function(){

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

    $('.br-ssilder').owlCarousel({
        margin:30,
        nav:true,
        loop: true,
        responsive:{
            0:{
                autoWidth: false,
                items:1
            },
            480:{
                autoWidth: true
            }
        }
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

    $(window).on("load resize", function () {
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

    $('.br-bh-menu-top > ul > li').mouseenter(function(){
        $('.br-bh-menu-top').addClass('active');
        $('.br-bheader').addClass('active');
        $('.br-shadow-in').show();
    }).mouseleave(function(){
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

    $('.br-bh-menu-top > ul > li > ul > li > ul').mouseenter(function(){
        var testIndex = $('.br-bh-menu-top > ul > li > ul > li > ul').index(this);
        $('.br-mbm-imgs img').removeClass('active').eq(testIndex).addClass('active');
    });

    if($('.br-scroll').length)
    {
        $(".br-scroll").scrollbar({
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

    if($('.tooltip').length)
    {
        $('.tooltip').tooltipster({
            theme: 'tooltipster-noir',
            side: 'right'
        });
    }

    $('.br-bh-menu-top > ul > li > ul > li:first-child').each(function () {
        var iSize = $(this).children().size();

        if(iSize < 6)
        {
            $(this).siblings('.br-mbm-imgs').hide();
            $(this).addClass('active');
        }
    });

    if($('.br-pcode').length)
    {

        var clipboard = new Clipboard('.br-pcode');
    }

    if($('.br-sfixed').length)
    {
        var a = document.querySelector('.br-sfixed'), b = null, P = 0;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
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
            if ((Ra.top - 120) <= 0) {
                if ((Ra.top - 120) <= R) {
                    b.className = 'stop';
                    b.style.top = - R +'px';
                } else {
                    b.className = 'sticky';
                    b.style.top = 120 + 'px';
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

    if($('.br-accordion').length)
    {
        $('.br-accordion > ul').dcAccordion({
            speed: 'fast',
            menuClose: true
        });
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
        }).on('ifUnchecked',function(){
            $(this).closest('.br-fsquare').removeClass('active');
        });

        $('.br-pm4 .br-ch-radio').on('ifChecked',function(){
            $('.ch-hidden-block').show();
            $('.br-chdo-s2').hide();
            $('.br-chdo-s3').hide();
            $('.br-chdo-s4').addClass('hidden');
            $('.ch-next-f').hide();
            $('.ch-next-s').show();
            $('#br-ch-5').addClass('br-ch-changed');
            $('.br-chdo-s1').show();
            $('.br-ch-mspec').show();
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
            $('.ch-next-s').hide();
            $('.ch-next-f').show();
            $('.be-chm6').on('click', function () {
                $('#br-ch-6').removeClass('super-active');
            });
        });

        $('.br-pm3 .br-ch-radio').on('ifChecked',function(){
            $('.ch-hidden-block').show();
            $('.br-chdo-s1').hide().addClass('hidden');
            $('.br-chdo-s2').addClass('hidden');
            $('.br-chdo-s3').addClass('hidden');
            $('.ch-next-f').hide();
            $('.ch-next-s').show();
            $('#br-ch-5').addClass('br-ch-changed');
            $('.br-chdo-s4').show();
            $('.br-ch-mspec').show();
            $('.be-chm5').on('click', function () {
                $('#br-ch-5').addClass('super-active');
            });
            $('.be-chm6').on('click', function () {
                $('#br-ch-6').addClass('super-active');
            });
        }).on('ifUnchecked',function(){
            $('.ch-hidden-block').hide();
            $('.br-chdo-s1').removeClass('hidden');
            $('.br-chdo-s2').removeClass('hidden');
            $('.br-chdo-s3').removeClass('hidden');
            $('#br-ch-5').removeClass('br-ch-changed');
            $('.br-chdo-s4').hide();
            $('.br-ch-mspec').hide();
            $('.ch-next-s').hide();
            $('.ch-next-f').show();
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

    $('.br-banner-slider').owlCarousel({
        items: 1,
        nav: true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true
    });

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

    $('.br-o-filter').on('click', function(){
        $('.br-sidebar').toggle('fast');
        $('.br-ssend').toggleClass('active');
    });

    $('.br-cs-sidebar').on('click', function(){
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

    $('.br-ch-app').on('click', function(){
        $(this).toggleClass('active');
        $('.br-ds-bs').toggle('fast');
    });

    $('.br-ci-set .br-ci-name button').on('click', function(){
        $(this).toggleClass('active');
        $('.br-ci-set-in').toggle('fast');
    });

    $('.br-order-call > div:first-child button').on('click', function(){
        $(this).toggleClass('active');
        $('.br-oc-dropdown').toggle('fast');
    });

    $('.br-oc-dropdown button').on('click', function(){
        $('.br-oc-dropdown').toggle('fast');
    });

    $('.br-bbb-f').on('click', function(){
        $(this).hide();
        $(this).siblings('.br-bbb-s').show().addClass('active');
    });

    $('.br-show-c').on('click', function(){
        $('.br-sib-c').toggleClass('active');
    });

    $('.br-dt-p').on('click', function(){
        $('.br-checkout-modal .br-dt-abs').toggle('fast');
    });

    $('.br-addc-o').on('click', function(){
        $(this).closest('.br-ch-oblock').siblings('.br-ch-comment').toggle('fast');
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
    });

    $('.br-sort-menu-fixed button').on('click', function(){
        $('.br-sort-menu-fixed').toggleClass('active');
    });

    $('.br-th-login button').on('click', function(){
        $(this).toggleClass('open');
        $(this).siblings().toggle('fast');
    });

    $('.br-theader-menu .folder button').on('click', function(){
        $(this).parent().toggleClass('active');
        $(this).siblings().toggle('fast');
    });

    $('.br-chc button').on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings().toggle('fast');
    });

    $('.br-ch-ajp button').on('click', function(){
        $('.br-chdo-s1').hide();
        $('.br-chdo-s2').show();
    });

    $('.br-chdo-s2 .text-center button:first-child').on('click', function(){
        $(this).hide();
        $('.br-ch-addj').hide();
        $('.br-chdo-s2 .text-center button:last-child').show();
        $('.br-ch-addjs').show();
    });

    $('.br-chdo-s2 .text-center button:last-child').on('click', function(){
        $('.br-chdo-s2').hide();
        $('.br-chdo-s3').show();
    });

    $('.br-ch-dc > div:nth-child(2) button:last-child').on('click', function(){
        $('.br-chdo-s2').show();
        $('.br-chdo-s3').hide();
        $('.br-ch-addj').show();
        $('.br-chdo-s2 .text-center button:last-child').hide();
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
            $(".br-order-call button.active").trigger('click');
        }
    });

    $('.br-q-checkout').on('click', function(){
        $(this).parent().toggleClass('active');
        $(this).parent().siblings('.br-c-confirm').toggle('fast');
        $(this).siblings('.br-checkout').toggle('fast');
    });

    $('.br-c-confirm button').on('click', function(){
        $(this).parent('.br-c-confirm').slideUp('fast');
        $(this).closest('form').find('.br-checkout').toggle('fast');
        $(this).closest('form').find('.br-c-checkouts').toggleClass('active');
    });

    $('.br-alert button').on('click', function(){
        $('.br-alert').slideUp('fast');
    });

    $('.modal .close').on('click', function(){
        $(this).closest('.modal').find('.br-c-confirm').hide();
        $(this).closest('.modal').find('.br-cities-ms').hide();
        $(this).closest('.modal').find('.br-checkout').show();
        $(this).closest('.br-checkout-modal').find('.br-dt-abs').hide();
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

    $('.br-checkout-modal .br-dt-yc button').on('click', function(){
        $('.br-cities-ms').toggle('fast');
    });

    $('.br-ps-block .br-dt-yc button').on('click', function(){
        $('.br-cities-ms').toggle('fast');
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

    var hHeight = $('header').height();

    var pHeight = 85;

    $(window).on('scroll', function(){

        if($(window).width() < 1011)
        {
            pHeight = 40;
        }
        else
        {
            pHeight = 85;
        }

        var wHeight = $(window).height();

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

        var aHeight = $('.br-alert').height();

        if($('.br-alert').is(":visible"))
        {
            if ($(window).scrollTop() >= hHeight)
            {
                $('.br-theader').hide();
                $('.br-bh-menu-top').addClass('hiddenm').removeClass('showd');
                $('.br-fmenu-button').show();
                $('.br-hidden').removeClass('hidden');
                $('.br-bheader-in').addClass('active');
                $('.br-ceader-in').addClass('active');
                $('.br-alert').addClass('invisible');
                $('body').css('padding-top', hHeight + pHeight);
                $('.br-body-p').css('padding-top', hHeight);
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
        else
        {
            if ($(window).scrollTop() >= hHeight - 44)
            {
                $('.br-theader').hide();
                $('.br-bh-menu-top').addClass('hiddenm').removeClass('showd');
                $('.br-fmenu-button').show();
                $('.br-hidden').removeClass('hidden');
                $('.br-bheader-in').addClass('active');
                $('.br-ceader-in').addClass('active');
                $('.br-alert').addClass('invisible');
                $('body').css('padding-top', hHeight + pHeight);
                $('.br-body-p').css('padding-top', hHeight);
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
    });

    $('.br-ch-menu ul button').on('click', function () {
        $('.br-ch-menu').removeClass('active');
        $('.br-ch-fixed').removeClass('active');
        $('.br-ch-anchor').removeClass('active').removeClass('super-active');
        $('.br-ch-alast').removeClass('active');
    });

    $('.br-ch-menu > div button').on('click', function () {
        $('.br-ch-menu').removeClass('active');
        $('.br-ch-fixed').removeClass('active');
    });

    $('.be-chm1').on('click', function () {
        $('#br-ch-1').addClass('active');
    });

    $('.be-chm2').on('click', function () {
        $('#br-ch-2').addClass('active');
    });

    $('.be-chm3').on('click', function () {
        $('#br-ch-3').addClass('active');
    });

    $('.be-chm4').on('click', function () {
        $('#br-ch-4').addClass('active');
    });

    $('.be-chm5').on('click', function () {
        $('#br-ch-5').addClass('active');
    });

    $('.be-chm6').on('click', function () {
        $('.br-ch-alast').addClass('active');
    });


});