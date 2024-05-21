import Splide from '@splidejs/splide';

import { queryElements } from '$utils/queryElements';

export const thirds = () => {
  // eslint-disable-next-line no-console
  console.log('thirds');

  const attr = 'data-slider';
  const value = 'thirds';

  const components = queryElements<HTMLDivElement>(`[${attr}=${value}]`);
  components.forEach((component) => {
    const slider = new Splide(component, {
      arrows: false,
      pagination: false,
      gap: 'var(--style-page--gap)',
      perPage: 3,
      breakpoints: {
        767: { perPage: 2 },
        479: { perPage: 1 },
      },
    });

    slider.mount();
  });
};
