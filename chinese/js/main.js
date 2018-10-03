WebFont.load({
    google: {
        families: ['Source Sans Pro:300,400,600,700', 'Roboto Condensed:400,700', 'Anton']
    }
});

$(window).load(function() {

    var hash = window.location.hash;

    if (hash == '#luxury') {
        $('[data-box="#true3"]').trigger('click')
    } else if (hash == '#gateway') {
        $('[data-box="#true15"]').trigger('click');
    }

});

$(document).ready(function() {
    if ($('.hero-slider').length > 0) {
        var heroSlider = $('.hero-slider');
        heroSlider.bxSlider({
            auto: true,
            pager: false,
            useCSS: false,
            mode: 'fade',
            pause: 5000,
            speed: 600,
            controls: false
        });

        $('.destination-pager a').click(function(e) {
            e.preventDefault();
            $('.destination-pager li').removeClass('active');
            $(this).parent().addClass('active');
            $('.video-holder iframe').attr('src', $(this).attr('href'));
        });
    }


    // --------- YOUTUBE ----------- //
    $('#location-list a').click(function(e) {
        e.preventDefault();
        $('#location-list li').removeClass('active');
        $(this).parent().addClass('active');
        // var idName = $(this).parent().attr('id');
        // console.log(idName);
        $('.video-holder iframe').attr('src', $(this).attr('href'));

        // --------- BLURB ----------- //

        var idName = $(this).parent().attr('id');

        var idNameForBlurb = '#' + idName + '-blurb'
        // console.log(idNameForBlurb);
        $('.location-blurb').removeClass('active');
        $(idNameForBlurb).addClass('active');

        // --------- BG IMAGE CHANGE----------- //
        var imagePath = $(this).attr('data-image-path')
        var url = 'url(' + imagePath + ')';
        $('#section-hero-video-wrapper').css({ 'background-image': url });


        // --------- SVG ----------- //
        var groupTagString = '#g-' + idName;
        var dotTagString = groupTagString + '> circle';
        var ringTagString = groupTagString + '> path';
        $('g.each-location').removeClass('active');
        $(groupTagString).addClass('active');
    });



    $('#location-list a').mouseenter(function() {


        var idName = $(this).parent().attr('id');

        var groupTagString = '#g-' + idName;
        var dotTagString = groupTagString + '> circle';
        var ringTagString = groupTagString + '> path';

        var dot = $(dotTagString),
            ring = $(ringTagString);
        // console.log(dotTagString);

        var tl1 = new TimelineMax({ repeat: -1, yoyo: true });
        tl1.set(dotTagString, { transformOrigin: '50% 50%' });
        tl1.set(ringTagString, { css: { 'display': 'block' } });
        tl1.set(ringTagString, { transformOrigin: '50% 50%' });
        tl1.fromTo(dotTagString, 0.3, { scale: 0.4, opacity: 0.5 }, { scale: 1.5, opacity: 1 })
            .fromTo(ringTagString, 0.35, { scale: 0.7, opacity: 0.6 }, { scale: 1.2, opacity: 1 }, '-=0.2')


        $('#location-list a').mouseleave(function() {

            tl1.set(dotTagString, { opacity: 0.4, scale: 1 })
                .set(ringTagString, { css: { 'display': 'none' } });
            tl1.repeat(0).yoyo(false);
        })

    })



    var tlText = new TimelineMax({ repeat: -1, repeatDelay: 1, ease: Linear.easeNone });
    var textChangeDuration = 1;
    tlText.to("#animate-text", textChangeDuration, { text: "的探索" })
        .to("#animate-text", textChangeDuration, { text: "的发现" }, '+=2')
        .to("#animate-text", textChangeDuration, { text: "的旷野" }, '+=2')
        .to("#animate-text", textChangeDuration, { text: "的远行" }, '+=2')
        .to("#animate-text", textChangeDuration, { text: "的奢华" }, '+=2')
        .to("#animate-text", textChangeDuration, { text: "的挑战" }, '+=2')


    // Discover Button SCROLL

    $("#primary-button a").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#section-text").offset().top - 30
        }, 1000);
    });


    // #location-list a:hover {
    //     /*color: var(--pointblue);*/
    //     /*color:white !important;*/
    //     opacity:0.8;
    //     /*mix-blend-mode: normal;*/
    //     transform: translateX(40px);
    //     transition: transform .3s;
    // }



    // SVG CONTROL ADDED
    $('.each-location circle').mouseenter(function() {


        // var idName = $(this).parent().attr('id');

        // var groupTagString = '#' + idName;
        // var dotTagString = groupTagString + '> circle';
        // var ringTagString = groupTagString + '> path';

        // var dot = $(dotTagString),
        //     ring = $(ringTagString);


        // var tl1 = new TimelineMax({ repeat: -1, yoyo: true });
        // tl1.set(dotTagString, { transformOrigin: '50% 50%' });
        // tl1.set(ringTagString, { css: { 'display': 'block' } });
        // tl1.set(ringTagString, { transformOrigin: '50% 50%' });
        // tl1.fromTo(dotTagString, 0.3, { scale: 0.4, opacity: 0.5 }, { scale: 1.5, opacity: 1 })
        //     .fromTo(ringTagString, 0.35, { scale: 0.7, opacity: 0.6 }, { scale: 1.2, opacity: 1 }, '-=0.2')

        var idName = $(this).parent().attr('id');
        idName = idName.substring(2);
        console.log(idName);
        var hoverItem = '#' + idName + '>a';
        $(hoverItem).trigger('mouseenter').css({ 'transform': 'translateX(40px)', 'transition': 'transform .3s' })

        $('.each-location circle').mouseleave(function() {

            // tl1.set(dotTagString, { opacity: 0.4, scale: 1 })
            //     .set(ringTagString, { css: { 'display': 'none' } });
            // tl1.repeat(0).yoyo(false);
            $(hoverItem).trigger('mouseleave').css({ 'transform': 'translateX(0px)', 'transition': 'transform .3s' })
        })

    })

    $('.each-location circle').on('click', function() {
        var idName = $(this).parent().attr('id');
        idName = idName.substring(2);
        console.log(idName);
        var hoverItem = '#' + idName + '>a';
        $(hoverItem).trigger('click')
    })


    $('#location-list a').click(function(e) {
        e.preventDefault();



        var idName = $(this).parent().attr('id');

        var idNameForOption = '#o-' + idName;
        var valueSelected = $(idNameForOption).attr('value');
        $('#widget-dropdown').val(valueSelected);
        getWeatherAPI();
        $('#widget-dropdown').trigger('change');


        // $('#widget-dropdown option').css({'display':'none !important'})
        // $(idNameForOption).css({'display':'inline-block !important'};

    });

    $('#widget-dropdown').on('click', function(e) {
        e.preventDefault();
    });



    $('#banff-blurb .newLook-button a').on('click', function(e) {
        e.preventDefault();
        $('.g-box-close').trigger('click');
        $('html, body').animate({
            scrollTop: $("#row2").offset().top
        }, 700);
        $('#hotel-1').trigger('click');
        // $('#hotel-1').trigger('click');
    })
    $('#lake-louise-blurb .newLook-button a').on('click', function(e) {
        e.preventDefault();
        $('.g-box-close').trigger('click');
        $('html, body').animate({
            scrollTop: $("#row2").offset().top
        }, 700);
        $('#hotel-1').trigger('click');
        // $('#hotel-1').trigger('click');
    })
    $('#jasper-blurb .newLook-button a').on('click', function(e) {
        e.preventDefault();
        $('.g-box-close').trigger('click');
        $('html, body').animate({
            scrollTop: $("#row2").offset().top
        }, 700);
        // $('#hotel-1').trigger('click');
        $('#hotel-1').trigger('click');
    })
    $('#edmonton-blurb .newLook-button a').on('click', function(e) {
        e.preventDefault();
        $('.g-box-close').trigger('click');
        $('html, body').animate({
            scrollTop: $("#row8").offset().top
        }, 700);
        $('#hotel-2').trigger('click');
    })
    $('#calgary-blurb .newLook-button a').on('click', function(e) {
        e.preventDefault();
        $('.g-box-close').trigger('click');
        $('html, body').animate({
            scrollTop: $("#row8").offset().top
        }, 700);
        $('#hotel-2').trigger('click');
    })

});

