/*
let width = $("body").width();

if (width > 992) {
    $(function () {
        $("#tabs-offer > li").first().addClass('active-offer');
        // $(".we-offer").hide().first().show();

        $(document).on('click', '#tabs-offer li', function (e) {
            let target = $(e.target).closest('li');

            target.addClass('active-offer').siblings().removeClass('active-offer');

            $(target.data('content')).show().siblings().hide();
        });
    });

    $(function () {
        $("#tabs-monet > div").first().addClass('active-monet');
        $(".monetization__bottom > div").hide().first().show();

        $(document).on('click', '#tabs-monet div', function (e) {
            let target = $(e.target).closest('div');

            target.addClass('active-monet').siblings().removeClass('active-monet');

            $(target.data('content')).show().siblings().hide();
        });
    });

    $(function () {
        $("#tabs-sol > div").first().addClass('active-sol');
        $(".solutions__bottom > div").hide().first().show();

        $(document).on('click', '#tabs-sol div', function (e) {
            let target = $(e.target).closest('div');

            target.addClass('active-sol').siblings().removeClass('active-sol');

            $(target.data('content')).show().siblings().hide();
        });
    });
}
/!*tabs-switch*!/


$('.home').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    dots: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: false
            }
        },
    ]
});
/!*slider1*!/

$('#slider2').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    dots: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: false,
                autoplay: false
            }
        },
    ]
});
/!*slider2*!/


if (width > 992) {
    let lastId,
        topMenu = $(".menu-list"),
        topMenuHeight = topMenu.outerHeight(),
        menuItems = topMenu.find(".a"),
        scrollItems = menuItems.map(function() {
            let item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    menuItems.click(function(e) {
        let href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight +35;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1000);
        e.preventDefault();
    });

    $(window).scroll(function() {
        let fromTop = $(this).scrollTop() + topMenuHeight;

        let cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        let id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active-scroll")
                .end().filter("[href='#" + id + "']").parent().addClass("active-scroll");
        }
    });
}
/!*menu-active_desktop*!/


$('.button-menu').on('click', function (e) {
    e.preventDefault();
    $('.header-box__nav').toggleClass('nav-active');
    $('.wrap').toggleClass('is-active');
});

$('.menu-list__item_link').on('click', function (e) {
    $('.header-box__nav').toggleClass('nav-active');
    $('.wrap').toggleClass('is-active');
});
/!*mobile-menu*!/

// if (width < 992) {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('.header-box').addClass('scroll-menu');
        } else {
            $('.header-box').removeClass('scroll-menu');
        }
    });
// }
/!*mobile-menu_background*!/


$(document).ready(function(){
    $(".logo-box, .scroll, .dots").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'), top = $(id).offset().top +10;
        $('body,html').animate({scrollTop: top}, 500);
    });
});
/!*smooth-scroll*!/

if (width < 992) {
    $(document).ready(function(){
        $(".menu-list-nav").on("click","a", function (event) {
            event.preventDefault();
            let id  = $(this).attr('href'), top = $(id).offset().top -90;
            $('body,html').animate({scrollTop: top}, 50);
        });
    });
}
/!*smooth-scroll_mobile*!/

// let postion = $('#we-offer').offset().top,
//     height = $('#we-offer').height();
// $(document).on('scroll', function (){
//     let scroll = $(document).scrollTop();
//     if(scroll  > postion && scroll < (postion + height) ) {
//         $('.menu-list__item_link').css({'color' : '#000000'});
//     }
// });


*/
