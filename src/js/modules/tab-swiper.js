import Swiper, { Pagination } from 'swiper';

export const tabContentSwiper = () => {
  const contentSwiper = document.querySelector('.product__content-swiper');
  var swiper = new Swiper(contentSwiper, {
    modules: [Pagination],
    pagination: {
      el: '.tab-content-pagination',
      clickable: true,
    },
  });
};

export const tabBtnSwiper = () => {
  const btnSwiper = document.querySelector('.product__btn-swiper');
  var swiper = new Swiper(btnSwiper, {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 10,
  });
};
