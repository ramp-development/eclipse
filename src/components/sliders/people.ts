import Splide from '@splidejs/splide';

import { queryElements } from '$utils/queryElements';

export const people = () => {
  // eslint-disable-next-line no-console
  console.log('people');

  const attr = 'data-slider';
  const value = 'people';

  const components = queryElements<HTMLDivElement>(`[${attr}=${value}]`);
  components.forEach((component) => {
    const slider = new Splide(component, {
      arrows: false,
      pagination: false,
      // perPage: 1,
      gap: 'calc(var(--style-page--gap) * 2)',
      fixedWidth: '40%',
      breakpoints: {
        991: { fixedWidth: '80%', gap: 'var(--style-page--gap)' },
        // 767: { fixedWidth: '80%' },
        // 479: { fixedWidth: '80%' },
      },
    });

    slider.mount();

    // checkSplide();
    // window.onresize = checkSplide;

    // function checkSplide() {
    //   const mql = window.matchMedia('(max-width: 479px)');

    //   if (mql.matches) {
    //     slider.mount();
    //   } else {
    //     slider.destroy();
    //   }
    // }
  });
};
