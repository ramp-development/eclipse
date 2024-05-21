import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { queryElement } from '$utils/queryElement';

export const nav = () => {
  // eslint-disable-next-line no-console
  console.log('nav');

  const component = queryElement('.nav_component');
  if (!component) return;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: '+=256',
      scrub: 1,
    },
  });

  timeline.to(component, { paddingTop: 0, backgroundColor: 'var(--color-theme--background)' });
};