// $(document).ready(function(){
// 	$('.g-box').click(function(e){
// 		e.preventDefault();
// 		console.log('hi');
// 	});
// 	$('#test3').trigger('click');
// });

//YOUTUBE API
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var playerDefaults = { playsinline: 1, autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3, mute: 0 };

// function onYouTubePlayerAPIReady() {
//     tv = new YT.Player('tv', { videoId: 'wGLjBZ0SCEc', events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }, playerVars: playerDefaults });
// }

function onYouTubePlayerAPIReady() { trueadrenaline = new YT.Player("trueadrenaline", { videoId: "Sh10z5h4lQk", playerVars: playerDefaults }), truediscovery = new YT.Player("truediscovery", { videoId: "Ufjy-n49e1g", playerVars: playerDefaults }), truewelcome = new YT.Player("truewelcome", { videoId: "y8W-DC9euIQ", playerVars: playerDefaults }), truepowder = new YT.Player("truepowder", { videoId: "hWWO4uAv3oU", playerVars: playerDefaults }), truecelebration = new YT.Player("truecelebration", { videoId: "moOmx-kV81A", playerVars: playerDefaults }), truethrills = new YT.Player("truethrills", { videoId: "SSkSZ1zDihY", playerVars: playerDefaults }), truefreedom = new YT.Player("truefreedom", { videoId: "pihGv4pJnU0", playerVars: playerDefaults }) }


