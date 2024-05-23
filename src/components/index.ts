import { nav } from './nav';
import { sliders } from './sliders';
import { theme } from './theme';

export const components = () => {
  // eslint-disable-next-line no-console
  console.log('components');

  nav();
  sliders();
  theme();
};
