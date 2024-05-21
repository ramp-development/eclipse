import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { components } from './components';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollTrigger);

  components();
});