//LAYOUT SWAP

var gallery = {

    init: function() {
        this.setRows();
    },
    getDisplay: function() {

        var hash, display;

        hash = window.location.hash;
        display = [{
                id: 1,
                expand: 2
            },
            {
                id: 2,
                expand: 1
            },
            {
                id: 3,
                expand: 2
            },
            {
                id: 4,
                expand: 1
            },
            {
                id: 5,
                expand: null
            },
            {
                id: 6,
                expand: 1
            },
            {
                id: 7,
                expand: 2
            },
            {
                id: 8,
                expand: 1
            },
            {
                id: 9,
                expand: 2
            },
            {
                id: 10,
                expand: null
            }
        ];

        if (hash != 'undefined') {
            if (hash == '#ski') {
                display = [{
                        id: 3,
                        expand: 2
                    },
                    {
                        id: 2,
                        expand: 2
                    },
                    {
                        id: 9,
                        expand: 3
                    },
                    {
                        id: 7,
                        expand: 2
                    },
                    {
                        id: 5,
                        expand: null
                    },
                    {
                        id: 1,
                        expand: 2
                    },
                    {
                        id: 6,
                        expand: 1
                    },
                    {
                        id: 8,
                        expand: 2
                    },
                    {
                        id: 4,
                        expand: 1
                    },
                    {
                        id: 10,
                        expand: null
                    }
                ];
            } else if (hash == '#activities') {
                display = [{
                        id: 6,
                        expand: 1
                    },
                    {
                        id: 8,
                        expand: 2
                    },
                    {
                        id: 2,
                        expand: 1
                    },
                    {
                        id: 7,
                        expand: 1
                    },
                    {
                        id: 5,
                        expand: null
                    },
                    {
                        id: 3,
                        expand: 3
                    },
                    {
                        id: 4,
                        expand: 2
                    },
                    {
                        id: 9,
                        expand: 3
                    },
                    {
                        id: 1,
                        expand: 1
                    },
                    {
                        id: 10,
                        expand: null
                    }
                ];
            } else if (hash == '#jasper') {
                display = [{
                        id: 2,
                        expand: 1
                    },
                    {
                        id: 3,
                        expand: 2
                    },
                    {
                        id: 7,
                        expand: 1
                    },
                    {
                        id: 8,
                        expand: 2
                    },
                    {
                        id: 5,
                        expand: null
                    },
                    {
                        id: 9,
                        expand: 1
                    },
                    {
                        id: 6,
                        expand: 2
                    },
                    {
                        id: 4,
                        expand: 1
                    },
                    {
                        id: 1,
                        expand: 2
                    },
                    {
                        id: 10,
                        expand: null
                    }
                ];
            } else if (hash == '#banfflakelouise') {
                display = [{
                        id: 4,
                        expand: 1
                    },
                    {
                        id: 3,
                        expand: 3
                    },
                    {
                        id: 2,
                        expand: 2
                    },
                    {
                        id: 1,
                        expand: 1
                    },
                    {
                        id: 5,
                        expand: null
                    },
                    {
                        id: 7,
                        expand: 2
                    },
                    {
                        id: 9,
                        expand: 3
                    },
                    {
                        id: 6,
                        expand: 2
                    },
                    {
                        id: 8,
                        expand: 1
                    },
                    {
                        id: 10,
                        expand: null
                    }
                ];
            }
        }

        return display;
    },
    getRows: function() {

        var display, rows, row, next, element, bigElement, count, contracted, expanded;

        display = this.getDisplay();
        rows = [];

        $.each(display, function(key, value) {

            row = $('#row' + value.id);

            element = row.find('.g-box');
            bigElement = element.eq(value.expand - 1);
            if (key != (display.length - 1)) {
                next = display[key + 1].id;
            }
            count = element.length;

            if (count == 2) {
                contracted = 'g-box-33';
                expanded = 'g-box-66 is-opened visible';
            } else if (count == 3) {
                contracted = 'g-box-15';
                expanded = 'g-box-56 is-opened visible';
            }

            element.attr('data-next-row', '#row' + next);
            element.not(bigElement).addClass(contracted);
            bigElement.addClass(expanded);

            rows.push(row);
        });

        return rows;
    },
    setRows: function() {

        var rows, element;
        rows = this.getRows();
        container = $('.gallery-images .container');

        $('.g-box-wrap').remove();

        $.each(rows, function(key, value) {
            container.append(value);
        });

    }
}

