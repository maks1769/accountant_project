$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $('.header').addClass('scroll-menu');
    } else {
        $('.header').removeClass('scroll-menu');
    }
});

(function () {
    "use strict";

    let toggles = document.querySelectorAll(".wrap");

    for (let i = toggles.length - 1; i >= 0; i--) {
        let toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            this.classList.contains("is-active") === true ? this.classList.remove("is-active") : this.classList.add("is-active");
            document.querySelector('.nav').classList.contains("is-open") === true ? document.querySelector('.nav').classList.remove("is-open") : document.querySelector('.nav').classList.add("is-open");
            document.querySelector('.header').classList.contains("is-open") === true ? document.querySelector('.header').classList.remove("is-open") : document.querySelector('.header').classList.add("is-open");
        });
    }
})();

jQuery(document).ready(function($) {
    $(".label input").focus(function(){
        // $(this).parent().removeClass("round");
        $(this).parent().addClass("on-focus");

    })
});

let lastId,
    topMenu = $(".nav__list"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function() {
        let item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

menuItems.click(function(e) {
    let href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 700);
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
