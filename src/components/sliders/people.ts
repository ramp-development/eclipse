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
      type: 'loop',
      autoplay: true,
      interval: 3000,
      arrows: false,
      gap: 'calc(var(--style-page--gap) * 2)',
      fixedWidth: '40%',
      breakpoints: {
        991: { fixedWidth: '80%', gap: 'var(--style-page--gap)' },
      },
    });

    slider.mount();
  });
};
