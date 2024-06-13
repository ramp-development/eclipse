import Typed from 'typed.js';

import { queryElement } from '$utils/queryElement';

export const home = () => {
  // eslint-disable-next-line no-console
  console.log('home');

  const typeEl = queryElement('[data-el="hero-type"]');
  if (!typeEl) return;

  const heroType = new Typed(typeEl, {
    strings: [
      'Bookings',
      'ROAS',
      'Repeat Customers',
      'Product Fit',
      '5 Star Reviews',
      'Profit',
      'Checkouts',
      'AOV',
      'Conversions',
    ],
    // loop: true,
    typeSpeed: 100,
    backSpeed: 25,
    smartBackspace: true,
    showCursor: true,
    startDelay: 500,
    cursorChar: '|',
  });
};
