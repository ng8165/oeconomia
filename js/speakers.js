const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    speed: 250,
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        2500: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});