gallery.init();

var trueNorth = {
    init: function() {
        this.cacheDom();
        this.windowWidth();
        this.isDevice();
        this.boxNotExpanded();
        this.rowCollapseAll();
        this.rowCollapse();
        this.rowPushed();
        this.boxHover();
        this.bindEvents();
    },
    cacheDom: function() {
        this.$win = $(window);
        this.gBox = $('.g-box');
        this.close = $('.g-box-close');
        this.gBoxWrap = $('.g-box-wrap');
        this.image = $('.thumb-wrap img');
    },
    //check window width
    windowWidth: function(winW) {
        return winW || this.$win.width();
    },
    // check for device
    isDevice: function() {
        if (this.windowWidth() > 640) {
            return "desktop";
        } else {
            return "mobile";
        }
    },
    boxNotExpanded: function(box) {
        return $(box).is(":not(:visible)");
    },
    boxHover: function($thisDiv) {
        if ($thisDiv) {
            var animated = false;
            if ($thisDiv.hasClass('g-box-3-anim')) {
                if (!$thisDiv.hasClass('g-box-56')) {
                    $thisDiv.removeClass('g-box-15').addClass('g-box-56 is-opened').siblings().removeClass('g-box-56 is-opened').addClass('g-box-15');
                    animated = true;
                }

                if (animated) {
                    $('.is-opened').one("otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
                        $thisDiv.addClass('visible').siblings('.g-box').removeClass('visible');
                        animated = false;
                    });
                }
            } else if ($thisDiv.hasClass('g-box-2-anim')) {
                if (!$thisDiv.hasClass('g-box-66')) {
                    $thisDiv.removeClass('g-box-33').addClass('g-box-66 is-opened').siblings().removeClass('g-box-66 is-opened').addClass('g-box-33');
                    animated = true;
                }

                if (animated) {
                    $('.is-opened').one("otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
                        $thisDiv.addClass('visible').siblings('.g-box').removeClass('visible');
                        animated = false;
                    });
                }
            }
        }
    },
    rowCollapseAll: function() {
        $('.pushed').animate({ 'margin-top': 0 }, 300).removeClass('pushed');
    },
    rowCollapse: function(nextRow) {
        this.gBoxWrap.not(nextRow).animate({ 'margin-top': 0 }, 300).removeClass('pushed');
    },
    rowPushed: function(nextRow, boxHeight) {
        //if(!$(nextRow).hasClass('pushed')) {
        $(nextRow).animate({
            'margin-top': boxHeight
        }, 300).addClass('pushed');
        //}
    },
    boxClose: function() {
        $('.g-box').removeClass('collapsed');
        $('.expanded-row').slideUp().removeClass("is-expanded");
        this.rowCollapseAll();
    },

    boxAnimation: function(box, boxHeight, row, nextRow, $thisDiv) {
        if (this.isDevice() == "desktop") {
            this.rowPushed(nextRow, boxHeight);
            this.rowCollapse(nextRow);
        }
        if ($(".is-expanded").find('#trueadrenaline').length > 0) {
            trueadrenaline.stopVideo();
        } else if ($(".is-expanded").find('#truediscovery').length > 0) {
            truediscovery.stopVideo();
        } else if ($(".is-expanded").find('#truewelcome').length > 0) {
            truewelcome.stopVideo();
        } else if ($(".is-expanded").find('#truepowder').length > 0) {
            truepowder.stopVideo();
        } else if ($(".is-expanded").find('#truecelebration').length > 0) {
            truecelebration.stopVideo();
        } else if ($(".is-expanded").find('#truethrills').length > 0) {
            truethrills.stopVideo();
        } else if ($(".is-expanded").find('#truefreedom').length > 0) {
            truefreedom.stopVideo();
        }
        $(".is-expanded").slideUp().removeClass("is-expanded");
        $(box).slideDown(400, function() {
            $expanded_content = $thisDiv.find('.expanded-row.is-expanded');
            window_height = $(window).height() / 2;
            content_height = $expanded_content.height() / 2;
            $('html, body').animate({
                scrollTop: $expanded_content.offset().top - window_height + content_height - 48
            }, 200);
        }).addClass('is-expanded');
        $('.collapsed').removeClass('collapsed');
        $thisDiv.addClass('collapsed');
    },

    bindEvents: function() {
        var thisObj = this;
        this.gBox.on("click", function(e) {
            e.stopPropagation();
            var $this = $(this);
            var box = $this.attr('data-box');
            var row = $this.attr('data-row');
            var nextRow = $(this).attr('data-next-row');
            var boxHeight = $(box).outerHeight(true);

            if (thisObj.boxNotExpanded(box)) {

                var nameOfMasonryOpened = $(this).attr('id');
        
                gtag('event', 'Masonry Click', { 
                    'event_category': 'Drop Down',
                    'event_label': nameOfMasonryOpened });

                thisObj.boxAnimation(box, boxHeight, row, nextRow, $this);
                if ($this.find('#trueadrenaline').length > 0) {
                    trueadrenaline.playVideo();
                } else if ($this.find('#truediscovery').length > 0) {
                    truediscovery.playVideo();
                } else if ($this.find('#truewelcome').length > 0) {
                    truewelcome.playVideo();
                } else if ($this.find('#truepowder').length > 0) {
                    truepowder.playVideo();
                } else if ($this.find('#truecelebration').length > 0) {
                    truecelebration.playVideo();
                } else if ($this.find('#truethrills').length > 0) {
                    truethrills.playVideo();
                } else if ($this.find('#truefreedom').length > 0) {
                    truefreedom.playVideo();
                }
            } else {
                //feature to close box on click
                $(".g-box .is-expanded").slideUp().removeClass("is-expanded");
                $('.collapsed').removeClass('collapsed');
                $('.g-box').removeClass('is-opened');
                $(nextRow).animate({ 'margin-top': 0 }, 300).removeClass('pushed');
                if ($this.find('#trueadrenaline').length > 0) {
                    trueadrenaline.stopVideo();
                } else if ($this.find('#truediscovery').length > 0) {
                    truediscovery.stopVideo();
                } else if ($this.find('#truewelcome').length > 0) {
                    truewelcome.stopVideo();
                } else if ($this.find('#truepowder').length > 0) {
                    truepowder.stopVideo();
                } else if ($this.find('#truecelebration').length > 0) {
                    truecelebration.stopVideo();
                } else if ($this.find('#truethrills').length > 0) {
                    truethrills.stopVideo();
                } else if ($this.find('#truefreedom').length > 0) {
                    truefreedom.stopVideo();
                }
            }



        });
        this.close.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            var $this = $(this).closest('.g-box');
            var box = $this.attr('data-box');
            var nextRow = $this.attr('data-next-row');
            thisObj.boxClose(box, nextRow, $this);
        });
        this.gBox.on("mouseover", function() {
            var $this = $(this);
            thisObj.boxHover($this);
        });
    }
};
trueNorth.init();

