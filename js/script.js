const swiper = new Swiper('.swiper-filters', {
    direction: 'horizontal',
    slidesPerView: "auto",
    effect: 'slide',
    grabCursor: true,
});

const swiper2 = new Swiper('.swiper-featured-artworks', {
    direction: 'horizontal',
    slidesPerView: 2.5,
    effect: 'slide',
    grabCursor: true,
    spaceBetween: 1,
});

const swiper3 = new Swiper('.swiper-screenshots', {
    direction: 'horizontal',
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            centeredSlides: true,
        },

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.querySelectorAll('.swiper-container').forEach(container => {
    container.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
});