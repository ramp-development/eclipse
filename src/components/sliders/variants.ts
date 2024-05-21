import Splide from '@splidejs/splide';

import { queryElement } from '$utils/queryElement';

export const variants = () => {
  // eslint-disable-next-line no-console
  console.log('variants');

  const attr = 'data-slider';
  const value = 'variants';

  const variants = queryElement<HTMLDivElement>(`[${attr}=${value}]`);
  if (!variants) return;

  const slider = new Splide(variants, { arrows: false });

  checkSplide();
  window.onresize = checkSplide;

  function checkSplide() {
    const mql = window.matchMedia('(max-width: 767px)');

    if (mql.matches) {
      slider.mount();
    } else {
      slider.destroy();
    }
  }
};
