import { home } from './home';
import { resources } from './resources';

export const pages = () => {
  // eslint-disable-next-line no-console
  console.log('pages');

  const { pathname } = window.location;
  switch (pathname) {
    case '/':
      home();
      break;
    case '/resources':
      resources();
      break;
  }
};