function getWeatherAPI(lat, lon) {
    if (lat && lon) {
        var lat = lat;
        var lon = lon;
    } else {
        var lon = $('#widget-dropdown option:selected').attr('data-lon');
        var lat = $('#widget-dropdown option:selected').attr('data-lat');
    }

    $.getJSON("https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&cnt=3&units=imperial&APPID=9565d945f092a26dc4e4d75861760136", function(data) {

        var items = [data];
        var weatherList = items[0].list;


        for (var i = 0; i < weatherList.length; i++) {

            var weather_icon = weatherList[i].weather[0].icon;
            $('#widget' + i).find('img').attr('src', 'images/weather_icons/' + weather_icon + '.svg');

            $('#widget' + i).find('.min').text(Math.floor(weatherList[i].temp.min));
            $('#widget' + i).find('.max').text(Math.floor(weatherList[i].temp.max));
            if (i > 0) {
                var d = new Date();
                d.setDate(d.getDate() + i);
                var d_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                $('#widget' + i).find('.text-upper').text(d_names[d.getDay()]);
            }

        }
    }).fail(function() {
        console.log(data);
    });
}
$(document).ready(function() {


    getWeatherAPI();

    $('#widget-dropdown').on('change', function() {

        var lon = $('#widget-dropdown option:selected').attr('data-lon');
        var lat = $('#widget-dropdown option:selected').attr('data-lat');
        getWeatherAPI(lat, lon);


    });


    $(window).resize(function() {
        trueNorth.boxClose();
    });


    var $winW = $(window).width();

    //JCF Custom Forms
    jcf.replaceAll();

    //Tab panel
    $('.tab-wrap .select-tab li a').on('click', function(e) {
        e.preventDefault();
        var currentTab = $(this).attr('href');
        //console.log(currentTab);
        $('.tab-wrap ' + currentTab).fadeIn(800).siblings().hide();
        $(this).addClass('active');
        $('.select-tab li a').not(this).removeClass('active');
    });

    //Scroll to top
    $('.scroll-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1200);
    });

    //Smooth Scroll
    if ($(window).height() <= 900) {
        smoothScroll.init({
            offset: -250
        });
    } else {
        smoothScroll.init();
    }

    $('form#subscribe').submit(function(e) {
        $(this).find('.error').empty();
        return e.preventDefault();
    });
    if ($('form#subscribe').length > 0) {
        $('form#subscribe').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                chk1: {
                    required: true
                }
            },
            messages: {
                email: {
                    required: "Please enter an email address to subscribe."
                },
                chk1: "Please select this checkbox to subscribe."
            },
            errorPlacement: function($error, $element) {
                $('form#subscribe .error' + $element.attr('name')).html($error.text());
            },
            submitHandler: function(form) {
                var _this, email, post;
                _this = $('form#subscribe');
                email = _this.find('[name="email"]').val();
                post = $.post(_this.attr('action'), {
                    email: email
                });
                return post.done(function(data) {
                    $('form#subscribe .confirm-text').hide();
                    $('form#subscribe .error-text').hide();
                    if (data === 'subscribed' || data === 'pending') {
                        $('form#subscribe .confirm-text').show();
                    } else {
                        $('form#subscribe .error-text').show();
                    }
                });
            }
        });
    }

    link = 'http://truenorthrockies.com';

    facebook = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(link);
    $('.share.facebook').click(function(e) {
        e.preventDefault();
        return popUp(facebook);
    });
    twitter = 'https://twitter.com/home?status=' + encodeURI(link);
    $('.share.twitter').click(function(e) {
        e.preventDefault();
        return popUp(twitter);
    });

    popUp = function(link) {
        return window.open(link, '_blank', 'toolbar=no,scrollbars=no,resizable=no,top=0,right=0,width=600,height=400');
    };


    var lightbox_options = {
        centered: true
    }

    $('a.privacy-policy').click(function(e) {
        e.preventDefault();
        $('.lightbox.privacy-policy').lightbox_me(lightbox_options);
    });

    $('a.terms-conditions').click(function(e) {
        e.preventDefault();
        $('.lightbox.terms-conditions').lightbox_me(lightbox_options);
    });

    $('a.instagram-contest').click(function(e) {
        e.preventDefault();
        $('.lightbox.instagram-contest').lightbox_me(lightbox_options);
    });

    $('.lightbox .fa-stack').click(function() {
        $('.lightbox').trigger('close');
    });

    //Scroll to position
    $(".header-menu li a, .camera-enter a, .hero-btn").not('.no-js').on('click', function(e) {
        e.preventDefault();
        var box = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(box).offset().top - 48
        }, 2000);
    });



});

