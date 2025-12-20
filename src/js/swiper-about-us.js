const SwiperContainer =
  document.querySelector('.about-us-slider .mySwiper') ||
  document.querySelector('.mySwiper');

if (SwiperContainer) {
  Promise.all([
    import('swiper').then(m => m.default),
    import('swiper/modules').then(m => ({
      Navigation: m.Navigation,
      Pagination: m.Pagination,
      Keyboard: m.Keyboard,
    })),
    import('swiper/css'),
    import('swiper/css/navigation'),
    import('swiper/css/pagination'),
  ])
    .then(([Swiper, modules]) => {
      new Swiper(SwiperContainer, {
        modules: [modules.Navigation, modules.Pagination, modules.Keyboard],
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 700,
        keyboard: {
          enabled: true,
        },
        pagination: {
          el: '.about-us-slider .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.about-us-slider .swiper-button-next',
          prevEl: '.about-us-slider .swiper-button-prev',
        },
      });
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Failed to load Swiper', err);
    });
}
