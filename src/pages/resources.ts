import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

export const resources = () => {
  // eslint-disable-next-line no-console
  console.log('resources');

  const clear = queryElement<HTMLLinkElement>('[fs-cmsfilter-element="clear"]');
  if (!clear) return;
  clear.addEventListener('click', () => {
    clear.classList.add('is-active');
  });

  const filters = queryElements<HTMLInputElement>('.filter-radios_item .filter-radio_field');
  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      clear.classList.remove('is-active');
    });
  });
};