function urlExists(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.status < 400 && xhr.status != 0);
        }
    };
    xhr.open('HEAD', url);
    xhr.send();
}

// urlExists('https://scontent.cdninstagram.com/vp/62f681563bcb93022a0f500633af3617/5AC318D1/t51.2885-15/e15/p640x640/29095956_123247181853952_6374021983146868736_n.jpg', function(exists) {
//     console.log('"%s" exists?', 'https://scontent.cdninstagram.com/vp/62f681563bcb93022a0f500633af3617/5AC318D1/t51.2885-15/e15/p640x640/29095956_123247181853952_6374021983146868736_n.jpg', exists);
//     if(!exists){
//     	_this.hide();
//     }
// });

// urlExists('https://scontent.cdninstagram.com/vp/64bf7c7b031e936768c39d709c54707a/5B7145B5/t51.2885-15/s640x640/sh0.08/e35/29094311_1786090081435291_7391701148060614656_n.jpg', function(exists) {
//     console.log('"%s" exists?', 'https://scontent.cdninstagram.com/vp/64bf7c7b031e936768c39d709c54707a/5B7145B5/t51.2885-15/s640x640/sh0.08/e35/29094311_1786090081435291_7391701148060614656_n.jpg', exists);
//     if(!exists){
//     	_this.hide();
//     }
// });

