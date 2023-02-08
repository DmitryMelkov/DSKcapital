import * as flsFunctions from './modules/functionsWebP.js';
import { tabBtnSwiper, tabContentSwiper } from './modules/tab-swiper.js';
import { tabNav } from './modules/tabs.js';

flsFunctions.isWeb();

tabNav();
tabContentSwiper();
tabBtnSwiper();

const input = document.querySelector('.product__basket-input-js');
const btnPlus = document.querySelector('.product__basket-plus');
const btnMinus = document.querySelector('.product__basket-minus');

btnPlus.addEventListener('click', () => {
  input.value = Number(input.value) + 1;
});

btnMinus.addEventListener('click', () => {
  input.value = Number(input.value) - 1;
});
