import Splide from '@splidejs/splide';

import { queryElements } from '$utils/queryElements';

export const features2 = () => {
  // eslint-disable-next-line no-console
  console.log('features2');

  const attr = 'data-slider';
  const value = 'features2';

  const components = queryElements<HTMLDivElement>(`[${attr}=${value}]`);
  components.forEach((component) => {
    const slider = new Splide(component, {
      arrows: false,
      pagination: false,
      perPage: 1,
      gap: 'var(--style-page--gap)',
      width: '90%',
    });

    checkSplide();
    window.onresize = checkSplide;

    function checkSplide() {
      const mql = window.matchMedia('(max-width: 479px)');

      if (mql.matches) {
        slider.mount();
      } else {
        slider.destroy();
      }
    }
  });
};