//INSTAGRAM CUSTOMIZATION
var images = [];
var initFeed = function() {
    $('.juicer-feed .feed-item').each(function(key, value) {
        var _this, image, video;
        _this = $(this).find('.j-image');
        _parent = _this.parent();
        if (_this.attr('href').indexOf('juicer') == -1) {
            if (_this.attr('data-video-url').indexOf('.mp4') > -1) {
                video = _this.attr('data-video-url');
            }
            image = {
                'src': _this.attr('data-image'),
                'url': _this.attr('href'),
                'video': video,
                'content': _parent.find('.j-message').html(),
                'likes': _parent.find('.heart').text(),
                'comments': _parent.find('.comments').text()
            }
            images.push(image);
        }
    });
    var instawrapper = $('#instafeed .instawrapper');
    $.when.apply($, images.map(function(item) {

        var div = $('<div class="item"></div>')

        instawrapper.append(div);

        div.append('<img src="' + item.src + '" class="img">');

        if (item.video != undefined) {
            div.append('<span class="fa-stack fa-2x"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-play fa-stack-1x"></i></span>');
        }

        div.append('<div class="overlay" data-url="' + item.url + '">\
					<div class="content">' + item.content + '</div>\
					<div class="meta"><ul><li><a href="' + item.url + '" target="_blank"><i class="fa fa-heart" aria-hidden="true"></i> ' + item.likes + '</a> <a href="' + item.url + '" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i> ' + item.comments + '</a></li><li><a href="' + item.url + '" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li></ul></div>\
				</div>');
    })).then(function() {
        instawrapper.imagesLoaded(function() {

            var height = instawrapper.find('.item').first().height();
            //console.log(height);
            instawrapper.find('.item').height(height);

            jQuery('#instafeed').html(jQuery('.instawrapper').html());

            var instafeed = jQuery('#instafeed');
            instafeed.isotope({
                itemSelector: '.item',
                layoutMode: 'packery'
            });

            jQuery('#instafeed').find('.overlay').click(function() {
                window.open(jQuery(this).attr('data-url'));
            });

            //var i = 1;
            jQuery('#instafeed .item').each(function(key, value) {
                var _this = jQuery(this);
                var src = _this.find('.img').attr('src');

                //console.log(src);

                urlExists(src, function(exists) {
                    //console.log('"%s" exists?', src, exists);
                    //i++;
                    //var z[key] = i;
                    //var phat = instafeed.find('.item').eq(5).css('width','33.33333333333333%').isotope('layout');
                    if (!exists) {
                        //_this.hide();
                        instafeed.isotope('remove', _this).isotope('layout');
                    }
                });
            });

        });
    });
}

/********************************** NEW JS *******************************************************/
$('.menu-button').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header-menu').slideToggle();
});


$('.show-widget').on('click', function(e) {
    e.preventDefault();
    $('.weather-widget').slideDown();
    $('.widget-overlay').show();
});
$('.widget-overlay').on('click', function(e) {
    $(this).hide();
    $('.weather-widget').slideUp();
});


function showBackToTopArrow() {
    var windowScroll = jQuery(window).scrollTop();
    var heroHeight = $('.hero').outerHeight();
    var arrowTop = $('.scroll-top')
    if (windowScroll > heroHeight) {
        arrowTop.addClass('show-arrow');
    } else {
        arrowTop.removeClass('show-arrow');
    }
}
showBackToTopArrow();
$(window).on('scroll', function() {
    showBackToTopArrow();
});