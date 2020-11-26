// import 'bootstrap';
import {sum} from './components/utils'

// import {devide} from './components/utils'

// console.log((sum(0.1,0.2)));

import customSelect from 'custom-select';
// import Swiper, { Navigation, Pagination } from 'swiper';

// Swiper.use([Navigation, Pagination]);

customSelect('select');

(function () {

    "use strict";

    let toggles = document.querySelectorAll(".wrap");

    for (let i = toggles.length - 1; i >= 0; i--) {
        let toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            this.classList.contains("is-active") === true ? this.classList.remove("is-active") : this.classList.add("is-active");
            document.querySelector('.nav').classList.contains("is-open") === true ? document.querySelector('.nav').classList.remove("is-open") : document.querySelector('.nav').classList.add("is-open");
        });
    }
})();

// let mySwiper1 = undefined;
//
// function initSwiper() {
//     let screenWidth = $(window).width();
//     if (screenWidth > 1200 && mySwiper1 === undefined) {
//         mySwiper1 = new Swiper('.first-slider', {
//             grabCursor: true,
//
//             breakpoints: {
//                 1260: {
//                     slidesPerView: 4,
//                     spaceBetween: 24,
//                 },
//                 1200: {
//                     slidesPerView: 3,
//                     spaceBetween: 24,
//                 },
//             },
//
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//         });
//         $('.first-slider').addClass('swiper-container');
//         $('.first-slider .catalog__list').addClass('swiper-wrapper');
//         $('.first-slider .catalog__list product-card').addClass('swiper-slide');
//     } else if (screenWidth < 1200 && mySwiper1 !== undefined) {
//         mySwiper1.destroy();
//         mySwiper1 = undefined;
//         $('.first-slider').removeClass('swiper-container');
//         $('.first-slider .catalog__list').removeClass('swiper-wrapper');
//         $('.first-slider .catalog__list product-card').removeClass('swiper-slide');
//     }
// }
//
// //Swiper plugin initialization
// initSwiper();
//
// //Swiper plugin initialization on window resize
// $(window).on('resize', function(){
//     initSwiper();
// });
//
//
// // slider 2
// let mySwiper2 = undefined;
//
// function initSwiper2() {
//     let screenWidth = $(window).width();
//     if (screenWidth > 1200 && mySwiper2 === undefined) {
//         mySwiper2 = new Swiper('.second-slider', {
//             grabCursor: true,
//
//             breakpoints: {
//                 1260: {
//                     slidesPerView: 2,
//                     spaceBetween: 10,
//                 },
//                 1200: {
//                     slidesPerView: 3,
//                     spaceBetween: 24,
//                 },
//             },
//             pagination: {
//                 el: '.swiper-pagination',
//             },
//         });
//         $('.second-slider').addClass('swiper-container');
//         $('.second-slider .catalog__list').addClass('swiper-wrapper');
//         $('.second-slider .catalog__list product-card').addClass('swiper-slide');
//     } else if (screenWidth < 1200 && mySwiper2 !== undefined) {
//         mySwiper2.destroy();
//         mySwiper2 = undefined;
//         $('.second-slider').removeClass('swiper-container');
//         $('.second-slider .catalog__list').removeClass('swiper-wrapper');
//         $('.second-slider .catalog__list product-card').removeClass('swiper-slide');
//     }
// }
//
// //Swiper plugin initialization
// initSwiper2();
//
// //Swiper plugin initialization on window resize
// $(window).on('resize', function(){
//     initSwiper2();
// });

$(document).ready(function(){
    $('.slider-1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: "unslick"
            },
        ]
    });

    $('.slider-2').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick"
            },
        ]
    });
});



