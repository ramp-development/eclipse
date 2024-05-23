import { queryElements } from '$utils/queryElements';

export const theme = () => {
  // eslint-disable-next-line no-console
  console.log('theme');

  const components = queryElements<HTMLElement>('[data-theme-hover]');
  components.forEach((component) => {
    const { theme, themeHover } = component.dataset;

    component.addEventListener('mouseover', () => {
      component.dataset.theme = themeHover;
    });

    component.addEventListener('mouseleave', () => {
      component.dataset.theme = theme;
    });
  });
};
